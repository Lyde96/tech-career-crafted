import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

const education: Education[] = [
  {
    degree: "Web Developer Full Stack",
    school: "Molengeek",
    location: "Bruxelles, Belgique",
    period: "Septembre 2020 - Mai 2021",
  },
];

const certifications = [
  { title: "Google Data Analytics Professional Certificate", year: "2023" },
  { title: "Google Data Engineer Professional Certificate", year: "2023" },
  { title: "AWS Cloud Practitioner Certification", year: "2023" },
  { title: "Système d'automatisation avec l'IA", org: "OrrAcademy", year: "2025" },
  { title: "Advanced React & Redux", org: "Udemy", year: "2023" },
  { title: "Excel Avancé", org: "Microsoft", year: "2023" },
];

const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "C1 - Courant" },
  { name: "Néerlandais", level: "B2 - Intermédiaire" },
  { name: "Espagnol", level: "B2 - Intermédiaire" },
];

export const EducationSection = () => {
  return (
    <Card className="p-5 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
          FORMATION
        </h2>

        {/* Education */}
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
              <p className="text-sm font-semibold text-primary">{edu.school}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          CERTIFICATIONS
        </h3>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div key={index} className="flex justify-between items-start text-sm">
              <span className="text-muted-foreground">
                {cert.title}
                {cert.org && <span className="text-xs"> • {cert.org}</span>}
              </span>
              <span className="text-xs text-muted-foreground shrink-0 ml-2">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-foreground">LANGUES</h3>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
