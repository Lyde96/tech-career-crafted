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
    title: "EcoTracker - App Écologique",
    description: "Application web permettant de suivre et réduire son empreinte carbone. Interface moderne avec dashboard interactif et gamification.",
    features: [
      "Calcul automatique d'empreinte carbone",
      "Dashboard avec graphiques interactifs",
      "Système de défis et récompenses",
      "API pour données environnementales"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    github: "github.com/user/ecotracker",
    demo: "ecotracker-demo.com",
    status: "En production"
  },
  {
    title: "TaskFlow - Gestion de Projets",
    description: "Plateforme collaborative de gestion de projets avec intégration temps réel et notifications push.",
    features: [
      "Tableau Kanban drag & drop",
      "Chat en temps réel",
      "Notifications push",
      "Rapports automatisés"
    ],
    technologies: ["Next.js", "Socket.io", "MongoDB", "Express", "PWA"],
    github: "github.com/user/taskflow",
    status: "En développement"
  },
  {
    title: "CryptoWatch - Portfolio Crypto",
    description: "Dashboard pour suivre un portefeuille de cryptomonnaies avec alertes prix et analyses techniques.",
    features: [
      "Suivi en temps réel des prix",
      "Alertes personnalisables",
      "Analyses techniques avancées",
      "Export PDF des rapports"
    ],
    technologies: ["Vue.js", "Python", "FastAPI", "Redis", "WebSocket"],
    github: "github.com/user/cryptowatch",
    demo: "cryptowatch-demo.com",
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