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

export interface FlagshipProject {
  id: string;
  title: string;
  tagline: string;
  category: 'MLOps & Systems' | 'Computer Vision & Biometrics' | 'Agentic AI & LLMOps';
  period: string;
  status: string;
  summary: string;
  challenge: string;
  architectureNarrative: string;
  architectureStages: {
    stage: string;
    step: string;
    component: string;
    tech: string;
    contract: string;
    detail: string;
  }[];
  engineeringHighlights: string[];
  technologies: string[];
  metrics: MetricItem[];
  links: ProjectLink[];
}

export interface OtherProject {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  period: string;
  status: string;
  summary: string;
  architecture: string;
  highlights: string[];
  technologies: string[];
  metrics: MetricItem[];
  links?: ProjectLink[];
}

export interface ExperienceRecord {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  headline: string;
  context: string;
  systemsShipped: {
    system: string;
    impact: string;
    stack: string[];
  }[];
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
  modules: string[];
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

export interface SkillDomain {
  id: string;
  title: string;
  code: string;
  description: string;
  productionStack: string[];
  engineeringCapabilities: {
    name: string;
    context: string;
    evidence: string;
  }[];
}

export const PERSONAL_DATA = {
  name: 'Gourav Gulia',
  title: 'Machine Learning Engineer',
  specializations: [
    'Machine Learning Systems',
    'Computer Vision & Biometrics',
    'Production MLOps Infrastructure',
    'Agentic AI & High-Scale Inference',
  ],
  headline: 'Engineering robust Machine Learning pipelines, biometric vector search, and distributed agentic architectures for production environments.',
  bio: 'Production-focused Machine Learning Engineer with a master\'s degree in Data Science and hands-on experience deploying enterprise forensic AI systems, high-dimensional vector search, reproducible MLOps pipelines (Airflow, DVC, MLflow), and stateful multi-agent architectures (LangGraph, Groq LPU). Dedicated to mathematical rigor, low-latency execution, and deterministic reproducibility.',
  location: 'Haryana / Delhi-NCR, India',
  email: 'gaurxv.gulia@gmail.com',
  phone: '+91 9588313823',
  github: 'https://github.com/gauravgulia26',
  linkedin: 'https://linkedin.com/in/gauravgulia26',
  resumeUrl: '/Gourav_AiML_Resume.pdf',
  systemStatus: 'ACTIVE // PRODUCTION READY',
  coreMetrics: [
    { label: 'VECTOR RETRIEVAL', value: 'HNSW Indexing', detail: 'Sub-second search across 1M+ 512D vectors' },
    { label: 'ML PIPELINES', value: 'Airflow & DVC', detail: 'Immutable hash-versioned data splits' },
    { label: 'INFERENCE', value: 'FastAPI & Docker', detail: 'Multiprocessing batch workers with dtype tuning' },
    { label: 'VERIFICATION', value: 'Weighted Ensembles', detail: 'Calibrated ROC & LCB/UCB decision bounds' },
    { label: 'OPEN SOURCE', value: 'PyPI Package', detail: 'Published Logpunch logging library for ML' },
  ],
};

export const BURNOUT_AI_CASE_STUDY: FlagshipProject = {
  id: 'burnout-prediction',
  title: 'BurnoutAI: Full-Lifecycle ML Prediction Engine',
  tagline: 'Configurable End-to-End MLOps Pipeline, Model Registry & Containerized API',
  category: 'MLOps & Systems',
  period: 'Jun 2026 – Aug 2026',
  status: 'DEPLOYED // DOCKER HUB & FASTAPI CLOUD',
  summary: 'A disciplined, artifact-driven production ML system engineered from scratch. Translates student psychological & academic telemetry into calibrated burnout risk scores, governed by strict data validation, reproducible DVC pipelines, automated MLflow experiment tracking, and one-command Docker deployment.',
  challenge: 'Predictive burnout analysis in educational and workforce settings frequently fails in production due to unstructured feature engineering, lack of data validation, invisible model drift, and unversioned training artifacts that cannot be audited or rolled back.',
  architectureNarrative: 'Rather than treating model training as an isolated Jupyter notebook, BurnoutAI models the complete engineering lifecycle: automated Pydantic schema validation, DVC remote pipeline versioning, parallel algorithm comparison in MLflow, and high-throughput asynchronous FastAPI serving backed by a public Docker container.',
  architectureStages: [
    {
      stage: '01',
      step: 'Data Validation',
      component: 'Pydantic & Great Expectations checks',
      tech: 'Python · Pydantic v2 · Pandas',
      contract: 'Strict schema enforcement & null value gates',
      detail: 'Rejects malformed records, validates numeric ranges, and ensures zero data corruption prior to pipeline ingestion.'
    },
    {
      stage: '02',
      step: 'Feature Engineering',
      component: 'Statistically Calibrated Transformers',
      tech: 'Scikit-Learn Pipeline · NumPy',
      contract: 'Zero data leakage between train/test splits',
      detail: 'Generates interaction terms, behavioral ratios, and normalized psychometric scales with isolated split parameters.'
    },
    {
      stage: '03',
      step: 'Model Exploration',
      component: 'Algorithmic Optimization Matrix',
      tech: 'XGBoost · Random Forest · LightGBM',
      contract: 'ROC-AUC & F1 score threshold calibration',
      detail: 'Systematic grid & Bayesian tuning evaluating multi-class decision boundaries across clinical sensitivity targets.'
    },
    {
      stage: '04',
      step: 'Experiment Tracking',
      component: 'MLflow Tracking & Artifact Store',
      tech: 'MLflow Server · SQLite Metadata',
      contract: '100% parameter, metric, and model weight lineage',
      detail: 'Every experiment run logs commit hash, hyperparameters, confusion matrices, and serialized model artifacts.'
    },
    {
      stage: '05',
      step: 'Data & Model Versioning',
      component: 'DVC Pipeline Graph',
      tech: 'DVC (Data Version Control) · S3/GCS Remotes',
      contract: 'Deterministic DAG execution with dvc.lock hashes',
      detail: 'Decouples code from heavy datasets and models; enables bit-for-bit reproducible runs across cloud compute.'
    },
    {
      stage: '06',
      step: 'API Microservice',
      component: 'FastAPI High-Throughput REST Gateway',
      tech: 'FastAPI · Uvicorn · Pydantic',
      contract: 'P99 Latency < 45ms SLA with Swagger docs',
      detail: 'Asynchronous request handlers with memory-pinned models, input validation, and structured error reporting.'
    },
    {
      stage: '07',
      step: 'Containerization',
      component: 'Multi-Stage Docker Image',
      tech: 'Docker · Alpine Linux base · Non-root user',
      contract: 'Minimal footprint, self-contained dependencies',
      detail: 'Published to Docker Hub for reproducible one-command container spins on any cloud or on-prem cluster.'
    },
    {
      stage: '08',
      step: 'CI/CD Automation',
      component: 'GitHub Actions Validation Matrix',
      tech: 'GitHub Actions · Pytest · Flake8',
      contract: 'Automated test pass required before image push',
      detail: 'Executes automated smoke tests, schema regression tests, and linting checks on every branch commit.'
    },
    {
      stage: '09',
      step: 'Interactive Serving',
      component: 'Streamlit Real-Time Diagnostics UI',
      tech: 'Streamlit · Altair Visuals · REST Client',
      contract: 'Live risk scoring with SHAP feature explanations',
      detail: 'Enables end-users and clinicians to test edge cases, simulate behavior shifts, and view transparent probability breakdowns.'
    }
  ],
  engineeringHighlights: [
    'Configurable YAML-driven training pipeline decoupling hyperparameters from core algorithmic logic.',
    'Complete DVC and MLflow integration ensuring 100% lineage from raw data bytes to served container.',
    'Microservice API achieving <40ms inference latency with Pydantic request/response validation.',
    'Production Docker image publicly distributed for zero-friction client deployment.'
  ],
  technologies: ['Python 3.11', 'Scikit-Learn', 'XGBoost', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'Streamlit', 'GitHub Actions', 'Pandas'],
  metrics: [
    { label: 'DEPLOYMENT', value: 'Docker Hub Public Image' },
    { label: 'EXPERIMENTS', value: 'DVC & MLflow Tracked' },
    { label: 'API P99', value: '< 45ms REST Latency' },
    { label: 'REPRODUCIBILITY', value: 'Deterministic DAG Hashes' }
  ],
  links: [
    { label: 'GitHub Repository', url: 'https://github.com/gauravgulia26/burnout_classifier', type: 'github' },
    { label: 'Live Streamlit Application', url: 'https://burnout-compass.streamlit.app/', type: 'demo' },
    { label: 'Docker Hub Container', url: 'https://hub.docker.com/u/gouravgulia4348', type: 'docker' },
    { label: 'FastAPI Swagger Documentation', url: 'https://burnout-classifier.fastapicloud.dev/docs', type: 'api' }
  ]
};

export const INSPECTOR_CV_CASE_STUDY: FlagshipProject = {
  id: 'inspector-library',
  title: 'Inspector: Forensic Biometrics & ANN Vector Search Engine',
  tagline: 'Sub-Second Similarity Retrieval Across 512D Vector Embeddings & Text Forensics',
  category: 'Computer Vision & Biometrics',
  period: 'Jul 2025 – Aug 2025',
  status: 'DEPLOYED // EY INTERNAL MODULAR .WHL',
  summary: 'An in-house high-throughput forensic analytics library engineered at Ernst & Young (EY) to audit large-scale government examination datasets (SSC, HSSC, NHA). Detects impersonation, duplicate candidatures, and biometric manipulation across millions of noisy visual and text records.',
  challenge: 'Large-scale government examination datasets contain millions of low-quality webcam captures, varied illumination, head poses, and demographic mismatches. Standard linear search over high-dimensional vector spaces causes severe latency bottlenecks, while manual fraud audits are statistically impossible at scale.',
  architectureNarrative: 'Engineered a modular Python package (`.whl`) implementing a 7-stage biometric pipeline combining RetinaFace detection, FaceNet512 deep embeddings, and an HNSW (Hierarchical Navigable Small World) approximate nearest neighbor index in VectorDB (Milvus/FAISS). Coupled with Jaro-Winkler phonetic similarity for multi-modal verification.',
  architectureStages: [
    {
      stage: '01',
      step: 'Multimodal Ingestion',
      component: 'High-Volume Examination Records',
      tech: 'Multiprocessing · Pandas · OpenCV',
      contract: 'Batch stream parsing across image & text records',
      detail: 'Parallel workers ingest candidate photos alongside demographic logs with chunked memory management.'
    },
    {
      stage: '02',
      step: 'Preprocessing & Quality Gate',
      component: 'Image Quality Assessment (IQA)',
      tech: 'PSNR · SSIM · Laplacian Variance · LBP',
      contract: 'Rejection of non-conforming or corrupted imagery',
      detail: 'Flags blurred captures (<28dB PSNR), improper exposure, and local binary pattern anomalies before neural compute.'
    },
    {
      stage: '03',
      step: 'Face Detection & Alignment',
      component: 'RetinaFace Deep Landmark Extractor',
      tech: 'RetinaFace · Spatial Affine Transformation',
      contract: '5-point facial landmark normalization',
      detail: 'Extracts eye, nose, and mouth coordinates to align face geometry to a standardized canonical orientation.'
    },
    {
      stage: '04',
      step: 'Deep Feature Embedding',
      component: 'FaceNet512 Representation Engine',
      tech: 'FaceNet512 · PyTorch / ONNX Runtime',
      contract: '512-dimensional normalized hypersphere embeddings',
      detail: 'Projects facial features into a 512D metric space where L2 Euclidean distance directly corresponds to biometric identity.'
    },
    {
      stage: '05',
      step: 'HNSW Vector Indexing',
      component: 'Approximate Nearest Neighbor (ANN) Graph',
      tech: 'VectorDB (Milvus / FAISS) · HNSW Graph',
      contract: 'Sub-second logarithmic search: O(log N) complexity',
      detail: 'Indexes high-dimensional vector representations across multi-layer graphs for rapid multi-million candidate similarity lookups.'
    },
    {
      stage: '06',
      step: 'Multimodal Identity Fusion',
      component: 'Ensemble Decision & Threshold Calibration',
      tech: 'Jaro-Winkler · TF-IDF · ROC Optimization',
      contract: 'Dynamic False Acceptance Rate (FAR) control',
      detail: 'Fuses biometric embedding distance with phonetic name similarity and demographic timestamps for conclusive forensic audits.'
    },
    {
      stage: '07',
      step: 'Packaging & Distribution',
      component: 'Modular Wheel Package & Docker SDK',
      tech: 'Python Packaging (.whl) · Dependency Injection',
      contract: 'Standardized enterprise-wide import interface',
      detail: 'Shipped as an internal reusable package allowing forensic audit teams to run verifiable pipelines in minutes.'
    }
  ],
  engineeringHighlights: [
    'Sub-second query retrieval across large-scale 512D facial vectors using HNSW graph traversal.',
    'Memory-efficient batching and dtype downcasting cutting inference RAM overhead by 40%.',
    'Dual-modality impersonation detection linking biometric facial cosine distances with phonetic string matching.',
    'Engineered using Dependency Injection and Factory Pattern for seamless drop-in deployment.'
  ],
  technologies: ['FaceNet512', 'RetinaFace', 'HNSW VectorDB', 'OpenCV', 'Milvus/FAISS', 'Python .whl', 'Multiprocessing', 'TF-IDF', 'Jaro-Winkler', 'Docker'],
  metrics: [
    { label: 'SEARCH EFFICIENCY', value: 'HNSW ANN Graph' },
    { label: 'EMBEDDING SPACE', value: '512-Dimensional Deep Metric' },
    { label: 'LATENCY', value: 'Sub-Second Retrieval' },
    { label: 'DISTRIBUTION', value: 'Enterprise .whl & Docker' }
  ],
  links: [
    { label: 'Architecture Dossier', url: '#case-studies', type: 'paper' }
  ]
};

export const AURELIUS_CASE_STUDY: FlagshipProject = {
  id: 'aurelius',
  title: 'Aurelius: Autonomous Multi-Agent Research & LLMOps System',
  tagline: '5-Persona Stateful LangGraph Workflow with Granular LangSmith Distributed Tracing',
  category: 'Agentic AI & LLMOps',
  period: 'Jun 2026 – Aug 2026',
  status: 'PRODUCTION // LIVE AGENTIC CLUSTER',
  summary: 'An autonomous multi-agent deep research and technical synthesis system. Coordinates 5 specialized agent personas over a stateful directed acyclic graph to execute recursive research, cross-examine citations, eliminate hallucinated URLs, and produce structured technical reports.',
  challenge: 'Large language models suffer from catastrophic hallucination, shallow reasoning on complex topics, and unverified citations when asked to perform comprehensive enterprise research in a single prompt-response cycle.',
  architectureNarrative: 'Employs LangGraph to build a stateful directed graph where 5 specialized agent personas collaborate through structured memory channels: Lead (orchestrator), Researcher (evidence gathering), Synthesizer (cross-source verification), Writer (drafting), and Reviewer (hallucination rejection loop). Telemetry is captured end-to-end with LangSmith and Groq LPU tracking.',
  architectureStages: [
    {
      stage: '01',
      step: 'Query Decomposition',
      component: 'Lead Orchestration Persona',
      tech: 'LangGraph State · Pydantic v2',
      contract: 'Hierarchical research plan schema',
      detail: 'Breaks complex enterprise questions into atomic investigative sub-queries with clear dependency trees.'
    },
    {
      stage: '02',
      step: 'Evidence Gathering',
      component: 'Autonomous Researcher Persona',
      tech: 'Tavily API · Resilient Scraping Fallbacks',
      contract: 'Raw source documents with cryptographic hashes',
      detail: 'Executes parallel multi-source querying with automated retry mechanics and DOM-cleaning sanitization.'
    },
    {
      stage: '03',
      step: 'Cross-Source Synthesis',
      component: 'Synthesizer & Verification Persona',
      tech: 'Groq LPU Inference · Vector RAG',
      contract: 'Zero-link hallucination guarantee',
      detail: 'Cross-checks factual assertions across multiple independent citations; flags ungrounded claims for re-querying.'
    },
    {
      stage: '04',
      step: 'Technical Drafting',
      component: 'Technical Writer Persona',
      tech: 'LangChain Prompt Templates',
      contract: 'Strict Markdown schema with inline citations',
      detail: 'Synthesizes verified evidence into an executive-ready technical dossier with methodological transparency.'
    },
    {
      stage: '05',
      step: 'Self-Correction Loop',
      component: 'Adversarial Reviewer Persona',
      tech: 'LangGraph Conditional Edges · LangSmith',
      contract: 'Acceptance criteria or automatic feedback cycle',
      detail: 'Evaluates citation density, logical consistency, and factual coverage, triggering corrective passes if quality scores drop.'
    }
  ],
  engineeringHighlights: [
    'Strict zero-link hallucination guarantee enforced through automated citation scorecards.',
    'Granular token economics and latency tracking for Groq LPU inference via LangSmith distributed spans.',
    'Engineered on Python 3.12 with Pydantic v2 strict schemas and provider-abstracted model factories.',
    'Tested with an automated 28-test Pytest suite covering state transitions and failure recoveries.'
  ],
  technologies: ['LangGraph', 'LangChain', 'LangSmith', 'Groq LPU', 'Python 3.12', 'Pydantic v2', 'Streamlit', 'Docker', 'UV', 'Pytest'],
  metrics: [
    { label: 'AGENT GRAPH', value: '5 Stateful Personas' },
    { label: 'OBSERVABILITY', value: 'LangSmith Distributed Tracing' },
    { label: 'INFERENCE SPEED', value: 'Groq LPU Ultra-Low Latency' },
    { label: 'QUALITY GATE', value: '28-Test Pytest Suite' }
  ],
  links: [
    { label: 'GitHub Repository', url: 'https://github.com/gauravgulia26/aurelius', type: 'github' },
    { label: 'Live Streamlit Application', url: 'https://aurelius-ai.streamlit.app/', type: 'demo' }
  ]
};

export const OTHER_PROJECTS: OtherProject[] = [
  {
    id: 'cip-platform',
    title: 'Candidate Intelligence Platform (CIP)',
    subtitle: 'Forensic AI Risk Intelligence & LangGraph Investigation Copilot',
    domain: 'Enterprise Forensic AI · EY GPS Assurance',
    period: 'Jan 2026 – Mar 2026',
    status: 'PRODUCTION // EY GPS ASSURANCE',
    summary: 'An enterprise-scale risk intelligence platform combining an ensembled candidate malpractice risk scoring engine with a LangGraph RAG copilot for automated SOP case retrieval.',
    architecture: 'Modular Dependency-Injection architecture with Apache Airflow DAG orchestration, DVC data versioning, MLflow tracking, and Dockerized FastAPI microservices.',
    highlights: [
      'Engineered ensembled risk models on multi-modal demographic and forensic exam data for government clients.',
      'Constructed a LangGraph RAG investigation copilot delivering explainable case citations from hundreds of pages of government SOPs.',
      'Streamlined forensic investigation turnaround through automated Airflow data pipelines and Streamlit dashboards.'
    ],
    technologies: ['LangGraph', 'RAG', 'Apache Airflow', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'Streamlit', 'Python'],
    metrics: [
      { label: 'ORCHESTRATION', value: 'Apache Airflow DAGs' },
      { label: 'EXPLAINABILITY', value: 'LangGraph RAG Copilot' }
    ]
  },
  {
    id: 'logpunch-pypi',
    title: 'Logpunch: High-Performance Logging & Exception Library',
    subtitle: 'Published PyPI Package for Production ML & Data Science Pipelines',
    domain: 'Developer Tooling · Open Source Infrastructure',
    period: 'May 2025 – Jun 2025',
    status: 'LIVE ON PYPI',
    summary: 'A developer utility published to the Python Package Index (PyPI) designed to eliminate logging boilerplate, enforce Pydantic configuration schemas, and deliver module-aware stack trace diagnostics.',
    architecture: 'Zero-overhead lightweight package with automatic directory resolution, structured JSON log streaming, and ANSI colored terminal telemetry.',
    highlights: [
      'Published to PyPI with seamless `pip install logpunch` distribution.',
      'Enforces strict Pydantic v2 configuration validation to prevent silent pipeline logging failures.',
      'Integrated deep module-aware exception tracking for accelerated debugging in production batch scripts.'
    ],
    technologies: ['Python', 'PyPI Packaging', 'Pydantic v2', 'Exception Handling', 'Structured Logging'],
    metrics: [
      { label: 'DISTRIBUTION', value: 'Live PyPI Package' },
      { label: 'VALIDATION', value: 'Pydantic v2 Strict' }
    ]
  }
];

export const RESEARCH_WORK: ResearchRecord = {
  title: 'Liver Disease Prediction Using Ensemble Learning',
  authors: 'Gourav Gulia et al.',
  venue: 'IEEE Peer-Reviewed International Conference Publication',
  doi: '10.1109/IC-EETA66496.2025.11548371',
  url: 'https://doi.org/10.1109/IC-EETA66496.2025.11548371',
  abstract: 'A clinical diagnostic predictive framework engineered for early-stage hepatic pathology detection. Evaluates comparative classification algorithms against clinical biochemical markers, utilizing statistical feature selection, cross-validation, and weighted decision voting boundaries to achieve superior diagnostic sensitivity over individual baseline classifiers.',
  methodology: [
    'Multi-model ensemble architecture combining multiple classification algorithms with calibrated weighted decision boundaries.',
    'Comprehensive data preprocessing, missing-value statistical imputation, outlier filtering, and feature importance ranking.',
    'Rigorous cross-validation, clinical sensitivity calibration, and ROC-AUC threshold tuning.'
  ],
  outcomes: [
    'Demonstrated statistically significant generalization improvements over single-model baselines.',
    'Calibrated high-sensitivity decision boundaries to minimize dangerous false negatives in diagnostic triage.',
    'Indexed and published in IEEE Xplore digital library.'
  ],
  technologies: ['Python', 'Ensemble Learning', 'Scikit-Learn', 'Statistical Modeling', 'ROC-AUC Calibration', 'Healthcare Analytics'],
  metrics: [
    { label: 'PUBLICATION', value: 'IEEE Xplore' },
    { label: 'FRAMEWORK', value: 'Weighted Ensembles' },
    { label: 'EVALUATION', value: 'Precision / Recall / ROC-AUC' }
  ]
};

export const EXPERIENCES: ExperienceRecord[] = [
  {
    company: 'Ernst & Young (EY)',
    role: 'Sr. Analyst — AI & Machine Learning Systems',
    location: 'Gurugram, Delhi-NCR, India',
    period: 'Jun 2025 – Jun 2026',
    type: 'Full-time',
    headline: 'Engineering production biometric verification pipelines, forensic AI risk architectures, and automated MLOps for large-scale public sector clients.',
    context: 'Spearheaded machine learning and computer vision engineering for high-stakes government examination audits (SSC, HSSC, NHA), processing millions of multimodal applicant records under rigorous regulatory scrutiny.',
    systemsShipped: [
      {
        system: 'Biometric Verification & Morphing Gate',
        impact: 'Deployed RetinaFace and FaceNet512 deep embeddings with PSNR/SSIM quality filtering, achieving sub-second verification across multi-million candidate pools.',
        stack: ['FaceNet512', 'RetinaFace', 'OpenCV', 'VectorDB', 'Python']
      },
      {
        system: 'Weighted Ensemble Risk Scoring Engine',
        impact: 'Designed ensemble inference tuned via A/B testing and ROC thresholds to detect malpractice patterns across exam centers.',
        stack: ['Scikit-Learn', 'XGBoost', 'Multiprocessing', 'Pandas']
      },
      {
        system: 'Production MLOps & API Modernization',
        impact: 'Re-architected legacy scripts into modular, reproducible FastAPI microservices orchestrated by Apache Airflow with MLflow experiment tracking.',
        stack: ['FastAPI', 'Apache Airflow', 'MLflow', 'Docker', 'DVC']
      },
      {
        system: 'Forensic Text Similarity Engine',
        impact: 'Engineered Jaro-Winkler phonetic matching and TF-IDF nearest-neighbor search for automated impersonation detection.',
        stack: ['TF-IDF', 'Jaro-Winkler', 'Vector Search', 'Multiprocessing']
      }
    ],
    achievements: [
      'Engineered production-grade face verification and morphing detection pipelines for SSC, HSSC, and NHA.',
      'Reduced memory footprint and inference latency through multiprocessing batch workers and dtype downcasting.',
      'Implemented automated Apache Airflow DAGs and MLflow experiment runs, establishing 100% reproducible audit pipelines.',
      'Collaborated closely with government stakeholders and risk governance leads to satisfy strict compliance standards.'
    ],
    technologies: ['Python', 'FastAPI', 'Apache Airflow', 'MLflow', 'FaceNet512', 'RetinaFace', 'OpenCV', 'VectorDB', 'Pandas', 'Docker', 'Scikit-Learn'],
    metrics: [
      { label: 'SEARCH ENGINE', value: 'HNSW VectorDB' },
      { label: 'ORCHESTRATION', value: 'Apache Airflow' },
      { label: 'INFERENCE', value: 'FastAPI Serving' }
    ]
  },
  {
    company: 'Netmax Technologies',
    role: 'Jr. Data Scientist',
    location: 'Chandigarh, India',
    period: 'Oct 2024 – Feb 2025',
    type: 'Full-time',
    headline: 'Engineering automated data validation pipelines and integrating experiment tracking and version control.',
    context: 'Focused on developing resilient data preprocessing pipelines and embedding MLOps best practices across early-stage machine learning workflows.',
    systemsShipped: [
      {
        system: 'Modular Data Preprocessing & Drift Mitigation',
        impact: 'Built automated preprocessing pipelines using MLflow, DVC, and Pandas to minimize feature drift across model iterations.',
        stack: ['Python', 'MLflow', 'DVC', 'Pandas', 'Scikit-Learn']
      }
    ],
    achievements: [
      'Built modular data preprocessing modules that prevented train-serving skew and data leakage.',
      'Standardized experiment tracking and dataset versioning using DVC and MLflow across internal projects.'
    ],
    technologies: ['Python', 'MLflow', 'DVC', 'Pandas', 'Scikit-Learn'],
    metrics: [
      { label: 'PIPELINES', value: 'DVC & MLflow' },
      { label: 'FOUNDATION', value: 'Data Science' }
    ]
  }
];

export const EDUCATION_DATA: EducationRecord[] = [
  {
    degree: 'Master of Science (M.Sc.) in Data Science',
    institution: 'Chandigarh University',
    period: 'Jul 2022 – May 2024',
    location: 'Chandigarh, India',
    focus: 'Advanced Machine Learning, Statistical Inference, Deep Learning Architectures, High-Dimensional Optimization, and Big Data Processing.',
    modules: ['Advanced Statistical Modeling', 'Deep Neural Networks', 'Optimization Theory', 'Distributed Data Systems']
  },
  {
    degree: 'Bachelor of Science (B.Sc.) in Applied Science',
    institution: 'Delhi University',
    period: 'Jul 2019 – May 2022',
    location: 'Delhi, India',
    focus: 'Foundational coursework in Computational Mathematics, Linear Algebra, Multivariable Calculus, Probability, and Scientific Computing.',
    modules: ['Linear Algebra & Matrices', 'Numerical Analysis', 'Mathematical Statistics', 'Scientific Programming']
  }
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ml-core',
    title: 'Machine Learning & Statistical Inference',
    code: 'DOMAIN_01',
    description: 'First-principles algorithmic training, loss formulation, feature engineering, and rigorous statistical calibration.',
    productionStack: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'NumPy', 'Pandas', 'Bayesian Optimization'],
    engineeringCapabilities: [
      { name: 'Algorithmic Modeling', context: 'Ensemble methods, gradient boosting, and penalized regressions.', evidence: 'BurnoutAI & IEEE Publication' },
      { name: 'Feature Engineering', context: 'Leakage-free transformers, polynomial interaction terms, and missingness imputation.', evidence: 'EY Government Audits' },
      { name: 'Statistical Calibration', context: 'A/B testing, ROC-AUC threshold tuning, and LCB/UCB decision criteria.', evidence: 'EY Forensic Models' }
    ]
  },
  {
    id: 'cv-biometrics',
    title: 'Computer Vision & Biometrics',
    code: 'DOMAIN_02',
    description: 'High-throughput facial recognition, morphological quality gates, and metric embedding projections.',
    productionStack: ['RetinaFace', 'FaceNet512', 'OpenCV', 'PyTorch / ONNX', 'PSNR / SSIM', 'LBP'],
    engineeringCapabilities: [
      { name: 'Deep Face Recognition', context: 'Normalized 512-dimensional metric embeddings with cosine/Euclidean verification.', evidence: 'Inspector Library' },
      { name: 'Image Quality Forensics', context: 'Blur rejection, morphing attack detection, and canonical 5-point facial alignment.', evidence: 'SSC / HSSC Deployments' },
      { name: 'Latency Optimization', context: 'Dtype downcasting and multiprocessing batch workers for sub-30ms inference.', evidence: 'EY Production Serving' }
    ]
  },
  {
    id: 'mlops-infra',
    title: 'MLOps & Production Infrastructure',
    code: 'DOMAIN_03',
    description: 'Deterministic data versioning, workflow DAG orchestration, experiment registries, and containerized serving.',
    productionStack: ['Apache Airflow', 'DVC', 'MLflow', 'Docker', 'FastAPI', 'GitHub Actions', 'UV'],
    engineeringCapabilities: [
      { name: 'Workflow Orchestration', context: 'Automated DAG execution with state management and failure recovery.', evidence: 'EY Production Airflow' },
      { name: 'Artifact Versioning', context: 'Deterministic data and model versioning decoupled from Git repositories.', evidence: 'DVC Pipeline in BurnoutAI' },
      { name: 'Containerized Serving', context: 'Multi-stage Docker builds with non-root privileges and P99 < 50ms REST APIs.', evidence: 'Public Docker Hub Deployments' }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & LLMOps Systems',
    code: 'DOMAIN_04',
    description: 'Multi-agent stateful graph orchestration, distributed tracing, citation verification, and low-latency inference.',
    productionStack: ['LangGraph', 'LangChain', 'LangSmith', 'Groq LPU', 'Pydantic v2', 'RAG Architectures'],
    engineeringCapabilities: [
      { name: 'Stateful Multi-Agent Graphs', context: '5-persona collaborative DAG with memory channels and self-correcting feedback.', evidence: 'Aurelius System' },
      { name: 'LLMOps Distributed Tracing', context: 'Granular token usage, span tracking, and zero-link hallucination scorecards.', evidence: 'LangSmith Integration' },
      { name: 'Investigation Copilots', context: 'RAG retrieval over government SOPs and examination compliance documents.', evidence: 'CIP Platform at EY' }
    ]
  },
  {
    id: 'vector-data',
    title: 'Vector Databases & High-Scale Retrieval',
    code: 'DOMAIN_05',
    description: 'High-dimensional indexing, approximate nearest neighbor graphs, and hybrid text-biometric search.',
    productionStack: ['VectorDB (Milvus / FAISS)', 'HNSW Graph Indexing', 'SQL', 'TF-IDF', 'Jaro-Winkler'],
    engineeringCapabilities: [
      { name: 'Approximate Nearest Neighbors', context: 'HNSW indexing delivering sub-second logarithmic retrieval over 1M+ vectors.', evidence: 'Inspector Library' },
      { name: 'Forensic Text Search', context: 'Phonetic fuzzy matching and TF-IDF sparse vector representations.', evidence: 'Impersonation Detection' },
      { name: 'Data Pipeline Engineering', context: 'Vector ingestion pipelines with chunking and high-concurrency memory pools.', evidence: 'EY Public Sector Datasets' }
    ]
  },
  {
    id: 'developer-tooling',
    title: 'Software Engineering & Developer Tooling',
    code: 'DOMAIN_06',
    description: 'Production software architecture, reusable package design, schema contracts, and test-driven reliability.',
    productionStack: ['Python 3.12', 'Pydantic v2', 'PyPI Packaging', 'Pytest', 'Design Patterns (DI / Factory)'],
    engineeringCapabilities: [
      { name: 'Package Distribution', context: 'Published PyPI utilities and enterprise `.whl` artifacts with semantic versioning.', evidence: 'Logpunch on PyPI' },
      { name: 'Type-Safe Contracts', context: 'Strict Pydantic schemas enforcing runtime data validation at every API boundary.', evidence: 'BurnoutAI & Aurelius' },
      { name: 'Test Automation', context: 'Unit, regression, and integration test suites backing production deployments.', evidence: '28-Test Suite in Aurelius' }
    ]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    index: '01',
    principle: 'First-Principles Mathematics',
    statement: 'Algorithms are not black boxes. Understanding the underlying linear algebra, loss manifolds, and statistical distributions is the only way to diagnose failure modes in production.',
    invariant: 'PROBABILITY_CALIBRATION >= EMPIRICAL_METRIC'
  },
  {
    index: '02',
    principle: 'Deterministic Reproducibility',
    statement: 'If an ML model cannot be rebuilt from scratch with identical weights given the code hash and dataset version, it does not belong in a production environment.',
    invariant: 'CODE_HASH + DVC_HASH == REPRODUCIBLE_ARTIFACT'
  },
  {
    index: '03',
    principle: 'Production-First Ergonomics',
    statement: 'A model that cannot be served reliably within SLA latency bounds is a research artifact, not an engineering system. Packaging, containerization, and monitoring are core ML work.',
    invariant: 'P99_LATENCY < SLA_BOUND'
  },
  {
    index: '04',
    principle: 'Zero-Hallucination & Truth Grounding',
    statement: 'In both forensic biometrics and agentic LLMs, ungrounded decisions carry catastrophic cost. Verification gates and evidence scorecards must strictly arbitrate model outputs.',
    invariant: 'CITATION_VERIFICATION == MANDATORY_GATE'
  }
];
