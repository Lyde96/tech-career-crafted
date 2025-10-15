import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "AWS Certified Machine Learning - Specialty",
  "Microsoft Azure AI Engineer Associate",
  "Google Data Analytics Professional Certificate",
  "Google Data Engineer Professional Certificate",
  "AWS Cloud Practitioner",
  "Microsoft Azure Fundamentals",
];

export const EducationSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-primary pb-2">
        EDUCATION & CERTIFICATIONS
      </h2>

      <div className="space-y-4">
        {/* Education */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-sm text-gray-900">Education</h3>
          </div>
          
          <div className="space-y-2 pl-6">
            <div>
              <p className="text-sm font-semibold text-gray-900">Management Computing - Programmer Analyst</p>
              <p className="text-xs text-gray-600">EPFC</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Full Stack Web Developer</p>
              <p className="text-xs text-gray-600">Molengeek, Brussels</p>
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

      {/* Languages */}
      <div className="space-y-3 mt-6">
        <h3 className="font-bold text-sm text-gray-900">LANGUAGES</h3>
        <div className="space-y-2 text-xs pl-6">
          <div>
            <p className="font-semibold text-gray-900">MOTHER TONGUE(S):</p>
            <p className="text-gray-700">French</p>
          </div>
          <div className="mt-3">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-1"></th>
                  <th className="text-center py-1 font-semibold text-gray-900">Understanding</th>
                  <th className="text-center py-1 font-semibold text-gray-900">Speaking</th>
                  <th className="text-center py-1 font-semibold text-gray-900">Writing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-1 font-medium text-gray-900">English</td>
                  <td className="text-center py-1 text-gray-700">C1</td>
                  <td className="text-center py-1 text-gray-700">C1</td>
                  <td className="text-center py-1 text-gray-700">C1</td>
                </tr>
                <tr>
                  <td className="py-1 font-medium text-gray-900">Dutch</td>
                  <td className="text-center py-1 text-gray-700">A2</td>
                  <td className="text-center py-1 text-gray-700">A1</td>
                  <td className="text-center py-1 text-gray-700">A1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
