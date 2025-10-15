import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import europassLogo from "@/assets/europass-logo.png";

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  responsibilities: string[];
  technologies: string;
}

const experiences: Experience[] = [
  {
    title: "Orange Hackathon Participant - AI Solutions Developer",
    company: "Orange",
    location: "Paris, France",
    period: "March 14-15, 2025",
    responsibilities: [
      "Engineered 5 production-ready AI solutions in 48h using advanced prompt engineering patterns (chain-of-thought, few-shot, role-based) with OpenAI GPT-4 API",
      "Architected RAG (Retrieval-Augmented Generation) chatbot using LangChain, ChromaDB vector store, and OpenAI embeddings (text-embedding-ada-002) to optimize hey! customer offerings understanding (20% accuracy improvement, 500ms response time)",
      "Built generative AI automation tool integrating DALL-E 3 and Midjourney v6 APIs for visual marketing content creation, with prompt templates and quality validation pipeline",
      "Implemented advanced prompt optimization strategies (token compression, semantic caching) reducing GPT-4 API costs by 30% while maintaining 95%+ output quality score",
      "Deployed end-to-end AI pipeline with FastAPI backend, React frontend, and Docker containerization for demo presentation",
      "Conducted systematic A/B testing on prompt variations using OpenAI's temperature and top_p parameters to optimize model behavior",
    ],
    technologies: "Prompt Engineering (Chain-of-Thought, Few-Shot); OpenAI APIs (GPT-4, DALL-E 3, Embeddings); RAG Architecture; LangChain; ChromaDB; Vector Databases; Midjourney API; FastAPI; Python; Docker; React; Model Testing & QA",
  },
  {
    title: "AI Engineer & Data Scientist",
    company: "Décathlon (via Talan)",
    location: "Brussels, Belgium",
    period: "March 2024 - July 2025",
    responsibilities: [
      "Deployed production ML/AI models on Azure AKS (Kubernetes) with GitOps workflow using ArgoCD for automated deployments, processing 50,000+ daily transactions with 99.9% uptime and auto-scaling (2-10 pods based on load)",
      "Fine-tuned open-source LLM Gemma 3 (7B parameters) using QLoRA and PEFT on Azure GPU clusters (A100) for demand forecasting, achieving 25% stock-out reduction and 18% inventory cost savings using custom training pipeline with HuggingFace Transformers and PyTorch",
      "Architected complete MLOps pipeline with MLflow for experiment tracking, DVC for model versioning, and CI/CD automation (Bamboo, GitLab CI) triggering automated model retraining on data drift detection (EvidentlyAI), improving production reliability by 40%",
      "Engineered multi-turn conversational AI using GPT-4 API with custom prompt templates, RAG architecture (Pinecone vector DB), and function calling for customer service automation handling 1,000+ queries/day with 85% CSAT score and 60% ticket deflection rate",
      "Built end-to-end ELT pipelines orchestrated with Kestra workflows, using DBT for SQL transformations (500+ models) on Azure Databricks (Delta Lake), processing 2M+ daily records with data quality checks and incremental materialization strategies",
      "Designed scalable data architecture implementing Medallion Architecture (Bronze/Silver/Gold layers) and Kimball Star Schema data warehouse serving 200+ stores with optimized dimensional modeling and SCD Type 2 for historical tracking",
      "Implemented ML model monitoring and A/B testing framework using custom Python libraries, achieving 30% prediction accuracy improvement through systematic hyperparameter optimization (Optuna) and feature engineering iterations",
      "Containerized ML services (Flask APIs, batch inference jobs) with Docker multi-stage builds, deployed on private AKS cluster with Helm charts, implementing horizontal pod autoscaling and resource quotas for cost optimization",
      "Developed real-time inference APIs using FastAPI with async processing, Redis caching, and model serving via ONNX Runtime, reducing latency from 2s to 200ms for high-traffic endpoints",
    ],
    technologies: "Kubernetes (AKS); ArgoCD; GitOps; MLOps (MLflow, DVC, EvidentlyAI); LLMs (Gemma 3, GPT-4); Fine-tuning (QLoRA, PEFT, HuggingFace); PyTorch; Prompt Engineering; RAG (Pinecone, LangChain); CI/CD (Bamboo, GitLab CI); ELT (Kestra, Airflow, DBT); Azure Cloud (Databricks, AKS, GPU); Docker; Helm; Python (FastAPI, Flask); SQL (Oracle, SQL Server); Delta Lake; Medallion Architecture; Kimball Star Schema; Redis; ONNX; A/B Testing; Model Monitoring",
  },
  {
    title: "AI Growth Specialist & ML Engineer",
    company: "Neoline Corporation",
    location: "Brussels, Belgium",
    period: "September 2021 - February 2024",
    responsibilities: [
      "Developed ML-powered marketing automation system using predictive models, generating 150% average growth for 20+ SME clients",
      "Engineered prompt strategies for AI-driven content generation (GPT-3.5/4), producing 500+ marketing materials with 90% client approval",
      "Implemented NLP-based customer sentiment analysis tool processing 10,000+ interactions/month to optimize sales funnels (12% conversion vs 3% standard)",
      "Deployed containerized AI recommendation engine using Docker and Python, reducing prospecting time by 70%",
      "Built ETL pipelines with Python for data extraction and transformation from multiple CRM sources (Salesforce, HubSpot)",
      "Trained and fine-tuned classification models for lead scoring using scikit-learn, improving qualification accuracy by 45%",
      "Conducted A/B testing on AI-generated content and automated campaigns, achieving +40% average ROI",
      "Mentored 30+ entrepreneurs on AI-driven growth strategies and ML tools integration with 85% satisfaction rate",
    ],
    technologies: "Python; Machine Learning (scikit-learn, TensorFlow); Prompt Engineering; GPT-3.5/4 APIs; NLP; Docker; ETL; SQL; CRM Integration; A/B Testing; Predictive Analytics; Model Training & Fine-tuning",
  },
  {
    title: "Administrative Assistant",
    company: "CPAS",
    location: "Ottignies, Belgium",
    period: "September 2020 - September 2021",
    responsibilities: [
      "Liaison between beneficiaries and social workers",
      "Support for helpline assistance",
      "Distribution of certificates to social workers and beneficiaries",
      "Follow-up of beneficiary files and payments",
      "Assistance with communication tasks (web content, flyer creation)",
    ],
    technologies: "MS Office 365; Communication; Administrative Management; Customer Support",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2">
        PROFESSIONAL EXPERIENCE
      </h2>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary/40 pl-4 space-y-2">
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                {index === 1 && (
                  <img src={europassLogo} alt="Europass" className="h-6 opacity-70" />
                )}
                <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
              </div>
              <p className="text-base font-semibold text-primary">{exp.company}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <ul className="space-y-1.5">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-gray-600 mb-1">Technologies:</p>
              <p className="text-sm text-gray-600 leading-relaxed">{exp.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
