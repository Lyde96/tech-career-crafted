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
    title: "Orange Hackathon Participant",
    company: "Orange",
    location: "Paris, France",
    period: "March 14-15, 2025",
    responsibilities: [
      "Developed 5 advanced technology solutions in 48h focused on AI innovation",
      "Created an intelligent chatbot to optimize understanding of hey! customer offerings",
      "Developed a generative AI automation tool for visual marketing content creation",
    ],
    technologies: "Generative AI; NLP; Chatbot; Python; API; Innovation; Marketing Automation",
  },
  {
    title: "Data Analyst",
    company: "Décathlon (via Talan)",
    location: "Brussels, Belgium",
    period: "March 2024 - July 2025",
    responsibilities: [
      "Analyzed 50,000+ transactions/day via Azure Cloud and Power BI, reducing stock-outs by 25%",
      "Created advanced Power BI and Excel dashboards for 200+ stores, accelerating decision-making by 60%",
      "Optimized SQL queries on Azure and SAP, improving report performance by 40%",
      "Developed AI predictive models for inventory optimization, saving 15h/week of manual effort",
      "Automated SAP and Azure Cloud data extraction, increasing analysis efficiency by 35%",
    ],
    technologies: "Azure Cloud; SAP; Power BI; SQL; Advanced Excel; Python; AI/Machine Learning; Azure Databricks; Data Modeling",
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
