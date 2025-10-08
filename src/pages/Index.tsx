import { CVSidebar } from "@/components/CVSidebar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left sidebar - Blue background with personal info */}
      <aside className="w-80 shrink-0">
        <CVSidebar />
      </aside>

      {/* Right content - White background with experiences */}
      <main className="flex-1 bg-white text-foreground">
        <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2 mb-4">
              PROFIL PROFESSIONNEL
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Data Engineer et développeur web passionné par la transformation des données en solutions business concrètes. 
              Expert en conception de pipelines ETL, analyse de données et développement d'applications web performantes. 
              Spécialisé dans les écosystèmes Azure/Databricks et le développement full stack (React, TypeScript, Python). 
              Orienté résultats avec un track record prouvé d'amélioration des processus métier et de croissance business.
            </p>
          </section>

          {/* Experience Section */}
          <ExperienceSection />

          {/* Education Section */}
          <EducationSection />

          {/* Footer */}
          <footer className="text-center text-gray-500 text-xs border-t border-gray-200 pt-6 mt-8">
            <p>CV • Lydéric Yabada • {new Date().toLocaleDateString('fr-FR')}</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;