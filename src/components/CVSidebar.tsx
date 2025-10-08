import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const CVSidebar = () => {
  return (
    <div className="bg-cv-sidebar text-cv-sidebar-foreground p-8 space-y-8">
      {/* Profile Photo */}
      <div className="flex justify-center">
        <img
          src="/lovable-uploads/91f48df4-bd41-4aab-a782-8513160c5cad.png"
          alt="Lydéric Yabada"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-cv-sidebar-foreground">
          Lydéric Yabada
        </h1>
        <p className="text-base text-cv-sidebar-foreground/80 mt-2">
          Data Engineer & Web Developer
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 text-sm">
        <h2 className="font-bold text-cv-sidebar-foreground uppercase text-xs mb-4">Contact</h2>
        
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 shrink-0 mt-0.5" />
          <span className="break-all">Lyde72@hotmail.com</span>
        </div>
        
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 shrink-0 mt-0.5" />
          <span>0492 438 463</span>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
          <span>Bruxelles, Belgique</span>
        </div>
        
        <a 
          href="https://github.com/Lyde96" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4 shrink-0 mt-0.5" />
          <span>GitHub /Lyde96</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/lyd%C3%A9ric-yabada-06357a351/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4 shrink-0 mt-0.5" />
          <span>LinkedIn /Lydéric Yabada</span>
        </a>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="font-bold text-cv-sidebar-foreground uppercase text-xs">Compétences</h2>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Data Engineering</h3>
          <p className="text-xs leading-relaxed">Python, SQL, Azure Databricks, Apache Spark, Power BI, ETL</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Développement Web</h3>
          <p className="text-xs leading-relaxed">React, TypeScript, Node.js, HTML/CSS, JavaScript</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Outils</h3>
          <p className="text-xs leading-relaxed">Git/GitHub, Docker, CI/CD, Agile/Scrum</p>
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <h2 className="font-bold text-cv-sidebar-foreground uppercase text-xs">Langues</h2>
        <div className="space-y-2 text-sm">
          <div>
            <p className="font-medium">Français</p>
            <p className="text-xs text-cv-sidebar-foreground/70">Langue maternelle</p>
          </div>
          <div>
            <p className="font-medium">Anglais</p>
            <p className="text-xs text-cv-sidebar-foreground/70">Professionnel</p>
          </div>
          <div>
            <p className="font-medium">Néerlandais</p>
            <p className="text-xs text-cv-sidebar-foreground/70">Intermédiaire</p>
          </div>
          <div>
            <p className="font-medium">Espagnol</p>
            <p className="text-xs text-cv-sidebar-foreground/70">Notions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
