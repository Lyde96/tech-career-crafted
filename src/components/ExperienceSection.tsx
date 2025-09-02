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
    title: "Business Developer",
    company: "Neoline Corporation",
    location: "Remote",
    period: "2023 - 2024",
    description: [
      "Développement et accélération de la croissance d'entreprises en ligne",
      "Accompagnement personnalisé pour générer des revenus prévisibles et constants",
      "Formation et éducation aux stratégies de croissance digitale",
      "Mise en place de processus de génération de revenus scalables"
    ],
    technologies: ["Growth Hacking", "Marketing Digital", "CRM", "Analytics", "Automation", "Sales Funnel"]
  },
  {
    title: "IT Desk Support",
    company: "National Bank",
    location: "Bruxelles, Belgique",
    period: "Sep 2022 - Jun 2023",
    description: [
      "Support informatique incluant installation, dépannage et maintenance d'ordinateurs et imprimantes réseau",
      "Installation et gestion des licences VOIP pour assurer des services de communication fluides",
      "Service client avec focus sur la résolution rapide et efficace sous pression",
      "Support des appareils iOS et assistance applicative (Resengo, Odoo, logiciels de réservation)",
      "Réparations matérielles et maintenance préventive pour maximiser la fiabilité des systèmes"
    ],
    technologies: ["Windows", "iOS", "VOIP", "Ricoh", "Canon", "Lexmark", "Resengo", "Odoo"]
  },
  {
    title: "Assistant Administratif",
    company: "CPAS",
    location: "Ottignies, Belgique",
    period: "Jun 2021 - Sep 2022",
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