import { ExperienceItem, EducationItem, ProjectItem, ResearchPublication, SkillCategory } from '@/types';

export const PORTFOLIO_CONFIG = {
  codename: 'Nexus Ai',
  version: 'v5.19-prod',
  systemName: 'Nexus Ai',
};

export const PERSONAL_INFO = {
  name: 'Gourav Gulia',
  title: 'AI / ML Engineer',
  roles: ['AI & ML Engineer', 'MLOps Infrastructure Specialist', 'Generative AI & RAG Engineer'],
  email: 'gaurxv.gulia@gmail.com',
  phone: '+91 9588313823',
  location: 'Haryana, India (131001)',
  region: 'Delhi-NCR, India',
  github: 'https://github.com/gauravgulia26',
  githubHandle: 'gauravgulia26',
  linkedin: 'https://linkedin.com/in/gauravgulia26',
  linkedinHandle: 'gauravgulia26',
  resumeFile: '/Gourav_ML_Eng_Resume.pdf',
  terminalPrompt: 'engineer@nexus-ai:~$',
  systemStatus: 'ONLINE // OPEN TO SPECIALIZED AI/ML ROLES',
  tagline: 'Designing and deploying production-grade Machine Learning pipelines, Agentic RAG architectures, high-scale biometrics, and low-latency inference systems.',
  summary:
    'Gourav Gulia is a production-focused AI/ML Engineer with expertise in building end-to-end machine learning infrastructure, forensic biometrics, automated MLOps pipelines (Airflow, DVC, MLflow, Docker, FastAPI), and Agentic Generative AI systems (LangGraph, RAG). Proven track record at EY and Netmax optimizing model inference latency, orchestrating vector search across large-scale embeddings, and authoring PyPI-published developer tooling.',
  metrics: [
    { label: 'VECTOR_SEARCH', value: 'HNSW Indexing', desc: 'VectorDB Embeddings' },
    { label: 'INFERENCE_ENGINE', value: 'FastAPI Serving', desc: 'Multiprocessing & Dtype Tuning' },
    { label: 'VERIFICATION', value: 'Ensemble Models', desc: 'Weighted Inference & ROC Tuning' },
    { label: 'ORCHESTRATION', value: 'Airflow & DVC', desc: 'Reproducible Data Pipelines' },
    { label: 'DEVELOPER_TOOLS', value: 'PyPI Package', desc: 'Custom ML Logging Library' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'EY (Ernst & Young)',
    role: 'Sr. Analyst',
    location: 'Gurugram, India',
    period: 'Jun 2025 - Jun 2026',
    type: 'Full-time',
    summary:
      'Engineered production forensic AI systems, biometric verification pipelines, and automated MLOps infrastructure for public sector and government clients (SSC, HSSC, NHA).',
    responsibilities: [
      'Identified malpractice patterns and compliance gaps across large-scale government examination datasets using pandas, statistical analysis, and forensic validation techniques on multimodal data including facial images, demographic records, and system logs.',
      'Developed and deployed production-grade face verification, image quality analysis, and morphing detection pipelines for government clients including SSC, HSSC, and NHA, leveraging FaceNet512, RetinaFace, PSNR, SSIM, and LBP to improve verification accuracy across challenging image conditions.',
      'Designed a weighted ensemble inference framework optimized through A/B Testing, LCB/UCB strategies, and ROC-based threshold tuning to improve verification consistency.',
      'Built an in-house Text Similarity & Impersonation Detection System using Jaro-Winkler similarity, phonetic matching, and TF-IDF vectorization for forensic investigation workflows.',
      'Re-architected legacy ML solutions into a modular, reusable, and API-driven framework using FastAPI, while implementing workflow orchestration with Apache Airflow and experiment tracking through MLflow, significantly improving deployment scalability and reproducibility.',
      'Optimized production inference pipelines through multiprocessing, hyperparameter tuning, and memory-efficient processing techniques including dtype downcasting for reduced inference latency and memory efficiency.',
      'Collaborated with cross-functional teams and government stakeholders to deliver enterprise forensic AI solutions aligned with regulatory compliance, risk governance, and standardized investigation workflows across large-scale public sector projects.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Apache Airflow',
      'MLflow',
      'FaceNet512',
      'RetinaFace',
      'OpenCV',
      'VectorDB',
      'Pandas',
      'Multiprocessing',
      'Docker',
      'Scikit-Learn',
    ],
    metrics: [
      { label: 'Optimization', value: 'Multiprocessing' },
      { label: 'Verification', value: 'Weighted Ensembles' },
      { label: 'Text Forensics', value: 'TF-IDF & Jaro' },
      { label: 'Serving', value: 'FastAPI & Airflow' },
    ],
  },
  {
    company: 'Netmax',
    role: 'Jr. Data Scientist',
    location: 'Chandigarh, India',
    period: 'Oct 2024 - Feb 2025',
    type: 'Full-time',
    summary:
      'Engineered automated data preprocessing pipelines and integrated experiment tracking and data versioning into ML workflows.',
    responsibilities: [
      'Built a modular data preprocessing pipeline leveraging MLflow, DVC, and Pandas to minimize data drift and improve downstream model robustness across production workflows.',
    ],
    technologies: ['Python', 'MLflow', 'DVC', 'Pandas', 'Scikit-Learn'],
    metrics: [{ label: 'Pipeline', value: 'DVC & MLflow' }],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Sc. Data Science',
    institution: 'Chandigarh University',
    period: 'Jul 2022 – May 2024',
    location: 'Chandigarh, India',
    details: ['Specialization in Advanced Machine Learning, Statistical Inference, and Deep Learning Architectures.'],
  },
  {
    degree: 'B.Sc. Applied Science',
    institution: 'Delhi University',
    period: 'Jul 2019 – May 2022',
    location: 'Delhi, India',
    details: ['Foundational coursework in Computational Mathematics, Scientific Computing, and Statistical Analysis.'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'burnout-prediction',
    title: 'End-to-End AI-Powered Burnout Risk Prediction',
    subtitle: 'Configurable ML Experimentation & Containerized Serving System',
    category: 'mlops',
    period: 'Jun 2026 - Aug 2026',
    problem:
      'Early detection of burnout risks requires systematic feature validation, disciplined experiment tracking across models, and reliable, reproducible API deployment.',
    approach:
      'Built a complete artifact-driven ML engineering pipeline from data validation to containerized model serving with automated versioning.',
    architecture:
      'DVC + MLflow experiment pipeline with hyperparameter tuning across classification algorithms, served via a FastAPI REST endpoint and an interactive Streamlit UI, packaged as a public Docker image.',
    contributions: [
      'Engineered an end-to-end student burnout prediction system covering data validation, feature engineering, model training, evaluation, and production inference.',
      'Built a configurable ML experimentation framework for systematic model comparison and hyperparameter optimization across multiple classification algorithms.',
      'Implemented a reproducible, artifact-driven ML workflow using DVC and MLflow for versioned datasets, experiment tracking, model management, and pipeline reproducibility.',
      'Productionized the model with FastAPI, Streamlit, and Docker, deploying a live prediction API and interactive UI with a publicly available container image.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'MLflow',
      'DVC',
      'Docker',
      'Streamlit',
      'Scikit-Learn',
      'Pandas',
    ],
    outcomes: [
      'Public container image with one-command deployment',
      'Full experiment traceability and artifact version control',
    ],
    status: 'COMPLETED // LIVE REPO & CONTAINER',
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gauravgulia26', type: 'github' },
      { label: 'Live Streamlit UI', url: 'https://github.com/gauravgulia26', type: 'demo' },
      { label: 'Docker Container', url: 'https://hub.docker.com', type: 'docker' },
      { label: 'FastAPI Swagger', url: 'https://github.com/gauravgulia26', type: 'api' },
    ],
    metrics: [
      { label: 'Deployment', value: 'Docker Container' },
      { label: 'Tracking', value: 'DVC + MLflow' },
    ],
  },
  {
    id: 'cip-platform',
    title: 'CIP: Candidate Intelligence Platform',
    subtitle: 'Forensic AI Risk Platform & Agentic Investigation Copilot',
    category: 'genai',
    period: 'Jan 2026 - Mar 2026',
    problem:
      'Government and enterprise examination audits require automated malpractice risk scoring alongside explainable, evidence-backed reasoning grounded in official SOPs and historical cases.',
    approach:
      'Engineered an ensembled candidate risk prediction model paired with a LangGraph-powered Retrieval-Augmented Generation (RAG) copilot, orchestrated via Apache Airflow and DVC.',
    architecture:
      'Modular, configuration-driven platform with Dependency Injection, YAML configs, automated Airflow orchestration, DVC data versioning, MLflow experiment tracking, Dockerized FastAPI backend, and an interactive Streamlit investigation dashboard.',
    contributions: [
      'Developed an Ensembled candidate risk prediction model using structured examination metadata and forensic indicators, providing the foundation for downstream explainable AI workflows at EY GPS Assurance.',
      'Architected a modular, configuration-driven AI risk intelligence platform using reusable pipeline components, artifact-based communication, Dependency Injection, and YAML-driven configurations.',
      'Built a production-grade MLOps pipeline leveraging Apache Airflow, DVC, MLflow, Docker, and FastAPI for automated orchestration, experiment tracking, data versioning, and scalable inference.',
      'Developed an AI-powered Investigation Copilot using LangGraph, advanced prompt engineering, and a RAG architecture to retrieve SOPs, historical investigation cases, and policy documents for explainable decision support.',
      'Designed an interactive Streamlit investigation dashboard integrating real-time ML predictions with conversational AI for context-aware risk analysis.',
    ],
    technologies: [
      'LangGraph',
      'RAG',
      'Prompt Engineering',
      'Apache Airflow',
      'MLflow',
      'DVC',
      'FastAPI',
      'Docker',
      'Streamlit',
      'Python',
    ],
    outcomes: [
      'Production-ready explainable forensic analysis with automated SOP retrieval',
      'Fully reproducible MLOps training & inference pipeline',
    ],
    status: 'PRODUCTION // EY GPS ASSURANCE',
    metrics: [
      { label: 'Architecture', value: 'Modular DI + RAG' },
      { label: 'Orchestration', value: 'Airflow + DVC' },
    ],
  },
  {
    id: 'inspector-library',
    title: 'Inspector: In-House Forensic Analytics Library',
    subtitle: 'High-Performance Biometric Search & Text Analytics Engine',
    category: 'cv',
    period: 'Jul 2025 – Aug 2025',
    problem:
      'Enterprise forensic audits at EY required sub-second similarity matching across large-scale facial embeddings and massive unstructured text datasets.',
    approach:
      'Created a modular Python package (.whl) incorporating VectorDB with HNSW indexing, deep biometric models (FaceNet512, RetinaFace), and parallelized phonetic text algorithms.',
    architecture:
      'In-house modular library built with Dependency Injection and Factory Pattern, leveraging VectorDB (Milvus/FAISS) with HNSW-based ANN indexing and multiprocessing pipelines.',
    contributions: [
      'Designed an in-house modular Python package (.whl) and Dockerized forensic analytics library at EY for scalable image and text-based ML workflows.',
      'Engineered a high-performance face retrieval system using VectorDB and HNSW-based ANN indexing, enabling near real-time similarity search across vector embeddings with optimized retrieval latency.',
      'Built a scalable text forensic analytics engine using Jaro-Winkler similarity, TF-IDF vectorization, and nearest neighbor search to detect impersonation and duplicate identity patterns.',
      'Accelerated ML pipeline performance using multiprocessing, memory-efficient processing, and software engineering design patterns (Dependency Injection & Factory Pattern).',
    ],
    technologies: [
      'VectorDB (Milvus/FAISS)',
      'HNSW ANN Indexing',
      'FaceNet512',
      'RetinaFace',
      'OpenCV',
      'Python Packaging (.whl)',
      'Docker',
      'TF-IDF',
      'Multiprocessing',
    ],
    outcomes: [
      'Sub-second query response over high-dimensional vector embeddings',
      'Enterprise-wide standardized forensic package distribution',
    ],
    status: 'DEPLOYED // EY INTERNAL .WHL',
    metrics: [
      { label: 'Search Index', value: 'HNSW ANN' },
      { label: 'Distribution', value: 'Modular .whl' },
    ],
  },
  {
    id: 'logpunch-pypi',
    title: 'Logpunch: Custom Logging & Exception Handling Library',
    subtitle: 'Published PyPI Package for Machine Learning Workflows',
    category: 'library',
    period: 'May 2025 – Jun 2025',
    problem:
      'Complex ML scripts and distributed pipelines frequently suffer from verbose boilerplate, unstructured logs, and difficult-to-trace exceptions.',
    approach:
      'Engineered an intuitive, high-performance logging package with Pydantic config validation, color-coded output, real-time file management, and deep traceback analytics.',
    architecture:
      'Lightweight, zero-overhead Python package deployed to PyPI featuring automatic directory resolution, structured JSON/colored log formats, and module-aware stack trace capture.',
    contributions: [
      'Engineered a pip-installable Python package with colored logging, real-time file logging, and detailed exception tracking, now live on PyPI.',
      'Reduced logging boilerplate across data science pipelines via Pydantic-validated configs and automatic file management.',
      'Enabled module-aware traceback and structured error reporting in production ML scripts.',
    ],
    technologies: ['Python', 'PyPI', 'Pydantic', 'Modular Packaging', 'Structured Logging'],
    outcomes: [
      'Live on PyPI and adopted in production data science pipelines',
      'Faster error resolution and structured traceback in ML pipelines',
    ],
    status: 'LIVE ON PYPI',
    metrics: [
      { label: 'Validation', value: 'Pydantic Configs' },
      { label: 'Distribution', value: 'PyPI Package' },
    ],
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'liver-disease-research',
    title: 'Liver Disease Prediction Using Ensemble Learning',
    authors: 'Gourav Gulia et al.',
    venue: 'Peer-Reviewed Research Publication',
    period: 'Published Research',
    abstract:
      'A data-driven predictive framework engineered for early-stage hepatic pathology diagnosis. Employs a multi-model comparative machine learning ensemble evaluated across varied biochemical markers, statistical indicators, and rigorous validation metrics to achieve robust diagnostic sensitivity.',
    methodology: [
      'Multi-model ensemble architecture combining multiple classification algorithms with weighted decision boundaries.',
      'Comprehensive data preprocessing, missing-value imputation, outlier filtering, and statistical feature selection.',
      'Rigorous cross-validation, sensitivity tuning, and ROC-AUC threshold calibration on clinical datasets.',
    ],
    metrics: [
      { label: 'DIAGNOSTIC FRAMEWORK', value: 'Ensemble Learning' },
      { label: 'EVALUATION', value: 'Precision / Recall / ROC-AUC' },
      { label: 'RESEARCH TYPE', value: 'Peer-Reviewed' },
      { label: 'DOMAIN', value: 'Healthcare Analytics' },
    ],
    technologies: [
      'Python',
      'Ensemble Learning',
      'Scikit-Learn',
      'Statistical Modeling',
      'Feature Selection',
      'Healthcare Analytics',
    ],
    highlights: [
      'Engineered a high-sensitivity diagnostic prediction pipeline on clinical benchmark datasets.',
      'Demonstrated superior generalization over single-model baselines through weighted voting ensemble strategies.',
      'Published research contributing to evidence-based clinical machine learning methodologies.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Machine Learning',
    code: 'ML_CORE',
    description: 'Statistical modeling, algorithmic training, evaluation & optimization',
    skills: [
      { name: 'Scikit-Learn', level: 92, highlight: true },
      { name: 'TensorFlow', level: 82 },
      { name: 'XGBoost', level: 88, highlight: true },
      { name: 'Model Evaluation', level: 90 },
      { name: 'Feature Engineering', level: 94, highlight: true },
      { name: 'Ensemble Learning', level: 90 },
      { name: 'A/B Testing & ROC Thresholding', level: 86 },
    ],
  },
  {
    name: 'Generative AI & LLMs',
    code: 'GEN_AI',
    description: 'Agentic workflows, prompt architectures & retrieval systems',
    skills: [
      { name: 'LangGraph', level: 88, highlight: true },
      { name: 'RAG Architectures', level: 90, highlight: true },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'LangChain', level: 86 },
      { name: 'Explainable AI Copilots', level: 88 },
    ],
  },
  {
    name: 'Computer Vision & Biometrics',
    code: 'COMP_VIS',
    description: 'Deep face recognition, image quality forensics & morphing detection',
    skills: [
      { name: 'OpenCV', level: 88 },
      { name: 'FaceNet512', level: 90, highlight: true },
      { name: 'RetinaFace', level: 88, highlight: true },
      { name: 'Image Quality (PSNR, SSIM, LBP)', level: 86 },
      { name: 'Morphing & Impersonation Detection', level: 85 },
    ],
  },
  {
    name: 'MLOps & Orchestration',
    code: 'ML_OPS',
    description: 'Reproducible pipelines, workflow graphs & artifact versioning',
    skills: [
      { name: 'Apache Airflow', level: 86, highlight: true },
      { name: 'MLflow', level: 92, highlight: true },
      { name: 'DVC', level: 88 },
      { name: 'Docker', level: 90, highlight: true },
      { name: 'FastAPI', level: 94, highlight: true },
      { name: 'CI/CD & Model Serving', level: 86 },
    ],
  },
  {
    name: 'Software Eng. & Architecture',
    code: 'SWE_ARCH',
    description: 'High-throughput system design, design patterns & packaging',
    skills: [
      { name: 'REST APIs', level: 94 },
      { name: 'Modular Architecture', level: 92, highlight: true },
      { name: 'Dependency Injection & Factory Pattern', level: 88 },
      { name: 'Python Packaging (.whl & PyPI)', level: 90, highlight: true },
      { name: 'Pydantic Data Validation', level: 92 },
      { name: 'Multiprocessing & Latency Tuning', level: 88 },
    ],
  },
  {
    name: 'Databases & Vector Search',
    code: 'DATA_STORE',
    description: 'High-scale vector indexing, relational & document storage',
    skills: [
      { name: 'VectorDB (Milvus, FAISS, Weaviate)', level: 88, highlight: true },
      { name: 'HNSW ANN Search', level: 86 },
      { name: 'SQL', level: 84 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    name: 'Data Processing & Tools',
    code: 'DATA_TOOLS',
    description: 'High-performance data manipulation, exploratory tooling & VCS',
    skills: [
      { name: 'Pandas', level: 96, highlight: true },
      { name: 'NumPy', level: 92 },
      { name: 'Linux Command Center', level: 90 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Streamlit Dashboards', level: 94, highlight: true },
    ],
  },
];
