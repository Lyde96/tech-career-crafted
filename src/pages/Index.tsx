import { CVSidebar } from "@/components/CVSidebar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import europassLogo from "@/assets/europass-logo.png";

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
          {/* Europass Logo */}
          <div className="flex justify-end">
            <img src={europassLogo} alt="Europass" className="h-12" />
          </div>
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2 mb-4">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              AI & Web Developer with a background in education and a passion for human-centred technology. Trained intensively in full-stack development and AI tools, combining technical expertise with communication skills to build accessible, ethical and innovative digital solutions.
            </p>
          </section>

          {/* Experience Section */}
          <ExperienceSection />

          {/* Education Section */}
          <EducationSection />

          {/* Europass Logo - Bottom */}
          <div className="flex justify-end mt-8">
            <img src={europassLogo} alt="Europass" className="h-10" />
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-500 text-xs border-t border-gray-200 pt-6 mt-8">
            <p>CV • Lydéric Yabada • {new Date().toLocaleDateString('en-US')}</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;