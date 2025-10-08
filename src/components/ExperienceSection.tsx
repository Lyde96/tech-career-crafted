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
    title: "Participant Hackathon Orange",
    company: "Orange",
    location: "Paris, France",
    period: "14-15 Mars 2025",
    responsibilities: [
      "Développement de 5 solutions technologiques avancées en 48h axées sur l'innovation IA",
      "Création d'un chatbot intelligent pour optimiser la compréhension des offres clients hey!",
      "Développement d'un outil d'automatisation IA générative pour la création de contenu marketing visuel",
    ],
    technologies: "IA générative; NLP; Chatbot; Python; API; Innovation; Marketing Automation",
  },
  {
    title: "Data Engineer",
    company: "Décathlon (via Talan)",
    location: "Bruxelles, Belgique",
    period: "Mars 2024 - Présent",
    responsibilities: [
      "Conçu et déployé un pipeline ETL traitant 50,000+ transactions/jour, réduisant les ruptures de stock de 25%",
      "Développé des dashboards Power BI analysant les ventes de 200+ magasins, accélérant la prise de décision de 60%",
      "Optimisé les requêtes SQL complexes, améliorant les performances des rapports de 40%",
      "Automatisé le processus de collecte de données retail, économisant 15h/semaine d'efforts manuels",
      "Collaboré avec 5 départements pour aligner les KPIs data avec les objectifs business",
    ],
    technologies: "Python; SQL; Azure Databricks; Apache Spark; Power BI; ETL; Data Modeling; Git",
  },
  {
    title: "Growth Specialist",
    company: "Neoline Corporation",
    location: "Bruxelles, Belgique",
    period: "Septembre 2021 - Février 2024",
    responsibilities: [
      "Développé un système d'automation marketing générant 150% de croissance moyenne pour 20+ clients PME",
      "Créé et optimisé des funnels de vente atteignant 12% de taux de conversion (vs 3% standard marché)",
      "Implémenté des outils CRM personnalisés, réduisant le temps de prospection de 70%",
      "Formé 30+ entrepreneurs aux stratégies digitales de croissance, avec 85% de satisfaction client",
      "Analysé les données de performance pour identifier des opportunités de croissance (+40% ROI moyen)",
    ],
    technologies: "CRM; Marketing Automation; Google Analytics; Sales Funnel; A/B Testing; SEO/SEM; Python; Excel",
  },
  {
    title: "Assistant Administratif",
    company: "CPAS",
    location: "Ottignies, Belgique",
    period: "Septembre 2020 - Septembre 2021",
    responsibilities: [
      "Liaison entre les bénéficiaires et les travailleurs sociaux",
      "Support à la ligne téléphonique d'aide",
      "Distribution de certificats aux travailleurs sociaux et bénéficiaires",
      "Suivi des dossiers des bénéficiaires et des paiements",
      "Assistance aux tâches de communication (contenu web, création de flyers)",
    ],
    technologies: "MS Office 365; Communication; Gestion administrative; Support client",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2">
        EXPÉRIENCE PROFESSIONNELLE
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
              <p className="text-xs font-semibold text-gray-600 mb-1">Technologies :</p>
              <p className="text-sm text-gray-600 leading-relaxed">{exp.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
