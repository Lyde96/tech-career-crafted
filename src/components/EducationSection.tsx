import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Google Data Analytics Professional Certificate",
  "Google Data Engineer Professional Certificate",
  "AWS Cloud Practitioner",
  "Microsoft Azure Fundamentals",
];

export const EducationSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2">
        FORMATION & CERTIFICATIONS
      </h2>

      <div className="space-y-4">
        {/* Education */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-gray-900">Formation</h3>
          </div>
          
          <div className="space-y-2 pl-6">
            <div>
              <p className="text-sm font-semibold text-gray-900">Web Developer Full Stack</p>
              <p className="text-xs text-gray-600">Molengeek, Bruxelles</p>
              <p className="text-xs text-gray-600">2019 - 2020</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-gray-900">Certifications</h3>
          </div>
          
          <ul className="space-y-1.5 pl-6 text-xs text-gray-700">
            {certifications.map((cert, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
