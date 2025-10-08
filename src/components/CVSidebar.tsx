import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import europassLogo from "@/assets/europass-logo.png";

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
          Data Analyst - AI Expert
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
        <h2 className="font-bold text-cv-sidebar-foreground uppercase text-xs">Skills</h2>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Data Analytics</h3>
          <p className="text-xs leading-relaxed">Python, SQL, Azure Databricks, Apache Spark, Power BI, ETL</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Web Development</h3>
          <p className="text-xs leading-relaxed">React, TypeScript, Node.js, HTML/CSS, JavaScript</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Tools</h3>
          <p className="text-xs leading-relaxed">Git/GitHub, Docker, CI/CD, Agile/Scrum</p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="space-y-3">
        <h2 className="font-bold text-cv-sidebar-foreground uppercase text-xs">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Windows 10</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>MS Office 365</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>MS Sharepoint</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Lancrypt</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>iOS / iPad iOS</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>MDM</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>ServiceNow</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>SMT</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Script</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Active Directory</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Jira</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Videoconferencing</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Landesk</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary">•</span>
            <span>Windows 7</span>
          </div>
        </div>
      </div>

      {/* Europass Logo */}
      <div className="flex justify-center mt-8">
        <img src={europassLogo} alt="Europass" className="h-10 opacity-80" />
      </div>
    </div>
  );
};
