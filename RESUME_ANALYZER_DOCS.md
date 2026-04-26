# Resume Analyzer Feature Documentation

## Overview

The Resume Analyzer is a modern, interactive feature that allows users to upload their resumes (in PDF or DOCX format) and receive instant feedback on their qualifications. The feature provides:

- 📤 **Drag-and-drop file upload** with visual feedback
- 📊 **Resume Score** (0-100) with animated circular progress
- ✅ **Extracted Skills** from the resume
- ⚠️ **Missing Skills** based on the job role
- 💡 **Personalized Improvement Suggestions**
- 🎨 **Modern UI** built with React, Tailwind CSS, and Framer Motion animations

## Features

### 1. File Upload

- **Drag & Drop Support**: Users can drag files directly onto the upload area
- **Click to Browse**: Traditional file browser fallback
- **File Validation**:
  - Accepts PDF and DOCX files only
  - Maximum file size: 5MB
  - Real-time error feedback

### 2. Resume Analysis

- Users must specify a target job role
- Analysis includes:
  - Overall resume score
  - List of detected skills
  - Missing skills for the job role
  - Actionable improvement suggestions

### 3. Responsive Design

- Works seamlessly on desktop and mobile
- Smooth animations and transitions
- Loading states with visual feedback

## File Structure

```
client/src/
├── pages/
│   └── ResumeUpload.jsx          # Main component
├── utils/
│   └── resumeUtils.js            # Utility functions
├── api/
│   └── resumeAPI.js              # API types and documentation
└── App.jsx                        # Updated with new route
```

## Component: ResumeUpload.jsx

### Features

#### State Management

- `isDragging`: Tracks drag-over state
- `uploadedFile`: Stores the selected resume file
- `isLoading`: Shows loading state during analysis
- `analysisResult`: Stores the analysis results
- `error`: Error messages for user feedback
- `jobRole`: User's target job role

#### Key Functions

**handleDragEnter, handleDragLeave, handleDragOver**

```javascript
// Manages drag-and-drop visual states
```

**handleDrop**

```javascript
// Handles dropped files, validates, and stores
```

**handleFileSelect**

```javascript
// Validates file type and size
// Shows appropriate error messages
```

**handleAnalyze**

```javascript
// Submits resume for analysis
// Currently uses mock data (replace with actual API)
// Handles loading and error states
```

### UI Sections

1. **Header**: Title and description
2. **Left Column**:
   - Drag-and-drop area
   - File display when uploaded
   - Job role input field
   - Error messages
   - Analyze button

3. **Right Column** (Shows when analysis completes):
   - Resume Score with circular progress
   - Extracted Skills (green badges)
   - Missing Skills (amber badges)
   - Improvement Suggestions (numbered list)

## Styling

The component uses **Tailwind CSS** for all styling:

- **Colors**:
  - Primary: Blue (`blue-600`, `blue-700`)
  - Success: Green (`green-50`, `green-700`)
  - Warning: Amber (`amber-50`, `amber-700`)
  - Error: Red (`red-50`, `red-700`)
  - Neutral: Slate (`slate-900`, `slate-500`, etc.)

- **Animations** (Framer Motion):
  - Smooth entrance animations
  - Drag-over scaling effects
  - Loading spinner rotation
  - Progress circle animation
  - Staggered skill tag animations

## API Integration

### Mock Implementation (Current)

The component currently uses a mock API response that simulates server analysis:

```javascript
setTimeout(() => {
  const mockResult = {
    score: 78,
    extractedSkills: [...],
    missingSkills: [...],
    suggestions: [...],
  };
  setAnalysisResult(mockResult);
}, 1500);
```

### Production Integration

To integrate with a real backend API:

1. **Replace mock API call** in `handleAnalyze()`:

```javascript
const response = await axios.post("/api/resume/analyze", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});
setAnalysisResult(response.data.data);
```

2. **Backend Requirements**: See `resumeAPI.js` for endpoint specifications

## Usage

### Access the Feature

- **URL**: `/resume-upload`
- **In Navbar**: "Resume Analyzer" link (desktop and mobile)

### User Flow

1. Navigate to Resume Analyzer page
2. Drag-and-drop or click to upload resume (PDF/DOCX)
3. Enter target job role
4. Click "Analyze Resume"
5. View results with score, skills, and suggestions

## Customization

### Change Colors

Update Tailwind classes in the component:

```jsx
// Change primary color
className = "bg-blue-600 hover:bg-blue-700"; // Change blue to purple
className = "bg-purple-600 hover:bg-purple-700";
```

### Adjust Animations

Modify framer-motion properties:

```jsx
// Change animation speed
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}  // Change 0.5 to different value
```

### Modify File Size Limit

In `ResumeUpload.jsx`:

```javascript
const maxSize = 5 * 1024 * 1024; // Change to 10MB: 10 * 1024 * 1024
```

### Support Additional File Types

Update `handleFileSelect()`:

```javascript
const validTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword", // Add .doc support
];
```

## Responsive Breakpoints

- **Mobile**: Single column layout (full width)
- **Tablet** (768px+): Two column layout begins
- **Desktop**: Full two-column layout

## Error Handling

The component handles:

- ✅ Invalid file types with specific error message
- ✅ File size violations with size information
- ✅ Missing job role input
- ✅ API errors with fallback messages
- ✅ Network timeouts

## Performance Considerations

1. **File Size**: Limited to 5MB to prevent memory issues
2. **Animations**: GPU-accelerated with Framer Motion
3. **Lazy Loading**: Results only render when analysis completes
4. **No Unnecessary Re-renders**: Using React hooks efficiently

## Dependencies

- **react**: UI framework
- **react-router-dom**: Navigation
- **axios**: HTTP requests
- **framer-motion**: Animations
- **lucide-react**: Icons
- **@tailwindcss/vite**: CSS framework

## Future Enhancements

1. **Resume File Parsing**: Implement actual resume text extraction
2. **NLP Integration**: Use AI to identify skills and calculate score
3. **Job Role Database**: Query job requirements from database
4. **Resume History**: Save and compare multiple uploads
5. **Export Report**: Download analysis as PDF
6. **Real-time Suggestions**: Live feedback as users update resume
7. **Comparison View**: Compare with other resumes
8. **Role Recommendations**: AI-suggested career paths

## Testing

To test locally:

```bash
npm run dev
# Visit: http://localhost:5173/resume-upload
```

Mock data is hardcoded for development. Once backend is ready, replace mock implementation with actual API calls.

## Troubleshooting

| Issue                   | Solution                                                             |
| ----------------------- | -------------------------------------------------------------------- |
| File upload not working | Check file type and size limits                                      |
| Animations stuttering   | Disable animations on low-end devices or reduce animation complexity |
| Styles not applied      | Ensure Tailwind CSS is properly configured in vite.config.js         |
| API not working         | Implement backend endpoints as specified in `resumeAPI.js`           |

## Support

For issues or feature requests, please contact the development team.
