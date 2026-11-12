// All portfolio content lives here.
export const profile = {
  name: 'Abi S.', email: 'abiselvaraj162006@gmail.com',
  github: 'https://github.com/Abis-datatech',
  linkedin: 'https://www.linkedin.com/in/abi-s-3a07a0358/',
  college: 'RVS Institute of Technology, Coimbatore', degree: 'B.Tech Artificial Intelligence and Data Science',
  cgpa: '8.16', grad: '2027',
}
// Only real links the owner provided. Leave live/repo null to hide the button.
export const projects = [
  { title: 'Tripora – India Travel Discovery and Trip Planner', category: 'Full-Stack Web App · Travel', status: 'In progress',
    desc: 'A full-stack project designed to help users explore destinations, create day-wise itineraries, and estimate trip budgets.',
    tech: ['React', 'Flask', 'MySQL'], image: '/images/tripora.png', imageAlt: 'Tripora home page with the headline Find your own somewhere',
    live: null, repo: null },
  { title: 'Career Path Recommendation System', category: 'Web App · Recommendation', status: 'Completed',
    desc: 'A Flask-based application that suggests suitable career paths based on users’ skills and interests.',
    tech: ['Python', 'Flask'], image: '/images/career-path-recommendation.png', imageAlt: 'Career Path Analyzer application home screen',
    live: 'https://lnkd.in/gDMfSGTt', repo: 'https://lnkd.in/gkGGTSYR' },
  { title: 'CloudVault', category: 'Cloud · File Storage', status: 'Completed',
    desc: 'A cloud-based file storage application with user authentication and file upload, download, and management features.',
    tech: ['Python', 'Flask', 'MySQL', 'MinIO'], image: '/images/cloudvault.webp', imageAlt: 'CloudVault dashboard showing folders and an uploaded file',
    live: null, repo: 'https://lnkd.in/gdAFgBtq' },
  { title: 'GlowNest', category: 'Landing Page · Frontend', status: 'Completed',
    desc: 'A responsive skincare brand landing page built with a clean and modern user interface.',
    tech: ['HTML', 'CSS', 'JavaScript'], image: null, // no screenshot file yet: shows the live site preview. Add /images/glownest.png to use a screenshot.
    live: 'https://dreamy-pastelito-0c223c.netlify.app', repo: 'https://github.com/AbiS-datatech/GlowNest-Landing-Page' },
  // No status set on purpose (not specified); add status: 'Completed' or 'In progress' to show a badge.
  // No screenshot file yet: shows a live preview. Add /images/aranya-ayurveda.png and set image: to use a screenshot.
  { title: 'Aranya Ayurveda – Landing Page', category: 'Landing Page · Frontend',
    desc: 'A responsive Ayurveda and wellness landing page designed to present Ayurvedic products and services through an elegant, user-friendly interface.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], image: null,
    live: 'https://ayurvedha-landing.vercel.app/', repo: 'https://github.com/AbiS-datatech/aranya-ayurveda-landing' },
]
export const skills = {
  Programming: ['Python', 'Java (Basic)', 'Machine Learning', 'Natural Language Processing (NLP)'],
  'Frontend Development': ['HTML', 'CSS', 'JavaScript', 'React'],
  'Backend Development': ['Flask', 'REST API Development'],
  'Cloud & Technologies': ['Cloud Computing', 'AWS', 'Microsoft Azure', 'Linux Administration', 'Computer Networking'],
  'Tools & Platforms': ['Git', 'GitHub', 'Linux', 'Windows'],
}
export const experience = [
  ['Data Analytics Intern', 'Gateway Solution', 'Data analysis concepts, data visualization and analytics workflows.'],
  ['Data Analytics Intern', 'Novitech', 'Data preprocessing, visualization and working with datasets for business insights.'],
  ['Full Stack & Web Development Intern', 'Novitech', 'Built web applications and worked on frontend–backend integration.'],
  ['Cloud Computing Intern', 'New Technology', 'Cloud fundamentals, deployment concepts, cloud services and infrastructure management.'],
  ['Cloud Infrastructure Intern', 'Google (Coursera)', 'Cloud infrastructure, networking, virtualization and cloud architecture.'],
]
// Extra entries shown in the same "Experience & Certificates" timeline.
// Certificate image: save it as public/images/cloud-service-management-workshop.jpg (or change the path below).
export const learning = [
  { title: 'Email Spam Detection using NLP', label: 'Group Project Participation',
    text: 'Explored the use of Natural Language Processing and Machine Learning techniques for classifying emails as spam or legitimate.' },
  { title: 'Cloud Service Management Workshop', label: 'Certificate of Participation',
    text: 'Organized by: Department of Artificial Intelligence and Data Science, RVS Technical Campus, Coimbatore, in collaboration with digri.ai.',
    date: 'Date: October 31, 2025.', certificate: '/images/cloud-service-management-workshop.jpg' },
]
export const faqs = [
  ['What technologies do I work with?', 'Python, Flask, HTML, CSS, JavaScript and React, along with AWS, Microsoft Azure, Linux, Git and GitHub. I’m interested in cloud computing, networking and REST APIs.'],
  ['What projects have I built?', 'Tripora (in progress), CloudVault, Career Path Recommendation System and GlowNest. I also took part in a group Email Spam Detection project using NLP.'],
  ['What career opportunities am I interested in?', 'I’m interested in internship and entry-level opportunities in Web Development, IT Support, Networking, and Cloud Computing. I look forward to gaining practical industry experience, improving my technical skills, and contributing to real-world projects while continuing to learn and grow.'],
  ['How can someone contact me?', 'Use the contact form below or email abiselvaraj162006@gmail.com.'],
]
