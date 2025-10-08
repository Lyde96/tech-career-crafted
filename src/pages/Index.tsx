import { CVHeader } from "@/components/CVHeader";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        
        {/* Header with profile */}
        <CVHeader />
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Experience (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            <ExperienceSection />
          </div>
          
          {/* Right column - Skills and Education (1/3 width) */}
          <div className="lg:col-span-1 space-y-8">
            <SkillsSection />
            <EducationSection />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-muted-foreground text-xs border-t border-border/50 pt-6 mt-8">
          <p>CV • Lydéric Yabada • {new Date().toLocaleDateString('fr-FR')}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;