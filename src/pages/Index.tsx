import { CVHeader } from "@/components/CVHeader";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { AchievementsSection } from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        
        {/* Header with profile */}
        <CVHeader />
        
        {/* Main content in responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Left column - Achievements, Experience and Projects */}
          <div className="md:col-span-1 xl:col-span-2 space-y-12">
            <AchievementsSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
          
          {/* Right column - Skills and Education */}
          <div className="md:col-span-1 xl:col-span-1 space-y-12">
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