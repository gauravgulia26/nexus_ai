export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'docker' | 'api' | 'paper';
}

export interface MetricItem {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  period: string;
  status: string;
  summary: string;
  engineeringHighlights: string[];
  technologies: string[];
  metrics: MetricItem[];
  links: ProjectLink[];
}

export interface ExperienceRecord {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  headline: string;
  achievements: string[];
  technologies: string[];
  metrics: MetricItem[];
}

export interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
}

export interface ResearchRecord {
  title: string;
  authors: string;
  venue: string;
  doi: string;
  url: string;
  abstract: string;
  methodology: string[];
  outcomes: string[];
  technologies: string[];
  metrics: MetricItem[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  highlights: { name: string; evidence: string }[];
}

export interface PrincipleRecord {
  index: string;
  title: string;
  statement: string;
  evidence: string;
}

export const PERSONAL_DATA = {
  name: 'Gourav Gulia',
  title: 'Machine Learning Engineer',
  positioning: 'Machine Learning Engineer building production-grade ML, GenAI, and data systems.',
  specializations: [
    'Machine Learning & MLOps',
    'Computer Vision & Vector Search',
    'Generative AI & LangGraph',
    'Low-Latency API Serving',
  ],
  headline: 'Machine Learning Engineer building production-grade ML, GenAI, and data systems.',
  summary:
    'Machine Learning Engineer with hands-on experience building and deploying production ML systems at Ernst & Young (EY). Specializing in MLOps pipelines, high-dimensional vector search, and multi-agent GenAI architectures. Backed by a strong mathematical and statistical foundation (M.Sc. Data Science) with a focus on low-latency inference, reproducible pipelines, and clean software design.',
  location: 'Haryana / Delhi-NCR, India',
  email: 'gaurxv.gulia@gmail.com',
  github: 'https://github.com/gauravgulia26',
  linkedin: 'https://www.linkedin.com/in/gauravgulia1205/',
  resumeUrl: '/webpage_resume.pdf',
  systemStatus: 'Available for ML / AI Roles',
  coreMetrics: [
    { label: 'ROLE', value: 'Sr. Analyst', detail: 'Enterprise AI & Machine Learning at EY' },
    { label: 'SCALE', value: '1M+ Records', detail: 'Fast similarity matching across large databases' },
    { label: 'SYSTEMS', value: 'Production APIs', detail: 'Low-latency services and automated workflows' },
    { label: 'PRACTICE', value: 'Tested & Versioned', detail: 'End-to-end reproducible data pipelines' },
  ],
};

export const ALL_PROJECTS: ProjectData[] = [
  {
    id: 'analytica',
    title: 'Analytica: Multi-Agent AI Data Analysis System',
    tagline: 'Autonomous data analysis with stateful multi-agent orchestration and Python execution',
    category: 'GenAI & Multi-Agent',
    badge: 'Multi-Agent AI',
    period: '2026',
    status: 'Open Source',
    summary:
      'Autonomous multi-agent system combining LLM reasoning with sandboxed, deterministic Python execution for verified tabular data analysis and visualization.',
    engineeringHighlights: [
      'Built a modular agent architecture using LangGraph for stateful query planning and isolated code execution.',
      'Implemented structured Pydantic validation and error recovery loops to ensure reliable, code-grounded results.',
    ],
    technologies: ['Python', 'LangGraph', 'LangChain', 'Groq LPU', 'Pydantic v2', 'Streamlit', 'Docker'],
    metrics: [
      { label: 'Orchestration', value: 'Stateful LangGraph' },
      { label: 'Execution', value: 'Sandboxed Python' },
      { label: 'Architecture', value: 'Multi-Agent Personas' },
      { label: 'Validation', value: 'Pydantic Schemas' },
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/gauravgulia26/analytica', type: 'github' },
    ],
  },
  {
    id: 'burnout-prediction',
    title: 'BurnoutAI: End-to-End ML Risk Prediction Engine',
    tagline: 'Configurable ML pipeline with versioned datasets, experiment tracking, and Docker serving',
    category: 'MLOps & Systems',
    badge: 'MLOps & Systems',
    period: 'Jun 2026 – Aug 2026',
    status: 'Deployed',
    summary:
      'End-to-end machine learning system translating student behavioral and academic data into calibrated burnout risk scores, with complete artifact versioning and containerized serving.',
    engineeringHighlights: [
      'Built an artifact-driven pipeline using DVC and MLflow for deterministic version control from raw data to model weights.',
      'Developed a high-throughput REST service packaged in a public Docker container with an interactive Streamlit UI.',
    ],
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'Streamlit'],
    metrics: [
      { label: 'Deployment', value: 'Docker Hub Public Image' },
      { label: 'Tracking', value: 'Experiment Lineage' },
      { label: 'API Serving', value: 'Low-Latency REST' },
      { label: 'Reproducibility', value: 'Deterministic Hashes' },
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/gauravgulia26/burnout_classifier', type: 'github' },
      { label: 'Live Streamlit UI', url: 'https://burnout-compass.streamlit.app/', type: 'demo' },
      { label: 'Docker Hub Image', url: 'https://hub.docker.com/u/gouravgulia4348', type: 'docker' },
      { label: 'FastAPI Docs', url: 'https://burnout-classifier.fastapicloud.dev/docs', type: 'api' },
    ],
  },
  {
    id: 'aurelius',
    title: 'Aurelius: Multi-Agent Research & LLMOps System',
    tagline: '5-persona stateful LangGraph workflow with LangSmith tracing and citation verification',
    category: 'GenAI & LLMOps',
    badge: 'GenAI & LLMOps',
    period: 'Jun 2026 – Aug 2026',
    status: 'Live Application',
    summary:
      'Autonomous multi-agent research system that coordinates 5 specialized personas to decompose complex queries, gather cross-source evidence, and generate citation-backed technical reports.',
    engineeringHighlights: [
      'Coordinated a 5-persona stateful DAG with self-correcting review loops and automated scorecards for citation verification.',
      'Tracked token economics and latency using LangSmith distributed tracing and Groq LPU inference acceleration.',
    ],
    technologies: ['LangGraph', 'LangChain', 'LangSmith', 'Groq LPU', 'Python 3.12', 'Pydantic v2', 'Streamlit', 'Docker'],
    metrics: [
      { label: 'Multi-Agent Graph', value: '5 Personas' },
      { label: 'Observability', value: 'LangSmith Tracing' },
      { label: 'Inference', value: 'Groq LPU' },
      { label: 'Test Suite', value: '28 Automated Tests' },
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/gauravgulia26/aurelius', type: 'github' },
      { label: 'Live Streamlit UI', url: 'https://aurelius-ai.streamlit.app/', type: 'demo' },
    ],
  },
  {
    id: 'inspector-library',
    title: 'Inspector: Biometric Verification & Similarity Search',
    tagline: 'Fast similarity retrieval and impersonation detection at EY',
    category: 'Computer Vision & Biometrics',
    badge: 'Computer Vision',
    period: 'Jul 2025 – Aug 2025',
    status: 'EY Internal Package',
    summary:
      'In-house high-throughput biometric verification library and similarity search engine engineered at Ernst & Young (EY) to audit large-scale government examination datasets (SSC, HSSC, NHA).',
    engineeringHighlights: [
      'Built fast similarity search across 1M+ candidate records to detect duplicate identities across nationwide exam candidates.',
      'Implemented automated image quality filters and text matching algorithms, reducing false positive detections by ~11%.',
    ],
    technologies: ['Computer Vision', 'Deep Learning', 'Vector Databases', 'Similarity Search', 'Python Packaging', 'Multiprocessing'],
    metrics: [
      { label: 'Database Scale', value: '1M+ Candidate Records' },
      { label: 'Search Speed', value: 'Sub-Second Retrieval' },
      { label: 'Accuracy Gain', value: '+25% Identity Detection' },
      { label: 'Distribution', value: 'Reusable Python Package' },
    ],
    links: [
      { label: 'View EY Experience', url: '#experience', type: 'paper' },
    ],
  },
  {
    id: 'cip-platform',
    title: 'Candidate Intelligence Platform (CIP)',
    tagline: 'Forensic risk scoring model and LangGraph RAG investigation copilot at EY GPS Assurance',
    category: 'Enterprise AI & Forensics',
    badge: 'Enterprise AI',
    period: 'Jan 2026 – Mar 2026',
    status: 'EY Production',
    summary:
      'Enterprise-scale risk intelligence platform combining an ensemble candidate malpractice risk scoring engine with a LangGraph RAG copilot for automated SOP case retrieval.',
    engineeringHighlights: [
      'Engineered ensemble risk models on multi-modal demographic and examination records for public sector audit teams.',
      'Constructed a LangGraph RAG copilot retrieving official SOPs and historical cases for explainable, evidence-backed decision support.',
    ],
    technologies: ['LangGraph', 'RAG', 'Apache Airflow', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'Streamlit', 'Python'],
    metrics: [
      { label: 'Orchestration', value: 'Apache Airflow DAGs' },
      { label: 'Explainability', value: 'LangGraph RAG Copilot' },
      { label: 'Lineage', value: 'Version Controlled' },
      { label: 'Backend', value: 'FastAPI Microservice' },
    ],
    links: [
      { label: 'View EY Experience', url: '#experience', type: 'paper' },
    ],
  },
  {
    id: 'logpunch-pypi',
    title: 'Logpunch: Structured Logging & Diagnostics Library',
    tagline: 'Published Python package on PyPI for production machine learning workflows',
    category: 'Developer Tooling & Infrastructure',
    badge: 'Open Source',
    period: 'May 2025 – Jun 2025',
    status: 'Live on PyPI',
    summary:
      'Lightweight, high-performance logging package published to PyPI to eliminate logging boilerplate, enforce Pydantic configuration schemas, and deliver module-aware stack trace diagnostics.',
    engineeringHighlights: [
      'Published to PyPI with seamless `pip install logpunch` installation for production ML pipelines.',
      'Enforces strict Pydantic v2 configuration validation to prevent silent pipeline logging failures.',
    ],
    technologies: ['Python', 'PyPI Packaging', 'Pydantic v2', 'Exception Handling', 'Structured Logging'],
    metrics: [
      { label: 'Distribution', value: 'Live PyPI Package' },
      { label: 'Command', value: 'pip install logpunch' },
      { label: 'Validation', value: 'Pydantic v2 Schemas' },
      { label: 'Telemetry', value: 'Structured JSON & ANSI' },
    ],
    links: [
      { label: 'PyPI Package', url: 'https://pypi.org/project/logpunch/', type: 'demo' },
    ],
  },
];

export const RESEARCH_WORK: ResearchRecord = {
  title: 'Liver Disease Prediction Using Ensemble Learning',
  authors: 'Gourav Gulia et al.',
  venue: 'IEEE Peer-Reviewed International Conference Publication',
  doi: '10.1109/IC-EETA66496.2025.11548371',
  url: 'https://doi.org/10.1109/IC-EETA66496.2025.11548371',
  abstract:
    'A clinical diagnostic predictive framework engineered for early-stage hepatic pathology detection. Evaluates comparative classification algorithms against clinical biochemical markers, utilizing statistical feature selection, cross-validation, and weighted decision voting to achieve up to 95% diagnostic accuracy.',
  methodology: [
    'Multi-model ensemble architecture combining multiple classification algorithms with calibrated decision voting boundaries.',
    'Comprehensive data preprocessing, missing-value statistical imputation, outlier filtering, and feature importance ranking.',
    'Rigorous cross-validation, clinical sensitivity tuning, and ROC-AUC threshold calibration on benchmark medical datasets.',
  ],
  outcomes: [
    'Achieved up to 95% diagnostic accuracy, demonstrating statistically significant improvement over single-model baselines.',
    'Calibrated high-sensitivity decision boundaries to minimize false negatives in clinical triage workflows.',
    'Peer-reviewed and published in the IEEE Xplore digital library.',
  ],
  technologies: ['Python', 'Ensemble Learning', 'Scikit-Learn', 'Statistical Modeling', 'ROC-AUC Calibration', 'Clinical Analytics'],
  metrics: [
    { label: 'Venue', value: 'IEEE Xplore' },
    { label: 'Accuracy', value: 'Up to 95%' },
    { label: 'Methodology', value: 'Weighted Ensembles' },
    { label: 'Status', value: 'Peer-Reviewed & Indexed' },
  ],
};

export const EXPERIENCES: ExperienceRecord[] = [
  {
    company: 'EY (Ernst & Young)',
    role: 'Sr. Analyst — AI & Machine Learning Systems',
    location: 'Gurugram, India',
    period: 'Jun 2025 – Jun 2026',
    type: 'Full-time',
    headline:
      'Enterprise forensic AI, biometric verification pipelines, and automated MLOps for large-scale public sector clients (SSC, HSSC, NHA).',
    achievements: [
      'Developed and deployed production face verification, image quality assessment, and identity fraud detection pipelines for national government clients.',
      'Designed an ensemble model evaluation framework with calibrated threshold tuning, reducing false positive detections by nearly 11%.',
      'Built high-performance similarity search across 1M+ candidate records and text matching systems, improving duplicate identity detection by ~25%.',
      'Modernized legacy ML systems into modular backend services with automated workflows; optimized model inference to reduce latency by ~35% and memory usage by 22%.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Apache Airflow',
      'MLflow',
      'Deep Learning',
      'Computer Vision',
      'OpenCV',
      'VectorDB',
      'Docker',
      'Scikit-Learn',
      'Pandas',
    ],
    metrics: [
      { label: 'Search Scale', value: '1M+ Profiles' },
      { label: 'Orchestration', value: 'Automated Pipelines' },
      { label: 'Serving Latency', value: '~35% Reduction' },
      { label: 'Deployment', value: 'Containerized Services' },
    ],
  },
  {
    company: 'Netmax Technologies',
    role: 'Jr. Data Scientist',
    location: 'Chandigarh, India',
    period: 'Oct 2024 – Feb 2025',
    type: 'Full-time',
    headline: 'Automated data preprocessing pipelines, experiment tracking, and dataset version control.',
    achievements: [
      'Built a modular data preprocessing pipeline leveraging MLflow, DVC, and Pandas, which reduced data drift and noise by 20%, boosting downstream model accuracy across production workflows.',
      'Standardized dataset versioning and experiment tracking across internal ML projects to establish reproducible data splits and prevent train-serving skew.',
    ],
    technologies: ['Python', 'MLflow', 'DVC', 'Pandas', 'Scikit-Learn'],
    metrics: [
      { label: 'Pipelines', value: 'Automated CI/CD' },
      { label: 'Drift Reduction', value: '20%' },
    ],
  },
];

export const EDUCATION_DATA: EducationRecord[] = [
  {
    degree: 'Master of Science (M.Sc.) in Data Science',
    institution: 'Chandigarh University',
    period: 'Jul 2022 – May 2024',
    location: 'Chandigarh, India',
    focus: 'Advanced Machine Learning, Statistical Inference, Deep Learning Architectures, High-Dimensional Optimization, and Big Data Processing.',
  },
  {
    degree: 'Bachelor of Science (B.Sc.) in Applied Science',
    institution: 'Delhi University',
    period: 'Jul 2019 – May 2022',
    location: 'Delhi, India',
    focus: 'Foundational coursework in Computational Mathematics, Linear Algebra, Multivariable Calculus, Probability, and Scientific Computing.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ml-core',
    title: 'Machine Learning',
    description: 'Algorithmic modeling, feature engineering, and statistical evaluation.',
    skills: ['Python', 'Scikit-Learn', 'XGBoost', 'TensorFlow', 'Model Evaluation', 'Feature Engineering', 'Ensemble Methods'],
    highlights: [
      { name: 'Algorithmic Modeling', evidence: 'BurnoutAI & IEEE Paper' },
      { name: 'Feature Engineering', evidence: 'EY Government Audits' },
      { name: 'Threshold Calibration', evidence: 'EY Forensic Models' },
    ],
  },
  {
    id: 'genai-nlp',
    title: 'Generative AI & NLP',
    description: 'Stateful multi-agent workflows, RAG architectures, and evaluation.',
    skills: ['LangGraph', 'LangChain', 'LangSmith', 'LLMs', 'RAG', 'Groq LPU', 'Pydantic v2', 'Hugging Face'],
    highlights: [
      { name: 'Multi-Agent Graphs', evidence: 'Analytica & Aurelius' },
      { name: 'LLMOps Tracing', evidence: 'LangSmith Integration' },
      { name: 'Investigation Copilots', evidence: 'CIP Platform at EY' },
    ],
  },
  {
    id: 'mlops-prod',
    title: 'MLOps & Engineering',
    description: 'Workflow orchestration, versioned artifacts, and containerized serving.',
    skills: ['Docker', 'MLflow', 'DVC', 'Apache Airflow', 'FastAPI', 'GitHub Actions', 'Multiprocessing'],
    highlights: [
      { name: 'Workflow Orchestration', evidence: 'EY Production Airflow' },
      { name: 'Deterministic Lineage', evidence: 'DVC Pipeline in BurnoutAI' },
      { name: 'Low-Latency APIs', evidence: 'Public Docker Deployments' },
    ],
  },
  {
    id: 'data-infra',
    title: 'Data & Infrastructure',
    description: 'High-scale vector search, relational databases, and data processing.',
    skills: ['Vector Databases (Milvus / FAISS)', 'Similarity Search', 'SQL', 'MongoDB', 'AWS', 'Pandas', 'NumPy'],
    highlights: [
      { name: 'Similarity Indexing', evidence: 'Inspector Library at EY' },
      { name: 'Identity Matching', evidence: 'Duplicate Detection' },
      { name: 'Data Processing', evidence: 'Large-Scale Exam Audits' },
    ],
  },
];

export const ENGINEERING_PRINCIPLES: PrincipleRecord[] = [
  {
    index: '01',
    title: 'First-Principles Problem Solving',
    statement:
      'Machine learning algorithms are grounded in statistics, linear algebra, and mathematical optimization. Understanding theoretical foundations is the only way to diagnose edge cases and build reliable production models.',
    evidence: 'M.Sc. Data Science & IEEE Peer-Reviewed Publication',
  },
  {
    index: '02',
    title: 'Reproducible MLOps Pipelines',
    statement:
      'Code, data splits, and model weights must be version-controlled and reproducible. Using automated data hashes and experiment tracking guarantees full lineage from raw data to deployed artifacts.',
    evidence: 'Automated Lineage in BurnoutAI & EY Systems',
  },
  {
    index: '03',
    title: 'Production-Ready Engineering',
    statement:
      'An ML model is only as valuable as its serving reliability. Building modular microservices, containerized deployments, and robust APIs ensures smooth real-world operation.',
    evidence: 'Low-Latency APIs & Production Containers',
  },
  {
    index: '04',
    title: 'Evidence-Based Verification',
    statement:
      'In both biometric forensics and multi-agent GenAI, ungrounded outputs carry high risk. Automated citation validation, multi-source cross-checking, and calibrated decision boundaries ensure dependable system outputs.',
    evidence: 'Aurelius Citation Scorecards & EY Biometric Gates',
  },
];

export const ANALYTICA_CASE_STUDY: ProjectData = ALL_PROJECTS[0];
export const BURNOUT_AI_CASE_STUDY: ProjectData = ALL_PROJECTS[1];
export const AURELIUS_CASE_STUDY: ProjectData = ALL_PROJECTS[2];
export const INSPECTOR_CV_CASE_STUDY: ProjectData = ALL_PROJECTS[3];
export const OTHER_PROJECTS: ProjectData[] = [ALL_PROJECTS[4], ALL_PROJECTS[5]];
export const SKILL_DOMAINS = SKILL_CATEGORIES;
export const PHILOSOPHY_PILLARS = ENGINEERING_PRINCIPLES;

