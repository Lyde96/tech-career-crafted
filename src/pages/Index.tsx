import { CVHeader } from "@/components/CVHeader";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        {/* Main title */}
        <h1 className="text-6xl font-bold text-center bg-tech-gradient bg-clip-text text-transparent">
          Lydéric YABADA
        </h1>
        
        {/* Header with profile */}
        <CVHeader />
        
        {/* Main content in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Experience and Projects */}
          <div className="lg:col-span-2 space-y-12">
            <ExperienceSection />
            <ProjectsSection />
          </div>
          
          {/* Right column - Skills and Education */}
          <div className="space-y-12">
            <SkillsSection />
            <EducationSection />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm border-t border-border/50 pt-8">
          <p>CV généré avec passion • Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;