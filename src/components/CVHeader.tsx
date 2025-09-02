import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

export const CVHeader = () => {
  return (
    <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <img
            src={profilePhoto}
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
              Développeur Web Full Stack
            </h2>
            <p className="text-foreground/80 max-w-2xl leading-relaxed">
              Passionné par le développement web moderne, je crée des applications 
              performantes et intuitives en utilisant les dernières technologies. 
              Expertise en React, Node.js et architectures cloud.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              JavaScript/TypeScript
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              React/Next.js
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Node.js
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Python
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
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
            <span>Github.com/Lyde96</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
            <span>linkedin/in/Lydéric Yabada</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            <span>portfolio-lyd</span>
          </div>
        </div>
      </div>
    </Card>
  );
};