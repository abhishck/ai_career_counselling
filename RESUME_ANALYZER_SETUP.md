# Resume Analyzer - Quick Setup Guide

## ✅ What's Been Created

### New Files

1. **[ResumeUpload.jsx](./client/src/pages/ResumeUpload.jsx)** - Main component with all UI
2. **[resumeUtils.js](./client/src/utils/resumeUtils.js)** - Utility functions
3. **[resumeAPI.js](./client/src/api/resumeAPI.js)** - API documentation and mocks
4. **[RESUME_ANALYZER_DOCS.md](./RESUME_ANALYZER_DOCS.md)** - Full documentation

### Updated Files

1. **[App.jsx](./client/src/App.jsx)** - Added `/resume-upload` route
2. **[Navbar.jsx](./client/src/components/Navbar.jsx)** - Added Resume Analyzer link

---

## 🚀 How to Use

### 1. Access the Feature

- Navigate to `http://localhost:5173/resume-upload`
- Or click "Resume Analyzer" in the navbar

### 2. User Flow

1. **Upload Resume**
   - Drag and drop PDF/DOCX file, or click to browse
   - File size limit: 5MB

2. **Enter Job Role**
   - Type your target position (e.g., "Senior Frontend Developer")

3. **Click Analyze**
   - System processes the resume
   - ~1.5 seconds for mock data (real API will vary)

4. **View Results**
   - Resume Score (0-100)
   - Extracted Skills
   - Missing Skills for the role
   - Improvement Suggestions

---

## 🎨 UI Features

### Modern Design

- ✅ Tailwind CSS for styling
- ✅ Framer Motion animations
- ✅ Lucide React icons
- ✅ Responsive layout (mobile & desktop)
- ✅ Smooth drag-over effects
- ✅ Animated progress circle
- ✅ Loading states with spinners

### Sections

1. **Left Panel (Desktop)**: Upload and Input
2. **Right Panel (Desktop)**: Analysis Results
3. **Mobile**: Stacked layout (single column)

---

## 🔧 Current Implementation

### Mock Data

The component currently uses Mock API responses for testing. Real data will be:

```javascript
{
  score: 78,                    // 0-100
  extractedSkills: [...],       // Skills found in resume
  missingSkills: [...],         // Skills needed for role
  suggestions: [...]            // Actionable improvements
}
```

### File Validation

- ✅ Only PDF and DOCX accepted
- ✅ Max 5MB file size
- ✅ Real-time validation with error messages

---

## 🔌 Backend Integration (Next Steps)

To connect with a real backend:

### 1. Update API Endpoint

In `ResumeUpload.jsx`, replace mock API call:

```javascript
// Replace this section (line ~100):
setTimeout(() => { ... }, 1500);

// With this:
const response = await axios.post('/api/resume/analyze', formData, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
setAnalysisResult(response.data.data);
```

### 2. Backend Requirements

Implement endpoint: `POST /api/resume/analyze`

**Request:**

```javascript
{
  resume: File,        // PDF or DOCX
  jobRole: string      // e.g., "Senior Developer"
}
```

**Response:**

```javascript
{
  score: number,
  extractedSkills: string[],
  missingSkills: string[],
  suggestions: string[]
}
```

See [resumeAPI.js](./client/src/api/resumeAPI.js) for full API specs.

---

## 📁 File Structure

```
ai_career_counselling/
├── client/
│   └── src/
│       ├── pages/
│       │   └── ResumeUpload.jsx          ← Main component
│       ├── utils/
│       │   └── resumeUtils.js            ← Helper functions
│       ├── api/
│       │   └── resumeAPI.js              ← API specs
│       ├── components/
│       │   └── Navbar.jsx                ← Updated
│       └── App.jsx                       ← Updated
└── RESUME_ANALYZER_DOCS.md               ← Full documentation
```

---

## 🎯 Key Features Implemented

- ✅ Drag-and-drop file upload
- ✅ Click-to-browse file selector
- ✅ Resume score with circular progress animation
- ✅ Extracted skills display
- ✅ Missing skills based on job role
- ✅ Personalized improvement suggestions
- ✅ File validation (type & size)
- ✅ Loading states and animations
- ✅ Error handling with user-friendly messages
- ✅ Responsive mobile/desktop layout
- ✅ Modern Tailwind CSS styling
- ✅ Smooth Framer Motion animations
- ✅ Accessible UI with proper semantics

---

## 🚦 Testing Checklist

- [ ] File upload works (drag & drop)
- [ ] File validation shows errors
- [ ] Job role input works
- [ ] Analyze button triggers analysis
- [ ] Results display correctly
- [ ] Animations play smoothly
- [ ] Mobile responsive
- [ ] No console errors

---

## 💡 Customization Tips

### Change Colors

Update Tailwind classes (e.g., blue → purple):

```jsx
className="bg-blue-600"  →  className="bg-purple-600"
```

### Adjust Animations

Modify framer-motion durations:

```jsx
transition={{ duration: 1.5 }}  →  transition={{ duration: 2 }}
```

### Change File Size Limit

In `ResumeUpload.jsx`:

```javascript
const maxSize = 5 * 1024 * 1024; // Change 5 to desired MB
```

### Add More Skills

Mock data in `ResumeUpload.jsx` (~line 105):

```javascript
extractedSkills: ['Python', 'JavaScript', ...],
```

---

## 📞 Support

For questions or issues:

1. Check [RESUME_ANALYZER_DOCS.md](./RESUME_ANALYZER_DOCS.md) for detailed docs
2. Review [resumeAPI.js](./client/src/api/resumeAPI.js) for API specs
3. Check [ResumeUpload.jsx](./client/src/pages/ResumeUpload.jsx) comments

---

## 🎉 You're All Set!

The Resume Analyzer is ready to use. Start the dev server and navigate to `/resume-upload` to see it in action!

```bash
npm run dev
# Visit: http://localhost:5173/resume-upload
```

Happy analyzing! 🚀
