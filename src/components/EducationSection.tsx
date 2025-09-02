import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
  specialization?: string;
  grade?: string;
}

const education: Education[] = [
  {
    degree: "Formation Web Developer Full Stack",
    school: "Molengeek",
    location: "Bruxelles, Belgique",
    period: "Septembre 2020 - Juin 2021",
    specialization: "Développement Full Stack",
    description: "Formation intensive de 6 mois couvrant le développement front-end et back-end. Création de sites web avec HTML5, CSS3, JavaScript, React.js, Laravel 8, et Bootstrap. Apprentissage des bases UX/UI, création de bases de données et débogage."
  },
  {
    degree: "Master en Informatique",
    school: "École Supérieure d'Informatique",
    location: "Paris, France",
    period: "2017 - 2019",
    specialization: "Développement Web & Mobile",
    grade: "Mention Très Bien",
    description: "Spécialisation en architecture logicielle, développement d'applications web modernes et gestion de projets agiles."
  },
  {
    degree: "Licence Informatique",
    school: "Université de Technologie",
    location: "Lyon, France",
    period: "2014 - 2017",
    grade: "Mention Bien",
    description: "Formation solide en programmation, bases de données, réseaux et mathématiques appliquées à l'informatique."
  }
];

interface OnlineCourse {
  title: string;
  platform: string;
  year: string;
  certificate?: boolean;
}

const onlineCourses: OnlineCourse[] = [
  { title: "Advanced React & Redux", platform: "Udemy", year: "2023", certificate: true },
  { title: "AWS Solutions Architect", platform: "A Cloud Guru", year: "2022", certificate: true },
  { title: "Kubernetes for Developers", platform: "Pluralsight", year: "2022", certificate: true },
  { title: "Machine Learning with Python", platform: "Coursera", year: "2021", certificate: true }
];

export const EducationSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <div className="w-2 h-8 bg-tech-gradient rounded-full" />
        Formation & Éducation
      </h2>
      
      {/* Formation académique */}
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="p-6 bg-card-gradient border-border/50">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {edu.degree}
                  </h3>
                  <p className="font-medium text-foreground">{edu.school}</p>
                  {edu.specialization && (
                    <p className="text-sm text-muted-foreground">
                      Spécialisation: {edu.specialization}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.grade && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 mt-1">
                      <Award className="w-3 h-3 mr-1" />
                      {edu.grade}
                    </Badge>
                  )}
                </div>
              </div>
              
              {edu.description && (
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      {/* Formation en ligne */}
      <Card className="p-6 bg-card-gradient border-border/50">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Formations Complémentaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {onlineCourses.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
              <div>
                <p className="font-medium text-sm">{course.title}</p>
                <p className="text-xs text-muted-foreground">{course.platform} • {course.year}</p>
              </div>
              {course.certificate && (
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                  Certifié
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>
      
      {/* Langues */}
      <Card className="p-6 bg-card-gradient border-border/50">
        <h3 className="text-lg font-semibold mb-4">Langues</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Français</span>
            <Badge className="bg-primary/10 text-primary border-primary/20">Natif</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Anglais</span>
            <Badge className="bg-primary/10 text-primary border-primary/20">C1 - Courant</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Espagnol</span>
            <Badge className="bg-primary/10 text-primary border-primary/20">B2 - Intermédiaire</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};