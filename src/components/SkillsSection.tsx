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
        COMPÉTENCES TECHNIQUES
      </h2>

      <Card className="p-5">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Data Engineering & Analytics</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Python • SQL • Apache Spark • Azure Databricks • Power BI • Tableau • ETL/ELT Pipelines • 
              Data Modeling • Data Warehousing • PostgreSQL • MongoDB • Elasticsearch
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Développement Web</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              React • TypeScript • Node.js • JavaScript ES6+ • HTML5/CSS3 • Next.js • Vue.js • 
              Tailwind CSS • REST API • GraphQL • Laravel • Bootstrap
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Outils & Méthodologies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Git/GitHub • Docker • CI/CD • Agile/Scrum • Azure DevOps • AWS • Kubernetes • 
              Testing (Jest, Cypress) • Excel Avancé • Google Analytics
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase">Business & Marketing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CRM • Marketing Automation • Sales Funnel • A/B Testing • SEO/SEM • 
              Growth Hacking • Data Analysis • KPI Tracking
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
