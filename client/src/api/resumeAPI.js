/**
 * API Integration Types and Endpoints
 * 
 * This file documents the backend API endpoints that the Resume Upload
 * feature can integrate with. These are optional and can be implemented
 * in the backend when ready.
 */

/**
 * Resume Analysis Endpoint
 * 
 * POST /api/resume/analyze
 * 
 * Request:
 * - Content-Type: multipart/form-data
 * - Fields:
 *   - resume: File (PDF or DOCX)
 *   - jobRole: string
 * 
 * Response:
 * {
 *   success: boolean;
 *   data: {
 *     score: number (0-100);
 *     extractedSkills: string[];
 *     missingSkills: string[];
 *     suggestions: string[];
 *     resumeText: string;
 *   };
 * }
 * 
 * Example Usage:
 * ```javascript
 * const formData = new FormData();
 * formData.append('resume', file);
 * formData.append('jobRole', 'Senior Developer');
 * 
 * const response = await axios.post('/api/resume/analyze', formData, {
 *   headers: { 'Content-Type': 'multipart/form-data' }
 * });
 * ```
 */

/**
 * Save Resume Analysis Endpoint
 * 
 * POST /api/resume/save
 * 
 * Request:
 * {
 *   userId: string;
 *   fileName: string;
 *   jobRole: string;
 *   analysisResult: {
 *     score: number;
 *     extractedSkills: string[];
 *     missingSkills: string[];
 *     suggestions: string[];
 *   };
 * }
 * 
 * Response:
 * {
 *   success: boolean;
 *   data: {
 *     resumeId: string;
 *     savedAt: string (ISO date);
 *   };
 * }
 */

/**
 * Get User's Resume History
 * 
 * GET /api/resume/history?userId=<userId>
 * 
 * Response:
 * {
 *   success: boolean;
 *   data: [
 *     {
 *       id: string;
 *       fileName: string;
 *       jobRole: string;
 *       score: number;
 *       uploadedAt: string;
 *     }
 *   ];
 * }
 */

/**
 * Get Resume Details
 * 
 * GET /api/resume/:resumeId
 * 
 * Response:
 * {
 *   success: boolean;
 *   data: {
 *     id: string;
 *     fileName: string;
 *     jobRole: string;
 *     score: number;
 *     extractedSkills: string[];
 *     missingSkills: string[];
 *     suggestions: string[];
 *     uploadedAt: string;
 *   };
 * }
 */

// Mock implementation for frontend testing
export const mockResumeAnalysis = {
  score: 78,
  extractedSkills: [
    'Python', 'JavaScript', 'React', 'Node.js', 'MongoDB',
    'REST API', 'Git', 'AWS', 'Docker', 'Agile'
  ],
  missingSkills: [
    'TypeScript', 'GraphQL', 'Kubernetes', 'CI/CD', 'System Design',
    'PostgreSQL', 'Redis', 'Apache Kafka'
  ],
  suggestions: [
    'Add more specific metrics and quantifiable achievements to your results section',
    'Include certifications relevant to your target job role',
    'Enhance your proficiency in TypeScript and system design patterns',
    'Consider adding more projects that demonstrate your leadership skills',
    'Include experience with containerization and orchestration tools',
    'Highlight any open-source contributions or community involvement'
  ],
  resumeText: 'Sample resume content analyzed successfully'
};
