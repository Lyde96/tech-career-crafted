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
    title: "Web Developer",
    company: "Projets Freelance & Personnels",
    location: "Bruxelles, Belgique",
    period: "Juin 2020 - Août 2021",
    responsibilities: [
      "Développé 10+ sites web responsives pour PME et associations, avec 95% de satisfaction client",
      "Créé une plateforme e-commerce générant 50K€+ de transactions en 6 mois",
      "Optimisé le SEO de 5 sites clients, augmentant le trafic organique de 120% en moyenne",
      "Intégré des systèmes de paiement sécurisés (Stripe) avec 0 incidents de sécurité",
      "Réduit le temps de chargement moyen des sites de 60% via optimisations techniques",
    ],
    technologies: "React; TypeScript; Node.js; HTML/CSS; JavaScript; Laravel; Bootstrap; MySQL; Git; Stripe",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
        EXPÉRIENCE PROFESSIONNELLE
      </h2>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-5 border-l-4 border-primary/40 hover:border-primary transition-colors">
            <div className="space-y-3">
              {/* Header */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                <p className="text-base font-semibold text-primary">{exp.company}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
                <p className="text-xs font-bold text-foreground mb-2 uppercase">Responsabilités & Réalisations :</p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <p className="text-xs font-bold text-foreground mb-1">Technologies :</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.technologies}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
