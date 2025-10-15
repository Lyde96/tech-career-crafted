import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

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
      "Engineered 5 advanced AI solutions in 48h using prompt engineering and generative AI APIs (OpenAI GPT-4)",
      "Developed intelligent chatbot with RAG architecture to optimize hey! customer offerings understanding (20% accuracy improvement)",
      "Built generative AI automation tool for visual marketing content creation using DALL-E and Midjourney APIs",
      "Implemented prompt optimization strategies reducing token usage by 30% while maintaining output quality",
      "Tested and evaluated AI model behavior through systematic prompt design iterations",
    ],
    technologies: "Prompt Engineering; OpenAI APIs; Generative AI (GPT-4, DALL-E); RAG; NLP; Python; API Integration; Model Testing & QA",
  },
  {
    title: "AI Engineer & Data Scientist",
    company: "Décathlon (via Talan)",
    location: "Brussels, Belgium",
    period: "March 2024 - July 2025",
    responsibilities: [
      "Deployed AI/ML models to production using Kubernetes and ArgoCD on Azure Cloud, processing 50,000+ transactions/day",
      "Developed and fine-tuned LLM-based demand forecasting system using open-source models (Gemma 3), reducing stock-outs by 25%",
      "Implemented MLOps pipelines with CI/CD (Bamboo, Git) for automated model retraining and deployment, improving reliability by 40%",
      "Engineered prompt strategies for GPT-4 integration in customer service automation, handling 1,000+ queries/day with 85% accuracy",
      "Built ETL/ELT orchestration with Kestra and DBT transformations on Azure Databricks, processing 2M+ records daily",
      "Designed Medallion Architecture data lake and Star Schema data warehouse for 200+ stores using Kimball methodology",
      "Conducted AI model testing, quality assurance, and A/B testing to optimize performance (30% improvement in prediction accuracy)",
      "Containerized AI solutions with Docker and deployed to private cloud using Kubernetes, ensuring 99.9% uptime",
    ],
    technologies: "Kubernetes; ArgoCD; MLOps; Prompt Engineering; LLMs (Gemma 3, GPT-4); CI/CD (Bamboo, Git); ETL/ELT (Kestra, Airflow, DBT); Azure Cloud; Azure Databricks; Docker; Python; SQL (Oracle, SQL Server); Data Modeling (Medallion, Star Schema); Power BI; AI Testing & QA",
  },
  {
    title: "Growth Specialist",
    company: "Neoline Corporation",
    location: "Brussels, Belgium",
    period: "September 2021 - February 2024",
    responsibilities: [
      "Developed a marketing automation system generating 150% average growth for 20+ SME clients",
      "Created and optimized sales funnels achieving 12% conversion rate (vs 3% market standard)",
      "Implemented customized CRM tools, reducing prospecting time by 70%",
      "Trained 30+ entrepreneurs in digital growth strategies, with 85% client satisfaction",
      "Analyzed performance data to identify growth opportunities (+40% average ROI)",
    ],
    technologies: "CRM; Marketing Automation; Google Analytics; Sales Funnel; A/B Testing; SEO/SEM; Python; Excel",
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
              <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
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
