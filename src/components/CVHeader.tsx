import { Mail, Phone, MapPin, Github, Linkedin, Globe, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// Using uploaded profile photo

export const CVHeader = () => {
  return (
    <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <img
            src="/lovable-uploads/91f48df4-bd41-4aab-a782-8513160c5cad.png"
            alt="Photo de profil"
            className="w-32 h-32 rounded-xl object-cover border-2 border-primary/20"
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-tech-gradient bg-clip-text text-transparent">
              Lydéric Yabada
            </h1>
            <h2 className="text-xl text-muted-foreground font-medium">
              Web-dev/Data Engineer
            </h2>
            <p className="text-foreground/80 max-w-2xl leading-relaxed">
              <strong>Spécialiste Data Engineering & Analytics</strong> avec une expertise en développement d'applications web. 
              J'aide les entreprises à transformer leurs données en avantage concurrentiel grâce à des solutions technologiques performantes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Python • SQL • ETL
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Power BI • Databricks
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Azure • Apache Spark
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              React • TypeScript
            </Badge>
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>Lyde72@hotmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>0492 438 463</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Bruxelles, Belgique</span>
          </div>
          <a 
            href="https://github.com/Lyde96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile /Lyde96</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/lyd%C3%A9ric-yabada-06357a351/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile /Lydéric Yabada</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            <span>portfolio-lyd</span>
          </div>
          <Link to="/lettre-motivation">
            <Button variant="outline" size="sm" className="w-full mt-4">
              <FileText className="w-4 h-4 mr-2" />
              Lettre de motivation
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};