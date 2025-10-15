import { Card } from "@/components/ui/card";

const technicalSkills = [
  "Python",
  "SQL",
  "Apache Spark",
  "Azure Databricks",
  "Power BI",
  "ETL/ELT",
  "Data Modeling",
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "HTML/CSS",
  "Git/GitHub",
  "PostgreSQL",
  "MongoDB",
  "REST API",
  "Docker",
  "CI/CD",
  "Agile/Scrum",
  "Excel Avancé",
];

export const SkillsSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
        TECHNICAL SKILLS
      </h2>

      <Card className="p-5">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">AI & Machine Learning (4+ years)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prompt Engineering • Large Language Models (Gemma 3, GPT-4, Claude) • Generative AI APIs (OpenAI, Anthropic) • 
              NLP • AI Model Training & Fine-tuning • RAG (Retrieval-Augmented Generation) • AI Testing & QA • 
              Model Evaluation & Optimization • MLOps
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">MLOps & Infrastructure (4+ years)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kubernetes • ArgoCD • Docker • CI/CD (Bamboo, Jenkins, Git) • Azure Cloud • Azure Databricks • 
              Model Deployment & Monitoring • Containerization • Microservices • Private Cloud Environments • 
              Model Versioning • A/B Testing for AI Models
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Data Engineering & Analytics (5+ years)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Python • SQL (Oracle, SQL Server) • ETL/ELT (Kestra, Airflow, DBT) • Apache Spark • 
              Data Modeling (Medallion Architecture, Star Schema, Kimball) • Data Warehousing • Data Lakes • 
              PostgreSQL • MongoDB • Power BI • Superset • Advanced Excel
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Programming & Development</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Python (Pandas, NumPy, Scikit-learn, TensorFlow) • TypeScript • React • Node.js • 
              REST API • Git/GitHub • Agile/Scrum • Azure DevOps • Testing & QA
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
