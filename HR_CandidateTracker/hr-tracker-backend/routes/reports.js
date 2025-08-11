const express = require('express');
const moment = require('moment');
const Candidate = require('../models/Candidate');
const auth = require('../middleware/auth');
const router = express.Router();

// Daily report summary
router.get('/daily', auth, async (req, res) => {
  try {
    const today = moment().startOf('day');
    const tomorrow = moment().add(1, 'day').startOf('day');

    // Get today's stats
    const todayStats = await Candidate.aggregate([
      {
        $match: {
          lastUpdated: { $gte: today.toDate(), $lt: tomorrow.toDate() }
        }
      },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get total candidates by status
    const totalStats = await Candidate.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get weekly trend (last 7 days)
    const weeklyTrend = [];
    for (let i = 6; i >= 0; i--) {
      const date = moment().subtract(i, 'days').startOf('day');
      const nextDate = moment().subtract(i, 'days').add(1, 'day').startOf('day');
      
      const dayStats = await Candidate.aggregate([
        {
          $match: {
            lastUpdated: { $gte: date.toDate(), $lt: nextDate.toDate() }
          }
        },
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            connected: {
              $sum: {
                $cond: [{ $ne: ['$status', 'Not Connected'] }, 1, 0]
              }
            },
            shortlisted: {
              $sum: {
                $cond: [{ $eq: ['$status', 'Shortlisted'] }, 1, 0]
              }
            }
          }
        }
      ]);

      weeklyTrend.push({
        date: date.format('YYYY-MM-DD'),
        total: dayStats[0]?.total || 0,
        connected: dayStats[0]?.connected || 0,
        shortlisted: dayStats[0]?.shortlisted || 0
      });
    }

    res.json({
      todayStats,
      totalStats,
      weeklyTrend,
      date: today.format('YYYY-MM-DD')
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
