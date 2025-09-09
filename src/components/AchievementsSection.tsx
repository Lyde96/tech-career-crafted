import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Zap } from "lucide-react";

interface Achievement {
  title: string;
  company: string;
  impact: string;
  metrics: string[];
  technologies: string[];
  icon: React.ReactNode;
  category: "Data Engineering" | "Business Growth" | "Technical Excellence";
}

const achievements: Achievement[] = [
  {
    title: "Pipeline de Données Retail",
    company: "Décathlon",
    impact: "Transformation digitale du processus de prise de décision retail",
    metrics: [
      "50,000+ transactions/jour traitées",
      "25% réduction ruptures de stock",
      "60% délai de décision réduit",
      "15 départements utilisateurs"
    ],
    technologies: ["Python", "Apache Spark", "Azure", "Power BI", "SQL"],
    icon: <TrendingUp className="w-5 h-5" />,
    category: "Data Engineering"
  },
  {
    title: "Système Growth Automation",
    company: "Neoline Corporation",
    impact: "Révolution des processus de croissance pour PME digitales",
    metrics: [
      "20+ entreprises accompagnées",
      "150% croissance revenus moyenne",
      "12% taux conversion (vs 3% marché)",
      "70% temps prospection économisé"
    ],
    technologies: ["CRM", "Marketing Automation", "Analytics", "Sales Funnel"],
    icon: <Target className="w-5 h-5" />,
    category: "Business Growth"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Data Engineering":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Business Growth":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Technical Excellence":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    default:
      return "bg-muted/10 text-muted-foreground";
  }
};

export const AchievementsSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <div className="w-2 h-8 bg-tech-gradient rounded-full" />
        Réalisations Clés & Impact Business
      </h2>
      
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    {achievement.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-lg font-medium text-foreground">
                      {achievement.company}
                    </p>
                    <Badge className={getCategoryColor(achievement.category)}>
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/80 font-medium">
                {achievement.impact}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievement.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-primary/5 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {achievement.technologies.map((tech, idx) => (
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