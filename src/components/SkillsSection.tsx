import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, Palette, Wrench, Users, BarChart3 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript ES6+", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "API REST/GraphQL", level: 85 }
    ]
  },
  {
    title: "Data Engineering",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: [
      { name: "Apache Spark", level: 85 },
      { name: "Apache Kafka", level: 80 },
      { name: "Airflow", level: 85 },
      { name: "Elasticsearch", level: 75 },
      { name: "ETL/ELT Pipelines", level: 90 },
      { name: "Data Modeling", level: 85 }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Terraform", level: 65 }
    ]
  },
  {
    title: "Design & UX",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "Figma", level: 75 },
      { name: "Design System", level: 80 },
      { name: "UI/UX Principles", level: 75 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    title: "Outils",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Jest/Testing", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Agile/Scrum", level: 85 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Leadership", level: 80 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Mentoring", level: 85 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <div className="w-2 h-8 bg-tech-gradient rounded-full" />
        Compétences Techniques
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6 bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted/50"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Certifications */}
      <Card className="p-6 bg-card-gradient border-border/50">
        <h3 className="text-lg font-semibold mb-4">Certifications & Formations</h3>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            AWS Certified Developer
          </Badge>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            React Advanced Certification
          </Badge>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Scrum Master Certified
          </Badge>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Google Analytics Certified
          </Badge>
        </div>
      </Card>
    </div>
  );
};