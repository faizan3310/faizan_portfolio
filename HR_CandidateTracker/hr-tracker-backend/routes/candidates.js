const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const Candidate = require('../models/Candidate');
const auth = require('../middleware/auth');
const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('sheet') || file.mimetype.includes('excel') || file.originalname.endsWith('.xlsx') || file.originalname.endsWith('.xls')) {
      cb(null, true);
    } else {
      cb(new Error('Only Excel files are allowed'), false);
    }
  }
});

// Upload Excel file
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    const candidates = [];
    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      try {
        // Map Excel columns to candidate fields
        const candidate = new Candidate({
          name: row.Name || row.name || '',
          phone: row.Phone || row.phone || '',
          email: row.Email || row.email || '',
          experience: parseInt(row.Experience || row.experience || 0),
          skills: row.Skills || row.skills || '',
          location: row.Location || row.location || '',
          uploadedBy: req.user.userId
        });

        await candidate.save();
        candidates.push(candidate);
        successCount++;
      } catch (error) {
        errorCount++;
        errors.push(`Row ${i + 2}: ${error.message}`);
      }
    }

    res.json({
      message: `Upload completed. ${successCount} candidates added, ${errorCount} errors`,
      successCount,
      errorCount,
      errors: errors.slice(0, 10), // Limit error messages
      candidates
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all candidates with pagination and search
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const status = req.query.status || '';

    let query = {};
    
    if (search) {
      query.$text = { $search: search };
    }
    
    if (status && status !== 'all') {
      query.status = status;
    }

    const total = await Candidate.countDocuments(query);
    const candidates = await Candidate.find(query)
      .populate('uploadedBy', 'email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({
      candidates,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update candidate status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const candidate = await Candidate.findById(req.params.id);
    
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    candidate.status = status;
    if (notes) candidate.notes = notes;
    candidate.lastUpdated = new Date();
    
    await candidate.save();
    
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Bulk status update
router.patch('/bulk-status', auth, async (req, res) => {
  try {
    const { candidateIds, status } = req.body;
    
    await Candidate.updateMany(
      { _id: { $in: candidateIds } },
      { status, lastUpdated: new Date() }
    );
    
    res.json({ message: 'Bulk update completed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Export candidates to Excel
router.get('/export', auth, async (req, res) => {
  try {
    const status = req.query.status || '';
    let query = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }

    const candidates = await Candidate.find(query).populate('uploadedBy', 'email');
    
    const data = candidates.map(candidate => ({
      Name: candidate.name,
      Phone: candidate.phone,
      Email: candidate.email,
      Experience: candidate.experience,
      Skills: candidate.skills,
      Location: candidate.location,
      Status: candidate.status,
      Notes: candidate.notes || '',
      'Uploaded By': candidate.uploadedBy.email,
      'Upload Date': candidate.createdAt.toDateString()
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    
    res.setHeader('Content-Disposition', 'attachment; filename=candidates.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
