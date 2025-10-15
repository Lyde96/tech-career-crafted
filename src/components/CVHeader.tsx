import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const CVHeader = () => {
  return (
    <Card className="p-6 border-l-4 border-primary">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Photo */}
        <div className="shrink-0">
          <img
            src="/lovable-uploads/91f48df4-bd41-4aab-a782-8513160c5cad.png"
            alt="Lydéric Yabada"
            className="w-24 h-24 rounded-lg object-cover border-2 border-border"
          />
        </div>

        {/* Header Content */}
        <div className="flex-1 space-y-3">
          {/* Name and Title */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Lydéric Yabada
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              AI Engineer & Data Scientist
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              Lyde72@hotmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              0492 438 463
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              Bruxelles, Belgique
            </span>
            <a 
              href="https://github.com/Lyde96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4 shrink-0" />
              GitHub /Lyde96
            </a>
            <a 
              href="https://www.linkedin.com/in/lyd%C3%A9ric-yabada-06357a351/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors sm:col-span-2"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              LinkedIn /Lydéric Yabada
            </a>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-border">
        <h2 className="text-sm font-bold text-foreground mb-2">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          AI Engineer with 4+ years of experience in designing, deploying, and optimizing AI/ML solutions in production environments. 
          Expert in prompt engineering, MLOps, and industrialization of AI systems using Kubernetes and CI/CD pipelines. 
          Specialized in developing applications with LLMs (Gemma, GPT), generative AI APIs, and deploying scalable solutions on Azure Cloud. 
          Proven track record in transforming complex business requirements into production-ready AI solutions with measurable business impact.
        </p>
      </div>
    </Card>
  );
};
