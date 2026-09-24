import { ExperienceItem, EducationItem, ProjectItem, ResearchPublication, SkillCategory } from '@/types';

export const PORTFOLIO_CONFIG = {
  codename: 'Nexus Ai',
  version: 'v5.20-prod',
  systemName: 'Nexus Ai',
};

export const PERSONAL_INFO = {
  name: 'Gourav Gulia',
  title: 'Machine Learning Engineer',
  roles: ['Machine Learning Engineer', 'MLOps Infrastructure Specialist', 'Generative AI & Agentic Systems Engineer'],
  email: 'gaurxv.gulia@gmail.com',
  phone: '+91 9588313823',
  location: 'Haryana, India (131001)',
  region: 'Delhi-NCR, India',
  github: 'https://github.com/gauravgulia26',
  githubHandle: 'gauravgulia26',
  linkedin: 'https://www.linkedin.com/in/gauravgulia1205/',
  linkedinHandle: 'gauravgulia1205',
  resumeFile: '/webpage_resume.pdf',
  resumeFileName: 'webpage_resume.pdf',
  terminalPrompt: 'engineer@nexus-ai:~$',
  systemStatus: 'ONLINE // OPEN TO SPECIALIZED AI/ML ROLES',
  tagline: 'Machine Learning Engineer building production-grade ML, GenAI, and data systems.',
  summary:
    'Machine Learning Engineer with production experience at Ernst & Young (EY), specializing in end-to-end MLOps pipelines, high-dimensional vector search, and multi-agent GenAI systems. Grounded in a rigorous mathematical and statistical foundation (M.Sc. Data Science), focusing on low-latency inference, deterministic reproducibility, and production-grade software architecture.',
  metrics: [
    { label: 'EXPERIENCE', value: 'EY (Ernst & Young)', desc: 'Sr. Analyst in Forensic AI & Biometrics' },
    { label: 'VECTOR_SEARCH', value: 'HNSW Indexing', desc: 'Sub-Second Search over 1M+ 512D Vectors' },
    { label: 'SERVING_LATENCY', value: 'P99 < 45ms', desc: 'FastAPI Serving & Docker Container' },
    { label: 'REPRODUCIBILITY', value: 'DVC & MLflow', desc: '100% Artifact & Data Lineage' },
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
      'Engineered production forensic AI systems, biometric verification pipelines, and automated MLOps infrastructure for public sector clients (SSC, HSSC, NHA).',
    responsibilities: [
      'Developed and deployed production-grade face verification, image quality analysis, and morphing detection pipelines for government clients (SSC, HSSC, NHA) using FaceNet512, RetinaFace, PSNR, SSIM, and LBP.',
      'Designed a weighted ensemble inference framework optimized through A/B Testing, LCB/UCB strategies, and ROC-based threshold tuning, reducing false positives by nearly 11%.',
      'Built an in-house biometric vector search system across 1M+ 512D embeddings and a text similarity engine (Jaro-Winkler, TF-IDF), improving duplicate identity detection by ~25%.',
      'Re-architected legacy ML solutions into modular FastAPI microservices with Apache Airflow orchestration and MLflow tracking; optimized inference via multiprocessing and dtype downcasting, reducing latency by ~35% and memory by 22%.',
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
      'Docker',
      'Scikit-Learn',
      'Pandas',
    ],
    metrics: [
      { label: 'Search Index', value: 'HNSW VectorDB' },
      { label: 'Orchestration', value: 'Apache Airflow' },
      { label: 'Optimization', value: 'Multiprocessing' },
      { label: 'Serving', value: 'FastAPI & Docker' },
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
      'Built a modular data preprocessing pipeline leveraging MLflow, DVC, and Pandas, reducing data drift and noise by 20% across production workflows.',
      'Standardized dataset versioning and experiment tracking across internal ML projects to establish reproducible data splits and prevent train-serving skew.',
    ],
    technologies: ['Python', 'MLflow', 'DVC', 'Pandas', 'Scikit-Learn'],
    metrics: [{ label: 'Pipeline', value: 'DVC & MLflow' }, { label: 'Drift Reduction', value: '20%' }],
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
    id: 'analytica',
    title: 'Analytica: Local Multi-Agent Data Analysis System',
    subtitle: 'Autonomous Tabular Analysis with Stateful LangGraph Orchestration & Deterministic Python Execution',
    category: 'genai',
    period: '2026',
    problem: 'LLM data analysis frequently hallucinates aggregations and produces unverified insights on tabular datasets.',
    approach: 'Stateful LangGraph DAG coordinating query planning, sandboxed Python code execution, and automated review loops.',
    architecture: 'Modular agent architecture with Pydantic v2 validation, isolated Python analysis subgraph, and Streamlit UI.',
    contributions: [
      'Built a modular agent architecture with stateful workflow orchestration and isolated Python analysis execution.',
      'Structured Pydantic validation and self-correcting error recovery eliminating hallucinated insights on tabular datasets.',
    ],
    technologies: ['Python 3.12', 'LangGraph', 'LangChain', 'Groq LPU', 'Pydantic v2', 'Streamlit', 'Docker'],
    outcomes: [
      'Autonomous, verified data exploration and visualization',
      'Deterministic execution with zero hallucinated calculations',
    ],
    status: 'OPEN SOURCE // GITHUB REPO',
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gauravgulia26/analytica', type: 'github' },
    ],
    metrics: [
      { label: 'Orchestration', value: 'Stateful LangGraph' },
      { label: 'Execution', value: 'Sandboxed Python' },
    ],
  },
  {
    id: 'burnout-prediction',
    title: 'BurnoutAI: Full-Lifecycle ML Prediction Engine',
    subtitle: 'Configurable End-to-End MLOps Pipeline, Model Registry & Containerized API',
    category: 'mlops',
    period: 'Jun 2026 - Aug 2026',
    problem: 'Early detection of burnout risks requires disciplined feature validation, model versioning, and low-latency API serving.',
    approach: 'Built an artifact-driven ML engineering pipeline from schema validation to containerized model serving with automated DVC versioning.',
    architecture: 'DVC + MLflow experiment pipeline with hyperparameter tuning across classification algorithms, served via FastAPI REST endpoint and public Docker image.',
    contributions: [
      'Engineered an end-to-end student burnout prediction system covering data validation, feature engineering, model training, evaluation, and production inference.',
      'Implemented a reproducible, artifact-driven ML workflow using DVC and MLflow for versioned datasets, experiment tracking, and model management.',
      'Productionized the model with FastAPI, Streamlit, and Docker, deploying a live prediction API (<45ms latency) and public container image.',
    ],
    technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'Streamlit'],
    outcomes: [
      'Public container image with one-command deployment',
      'Full experiment traceability and artifact version control',
    ],
    status: 'DEPLOYED // DOCKER HUB & STREAMLIT',
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gauravgulia26/burnout_classifier', type: 'github' },
      { label: 'Live Streamlit UI', url: 'https://burnout-compass.streamlit.app/', type: 'demo' },
      { label: 'Docker Container', url: 'https://hub.docker.com/u/gouravgulia4348', type: 'docker' },
      { label: 'FastAPI Swagger', url: 'https://burnout-classifier.fastapicloud.dev/docs', type: 'api' },
    ],
    metrics: [
      { label: 'Deployment', value: 'Docker Container' },
      { label: 'Tracking', value: 'DVC + MLflow' },
      { label: 'Latency', value: 'P99 < 45ms' },
    ],
  },
  {
    id: 'aurelius',
    title: 'Aurelius: Autonomous Multi-Agent Research & LLMOps System',
    subtitle: '5-Persona LangGraph Workflow & Enterprise LLMOps Observability Framework',
    category: 'genai',
    period: 'Jun 2026 - Aug 2026',
    problem: 'Enterprise research requires decomposing broad inquiries into rigorous multi-perspective investigations with verified source citations.',
    approach: 'Architected a stateful multi-agent research workflow using LangGraph and LangChain with 5 specialized personas and LangSmith distributed tracing.',
    architecture: 'Stateful LangGraph DAG with specialized personas, LangSmith tracing, Groq LPU latency tracking, Pydantic v2 schemas, and Streamlit UI backed by 28 automated tests.',
    contributions: [
      'Architected a stateful multi-agent research workflow using LangGraph with 5 personas (Lead, Researcher, Synthesizer, Writer, Reviewer) and self-correcting revision loops.',
      'Engineered an enterprise-grade LLMOps observability framework with LangSmith distributed tracing, Groq LPU latency tracking, and automated citation validation scorecards.',
      'Containerized with multi-stage Docker and UV, validated with a 28-test automated test suite.',
    ],
    technologies: ['LangGraph', 'LangChain', 'LangSmith', 'Groq LPU', 'Python 3.12', 'Pydantic v2', 'Streamlit', 'Docker'],
    outcomes: [
      'Automated citation validation scorecards ensuring multi-source evidence grounding',
      'Full LangSmith distributed tracing & Groq LPU acceleration',
    ],
    status: 'PRODUCTION // LIVE AGENTIC SYSTEM',
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/gauravgulia26/aurelius', type: 'github' },
      { label: 'Live Agentic UI', url: 'https://aurelius-ai.streamlit.app/', type: 'demo' },
    ],
    metrics: [
      { label: 'Multi-Agent Graph', value: '5 Personas' },
      { label: 'Observability', value: 'LangSmith Tracing' },
    ],
  },
  {
    id: 'inspector-library',
    title: 'Inspector: In-House Forensic Analytics Library',
    subtitle: 'High-Performance Biometric Search & Text Impersonation Forensics',
    category: 'cv',
    period: 'Jul 2025 – Aug 2025',
    problem: 'Enterprise forensic audits at EY required sub-second similarity matching across large-scale facial embeddings and massive text datasets.',
    approach: 'Created a modular Python package (.whl) incorporating VectorDB with HNSW indexing, deep biometric models (FaceNet512, RetinaFace), and parallel text matching.',
    architecture: 'Modular library built with Dependency Injection and Factory Pattern, leveraging VectorDB (Milvus/FAISS) with HNSW-based ANN indexing.',
    contributions: [
      'Designed an in-house modular Python package (.whl) and Dockerized forensic analytics library at EY for scalable image and text-based ML workflows.',
      'Engineered a high-performance face retrieval system using VectorDB and HNSW indexing, enabling sub-second search across 1M+ 512D embeddings.',
      'Built a scalable text forensic engine using Jaro-Winkler similarity and TF-IDF to detect impersonation across examination datasets.',
    ],
    technologies: ['VectorDB (Milvus/FAISS)', 'HNSW ANN Indexing', 'FaceNet512', 'RetinaFace', 'OpenCV', 'Python Packaging (.whl)', 'Docker', 'Multiprocessing'],
    outcomes: [
      'Sub-second query response over 1M+ vector embeddings',
      'Standardized enterprise forensic package distribution',
    ],
    status: 'DEPLOYED // EY INTERNAL .WHL',
    metrics: [
      { label: 'Search Index', value: 'HNSW ANN' },
      { label: 'Distribution', value: 'Modular .whl' },
    ],
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'liver-disease-research',
    title: 'Liver Disease Prediction Using Ensemble Learning',
    authors: 'Gourav Gulia et al.',
    venue: 'IEEE Peer-Reviewed International Conference Publication',
    period: 'Published Research',
    doi: '10.1109/IC-EETA66496.2025.11548371',
    url: 'https://doi.org/10.1109/IC-EETA66496.2025.11548371',
    abstract:
      'A data-driven predictive framework engineered for early-stage hepatic pathology diagnosis using comparative ensemble machine learning, achieving up to 95% diagnostic accuracy.',
    methodology: [
      'Multi-model ensemble architecture combining multiple classification algorithms with weighted decision boundaries.',
      'Comprehensive data preprocessing, missing-value imputation, and statistical feature selection.',
      'Rigorous cross-validation and ROC-AUC threshold calibration on clinical benchmark datasets.',
    ],
    metrics: [
      { label: 'DIAGNOSTIC FRAMEWORK', value: 'Ensemble Learning' },
      { label: 'ACCURACY', value: 'Up to 95%' },
      { label: 'VENUE', value: 'IEEE Xplore' },
    ],
    technologies: ['Python', 'Ensemble Learning', 'Scikit-Learn', 'Statistical Modeling', 'ROC-AUC Calibration'],
    highlights: [
      'Engineered a high-sensitivity diagnostic prediction pipeline achieving up to 95% accuracy.',
      'Demonstrated superior generalization over single-model baselines through weighted ensemble strategies.',
      'Published in IEEE Xplore digital library.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Machine Learning',
    code: 'ML_CORE',
    description: 'Statistical modeling, algorithmic training, evaluation & optimization',
    skills: [
      { name: 'Python', level: 96, highlight: true },
      { name: 'Scikit-Learn', level: 94, highlight: true },
      { name: 'XGBoost', level: 90, highlight: true },
      { name: 'TensorFlow', level: 82 },
      { name: 'Feature Engineering', level: 94, highlight: true },
      { name: 'Model Evaluation', level: 92 },
      { name: 'Ensemble Methods', level: 90 },
    ],
  },
  {
    name: 'GenAI / NLP',
    code: 'GEN_AI',
    description: 'Stateful multi-agent workflows, RAG architectures & evaluation',
    skills: [
      { name: 'LangGraph', level: 94, highlight: true },
      { name: 'LangSmith', level: 90, highlight: true },
      { name: 'RAG Architectures', level: 92, highlight: true },
      { name: 'LLMs', level: 92, highlight: true },
      { name: 'LangChain', level: 90 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Pydantic v2', level: 92, highlight: true },
    ],
  },
  {
    name: 'MLOps / Engineering',
    code: 'ML_OPS',
    description: 'Reproducible pipelines, orchestration & containerized serving',
    skills: [
      { name: 'Docker', level: 92, highlight: true },
      { name: 'MLflow', level: 92, highlight: true },
      { name: 'DVC', level: 90, highlight: true },
      { name: 'Apache Airflow', level: 88, highlight: true },
      { name: 'FastAPI', level: 94, highlight: true },
      { name: 'GitHub Actions / CI/CD', level: 88 },
      { name: 'Multiprocessing', level: 88 },
    ],
  },
  {
    name: 'Data / Infrastructure',
    code: 'DATA_STORE',
    description: 'Vector indexing, relational & document storage, and numerical processing',
    skills: [
      { name: 'VectorDB (Milvus / FAISS)', level: 90, highlight: true },
      { name: 'HNSW Graph Search', level: 88, highlight: true },
      { name: 'SQL', level: 86 },
      { name: 'MongoDB', level: 82 },
      { name: 'Pandas', level: 96, highlight: true },
      { name: 'NumPy', level: 92 },
    ],
  },
];
