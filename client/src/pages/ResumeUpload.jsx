import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function ResumeUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);
  const [jobRole, setJobRole] = useState("");

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExtensions = [".pdf", ".docx"];

    const fileName = file.name.toLowerCase();
    const isValidType =
      validTypes.includes(file.type) ||
      validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValidType) {
      setError("Please upload a PDF or DOCX file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      return;
    }

    setError(null);
    setUploadedFile(file);
    setAnalysisResult(null);
  };

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) {
      setError("Please upload a resume first.");
      return;
    }

    if (!jobRole.trim()) {
      setError("Please enter your desired job role.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("resume", uploadedFile);
      formData.append("jobRole", jobRole);

      // Mock API call - Replace with actual API endpoint
      // const response = await axios.post('/api/analyze-resume', formData, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // });

      // Simulating API response for demonstration
      setTimeout(() => {
        const mockResult = {
          score: 78,
          extractedSkills: [
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "REST API",
            "Git",
            "AWS",
            "Docker",
            "Agile",
          ],
          missingSkills: [
            "TypeScript",
            "GraphQL",
            "Kubernetes",
            "CI/CD",
            "System Design",
            "PostgreSQL",
            "Redis",
            "Apache Kafka",
          ],
          suggestions: [
            "Add more specific metrics and quantifiable achievements to your results section",
            "Include certifications relevant to your target job role",
            "Enhance your proficiency in TypeScript and system design patterns",
            "Consider adding more projects that demonstrate your leadership skills",
            "Include experience with containerization and orchestration tools",
            "Highlight any open-source contributions or community involvement",
          ],
          resumeText: "Sample resume content analyzed successfully",
        };

        setAnalysisResult(mockResult);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to analyze resume. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setAnalysisResult(null);
    setJobRole("");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Resume Analyzer
          </h1>
          <p className="text-lg text-slate-600">
            Upload your resume and get instant feedback on your qualifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Step 1: Upload Resume
              </h2>

              {/* Drag and Drop Area */}
              <motion.div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                animate={{
                  backgroundColor: isDragging ? "#f0f9ff" : "#ffffff",
                  borderColor: isDragging ? "#3b82f6" : "#e2e8f0",
                }}
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all"
              >
                <input
                  type="file"
                  id="file-input"
                  accept=".pdf,.docx"
                  onChange={handleFileInput}
                  className="hidden"
                  disabled={isLoading}
                />

                {!uploadedFile ? (
                  <label htmlFor="file-input" className="cursor-pointer">
                    <motion.div
                      animate={{ scale: isDragging ? 1.05 : 1 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <motion.div
                        animate={{ y: isDragging ? -10 : 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Upload className="w-12 h-12 text-blue-500 mx-auto" />
                      </motion.div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900">
                          Drop your resume here
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                          or click to browse (PDF or DOCX, max 5MB)
                        </p>
                      </div>
                    </motion.div>
                  </label>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <motion.div
                        initial={{ rotate: -180 }}
                        animate={{ rotate: 0 }}
                      >
                        <FileText className="w-10 h-10 text-blue-500" />
                      </motion.div>
                      <div className="text-left">
                        <p className="font-semibold text-slate-900">
                          {uploadedFile.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {(uploadedFile.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleRemoveFile}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>

              {/* Job Role Input */}
              <div className="mt-8">
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Target Job Role
                </label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="e.g., Senior Frontend Developer"
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
                />
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-700">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Analyze Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnalyze}
                disabled={!uploadedFile || isLoading || !jobRole.trim()}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <Upload className="w-5 h-5" />
                    </motion.div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Analyze Resume
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Analysis Results Section */}
          <AnimatePresence>
            {analysisResult && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Resume Score */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Resume Score
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="relative w-32 h-32"
                    >
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#e2e8f0"
                          strokeWidth="8"
                          fill="none"
                        />
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          initial={{ strokeDashoffset: `${2 * Math.PI * 56}` }}
                          animate={{
                            strokeDashoffset: `${2 * Math.PI * 56 * (1 - analysisResult.score / 100)}`,
                          }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="text-center"
                        >
                          <p className="text-4xl font-bold text-blue-600">
                            {analysisResult.score}
                          </p>
                          <p className="text-xs text-slate-500">out of 100</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <p className="text-center text-slate-600 text-sm mt-4">
                    Your resume is{" "}
                    {analysisResult.score >= 80
                      ? "excellent"
                      : analysisResult.score >= 60
                        ? "good"
                        : "needs improvement"}
                  </p>
                </motion.div>

                {/* Extracted Skills */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Extracted Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.extractedSkills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Missing Skills */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    Missing Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.missingSkills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Suggestions */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                    Improvement Suggestions
                  </h3>
                  <ul className="space-y-3">
                    {analysisResult.suggestions.map((suggestion, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3 text-sm text-slate-700"
                      >
                        <span className="text-blue-500 font-bold mt-0.5">
                          {idx + 1}.
                        </span>
                        <span>{suggestion}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
