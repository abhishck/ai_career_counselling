/**
 * Resume Upload Utilities
 */

export const validateResumeFile = (file) => {
  const errors = [];
  
  // Check file type
  const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const validExtensions = ['.pdf', '.docx'];
  const fileName = file.name.toLowerCase();
  
  const isValidType = validTypes.includes(file.type) || 
                      validExtensions.some(ext => fileName.endsWith(ext));
  
  if (!isValidType) {
    errors.push('File must be in PDF or DOCX format');
  }
  
  // Check file size (5MB max)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    errors.push(`File size must be less than 5MB (current: ${(file.size / 1024 / 1024).toFixed(2)}MB)`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export const extractKeySkills = (resumeText) => {
  // This is a mock function - in production, use NLP or an API
  const commonSkills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
    'Node.js', 'Express', 'Django', 'Flask', 'FastAPI',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
    'Git', 'REST API', 'GraphQL', 'Agile', 'Scrum'
  ];
  
  return commonSkills.filter(skill => 
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
};

export const calculateResumeScore = (resumeData) => {
  // Mock scoring algorithm - replace with actual logic
  let score = 50; // Base score
  
  if (resumeData.extractedSkills && resumeData.extractedSkills.length > 5) score += 15;
  if (resumeData.extractedSkills && resumeData.extractedSkills.length > 10) score += 10;
  if (resumeData.hasMetrics) score += 10;
  if (resumeData.hasCertifications) score += 15;
  
  return Math.min(score, 100);
};
