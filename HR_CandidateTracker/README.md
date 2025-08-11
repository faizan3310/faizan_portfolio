# 📊 HR Candidate Tracker System

A web-based HR Dashboard built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) that allows HR managers to upload candidate details via Excel, manage calling statuses, and generate daily summary reports.

## 🚀 Features

### **1. Excel Upload**
- Upload `.xlsx` file from the frontend.
- Parse and store each row in **MongoDB** as a candidate document.
- Supports fields:
  - Name
  - Phone
  - Email
  - Experience (years)
  - Skills
  - Location

### **2. Candidate Management Dashboard**
- Searchable, paginated table of uploaded candidates.
- Update candidate status:
  - Shortlisted
  - Rejected
  - Interested
  - Not Connected
- Add optional notes per candidate.

### **3. Daily Report Summary**
- Track:
  - Total calls made today
  - Connected vs Not Connected
  - Shortlisted count
  - Rejected count
- Visualize data as a **table** or **bar chart**.

### **4. Authentication**
- Simple HR login.
- Protect dashboard routes.

### **Bonus Features**
- Export filtered candidate list to Excel.
- Filter by status.
- Bulk status update.

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios
- Chart.js / Recharts (for graphs)
- XLSX (for Excel handling)

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer (for file uploads)
- XLSX (for parsing Excel files)
- Moment.js (for date handling)
- JSON Web Token (JWT) for authentication
- bcrypt.js (for password hashing)

