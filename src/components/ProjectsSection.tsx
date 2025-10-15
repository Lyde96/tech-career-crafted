import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  status: "En production" | "En développement" | "Terminé";
}

const projects: Project[] = [
  {
    title: "AI-Powered Customer Sentiment Analyzer",
    description: "NLP system for real-time customer feedback analysis using fine-tuned transformer models with 92% accuracy across 5 languages.",
    features: [
      "Fine-tuned BERT model (camemBERT) for French sentiment analysis",
      "Real-time inference API with 150ms latency using ONNX optimization",
      "MLOps pipeline with automated retraining on new data (weekly)",
      "Dashboards with sentiment trends and topic clustering (LDA)"
    ],
    technologies: ["Python", "PyTorch", "HuggingFace Transformers", "ONNX", "FastAPI", "Docker", "MLflow", "PostgreSQL", "Grafana"],
    github: "github.com/user/sentiment-ai",
    demo: "sentiment-analyzer-demo.com",
    status: "En production"
  },
  {
    title: "LLM-Powered RAG Knowledge Assistant",
    description: "Enterprise RAG system using Mistral-7B with custom vector database for internal documentation Q&A (10,000+ documents).",
    features: [
      "Document ingestion pipeline with chunking and embedding (sentence-transformers)",
      "Hybrid search combining vector similarity and BM25",
      "LLM response generation with source citation and hallucination detection",
      "Chat history management and context-aware follow-up questions"
    ],
    technologies: ["LangChain", "Mistral-7B", "ChromaDB", "Sentence-Transformers", "FastAPI", "React", "Docker", "Redis"],
    github: "github.com/user/rag-assistant",
    status: "En développement"
  },
  {
    title: "Predictive Sales Forecasting with ML",
    description: "Time series forecasting system using ensemble ML models (XGBoost, Prophet, LSTM) with AutoML hyperparameter tuning.",
    features: [
      "Multi-model ensemble achieving 15% MAPE on 90-day forecast",
      "Automated feature engineering with 50+ temporal and external features",
      "MLOps pipeline with A/B testing and shadow deployment",
      "Interactive dashboards with prediction intervals and explainability (SHAP)"
    ],
    technologies: ["Python", "XGBoost", "Prophet", "TensorFlow", "Optuna", "MLflow", "Airflow", "DBT", "PostgreSQL", "Plotly"],
    github: "github.com/user/sales-forecasting",
    demo: "forecast-demo.com",
    status: "Terminé"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "En production":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "En développement":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Terminé":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    default:
      return "bg-muted/10 text-muted-foreground";
  }
};

export const ProjectsSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <div className="w-2 h-8 bg-tech-gradient rounded-full" />
        Projets Marquants
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </h3>
                  <Badge className={getStatusColor(project.status)}>
                    <Star className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Fonctionnalités clés:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-skill-gradient text-primary-foreground border-0">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2 pt-2">
                {project.github && (
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" className="flex items-center gap-2 bg-tech-gradient">
                    <ExternalLink className="w-4 h-4" />
                    Démo
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};