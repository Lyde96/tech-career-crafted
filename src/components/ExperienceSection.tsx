import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Participant Hackathon Orange",
    company: "Orange",
    location: "Paris, France",
    period: "14-15 Mars 2025",
    description: [
      "🤖 Innovation IA : Développement de 5 solutions technologiques avancées en 48h",
      "💬 Chatbot intelligent : Création d'un assistant virtuel pour optimiser la compréhension des offres clients hey!",
      "🎨 IA générative : Développement d'un outil d'automatisation pour la création de contenu marketing visuel",
      "🔒 Cybersécurité automatisée : Conception d'une solution de maintenance préventive pour sites web",
      "👥 Assistant RH virtuel : Développement d'un outil de planification intelligente des effectifs",
      "🔍 Support collaborateurs : Création d'un chatbot de recherche d'informations internes instantané"
    ],
    technologies: ["IA Générative", "Chatbot", "Machine Learning", "Cybersécurité", "Automation", "NLP", "API", "Innovation"]
  },
  {
    title: "Data Engineer",
    company: "Décathlon",
    location: "Anderlecht, Belgique",
    period: "octobre 2024 - Mai 2025",
    description: [
      "🎯 Optimisation des performances retail : Développement de pipelines ETL traitant 50k+ transactions/jour",
      "📊 Amélioration de l'expérience client : Analyse de données de vente réduisant les ruptures de stock de 25%",
      "💼 Business Intelligence : Mise en place de dashboards Power BI suivis par 15+ départements",
      "🔮 Analyse prédictive : Modèles de forecasting améliorant la planification des stocks de 30%",
      "⚡ Tableaux de bord temps réel : Réduction du délai de prise de décision de 60% grâce aux KPIs automatisés"
    ],
    technologies: ["Python", "SQL", "Power BI", "Apache Spark", "Azure", "Databricks", "Docker", "Git", "ETL"]
  },
  {
    title: "Business Developer",
    company: "Neoline Corporation",
    location: "Bruxelles, Belgique",
    period: "Août 2023 - Septembre 2024",
    description: [
      "💰 Croissance revenus : Accompagnement de 20+ entreprises générant +150% de revenus en moyenne",
      "🎯 Processus scalables : Mise en place de funnels automatisés convertissant à 12% (vs 3% marché)",
      "📈 Formation digitale : Animation de workshops pour 100+ entrepreneurs sur les stratégies growth",
      "🔄 Automation commerciale : Développement de processus réduisant de 70% le temps de prospection"
    ],
    technologies: ["Growth Hacking", "Marketing Digital", "CRM", "Analytics", "Automation", "Sales Funnel"]
  },
  {
    title: "IT Support Engineer (Proximity Agent)",
    company: "European Commission (Venthone)",
    location: "Bruxelles, Belgique",
    period: "Sep 2022 - Jun 2023",
    description: [
      "🎯 Performance opérationnelle : Résolution de 95% des incidents ITIL en <2h, maintenant un SLA de 99.5%",
      "👑 Support VIP/VVIP : Gestion prioritaire de 150+ utilisateurs haute direction Commission Européenne",
      "🔄 Migrations critiques : 85 migrations VIP réussies sans interruption de service (100% uptime)",
      "📋 Optimisation ticketing : Réduction de 40% du backlog grâce à ServiceNow et processus améliorés",
      "⏱️ Excellence SLA : Dépassement des objectifs de 25%, satisfaction utilisateur 98%",
      "🛠️ Support multi-niveaux : 500+ incidents/mois résolus (hardware/software), taux de résolution 1ère ligne 75%",
      "🔧 Expertise technique : Diagnostic et résolution de 300+ problèmes critiques applications/OS",
      "💻 Infrastructure déployée : Configuration et support de 400+ postes de travail et périphériques",
      "📱 Mobilité entreprise : Déploiement MDM sur 200+ appareils iOS/Android avec 0% perte de données",
      "🤝 Interface stratégique : Liaison efficace entre 1000+ utilisateurs et équipes IT spécialisées",
      "📚 Amélioration continue : Création de 50+ articles knowledge base, réduisant les tickets récurrents de 30%"
    ],
    technologies: ["Windows 10", "MS Office 365", "SharePoint", "iOS", "MDM", "ServiceNow", "Active Directory", "Landesk", "Videoconferencing"]
  },
  {
    title: "Assistant Administratif",
    company: "CPAS",
    location: "Ottignies, Belgique",
    period: "Septembre 2021 - Septembre 2022",
    description: [
      "Liaison entre les bénéficiaires et les travailleurs sociaux",
      "Support à la ligne téléphonique d'aide",
      "Distribution de certificats aux travailleurs sociaux et bénéficiaires",
      "Suivi des dossiers des bénéficiaires et des paiements",
      "Assistance aux tâches de communication (contenu web, création de flyers)"
    ],
    technologies: ["Communication", "Service Client", "Administration", "Suivi de Dossiers", "Gestion Administrative"]
  },
  {
    title: "Programme Erasmus+",
    company: "Union Européenne",
    location: "Slovénie",
    period: "5-20 Septembre 2021",
    description: [
      "Participation à un programme d'échange européen Erasmus+",
      "Immersion culturelle et linguistique internationale",
      "Développement de compétences interculturelles et d'adaptabilité",
      "Collaboration avec des participants de différents pays européens",
      "Renforcement de l'autonomie et de l'ouverture internationale"
    ],
    technologies: ["Communication interculturelle", "Adaptabilité", "Langues étrangères", "Collaboration internationale", "Mobilité européenne"]
  },
  {
    title: "Stage Odoo",
    company: "Odoo",
    location: "Belgique",
    period: "Juillet 2021",
    description: [
      "Stage de découverte du logiciel de gestion d'affaires open source Odoo",
      "Formation sur un progiciel de gestion intégré (ERP) étendu aux applications front office",
      "Apprentissage d'un système utilisé par plus de 15 millions d'utilisateurs mondialement",
      "Familiarisation avec les versions community (LGPLv3) et entreprise du logiciel"
    ],
    technologies: ["Odoo", "ERP", "Gestion d'entreprise", "Open Source", "Applications métier"]
  }
];

export const ExperienceSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <div className="w-2 h-8 bg-tech-gradient rounded-full" />
        Expérience Professionnelle
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-lg font-medium text-foreground">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-skill-gradient text-primary-foreground border-0">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};