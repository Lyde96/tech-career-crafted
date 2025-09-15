import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MotivationLetter = () => {
  return (
    <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">
            Lettre de Motivation
          </h1>
          <p className="text-muted-foreground">
            Candidature pour le poste de Data & AI Engineer - Accenture
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre Accenture en tant que Data & AI Engineer représente pour moi un défi professionnel exceptionnellement motivant. En tant que Data Engineer et développeur full stack expérimenté, passionné par l'intelligence artificielle et les technologies émergentes, je suis convaincu que mon expertise technique et ma vision innovante correspondent parfaitement aux exigences de ce poste au sein de votre équipe Data & AI.
          </p>

          <p>
            <strong>Expertise en développement de solutions AI/ML industrialisées</strong><br />
            Mon expérience en ingénierie de données et en développement full stack me positionne idéalement pour concevoir et déployer des solutions d'intelligence artificielle robustes et scalables. Ma maîtrise des architectures cloud, des pipelines de données et des frameworks de machine learning me permettra de transformer les défis business en solutions technologiques innovantes. Mon expertise en développement logiciel garantit la création de solutions AI de haute qualité, de la phase de découverte jusqu'à l'industrialisation complète.
          </p>

          <p>
            <strong>Vision stratégique et architecture technologique</strong><br />
            Ma compréhension approfondie des écosystèmes technologiques et ma capacité à concevoir des architectures scalables constituent des atouts majeurs pour définir des stratégies d'implémentation AI/ML ambitieuses. Mon expérience en sélection de technologies et en définition de stratégies applicatives me permettra de contribuer efficacement aux décisions d'architecture et d'orienter les clients vers les meilleures solutions. Ma capacité à vulgariser des concepts complexes facilitera l'adoption des technologies émergentes par les équipes métier.
          </p>

          <p>
            <strong>Collaboration multidisciplinaire et excellence client</strong><br />
            Mon approche collaborative et ma capacité à travailler en équipes multidisciplinaires me préparent naturellement à évoluer dans l'environnement dynamique d'Accenture. Ma facilité à établir des relations de confiance avec les clients et ma compréhension des enjeux business me permettront d'apporter une valeur ajoutée significative aux projets de transformation. Mon adaptabilité et ma curiosité intellectuelle m'aideront à naviguer efficacement entre les différents secteurs d'activité couverts par Accenture.
          </p>

          <p>
            <strong>Innovation et technologies de pointe</strong><br />
            Ma passion pour les technologies émergentes, particulièrement l'IA générative et les dernières avancées en machine learning, m'anime profondément. L'opportunité de travailler avec des technologies de pointe tout en contribuant à la transformation d'organisations leaders mondiales représente un défi professionnel exceptionnel. Je suis enthousiaste à l'idée de contribuer à la communauté Data & AI d'Accenture en partageant mes insights et en participant activement aux initiatives de recherche et développement.
          </p>

          <p>
            <strong>Engagement pour l'impact et la transformation</strong><br />
            Rejoindre Accenture représente pour moi l'opportunité unique de participer à des projets de transformation à grande échelle, ayant un impact réel sur l'industrie et la société. Ma motivation à "re-imaginer le futur de l'industrie" s'aligne parfaitement avec la mission d'Accenture. Je suis convaincu que mon expertise technique, couplée à ma vision stratégique et ma passion pour l'innovation, contribuera efficacement aux ambitions de croissance et d'excellence de votre équipe Data & AI.
          </p>

          <p>
            Convaincu que mon profil technique et ma passion pour l'intelligence artificielle peuvent apporter une valeur ajoutée significative à vos projets de transformation, je serais ravi d'échanger plus en détail sur ma vision de l'IA industrielle et mes propositions d'innovation lors d'un entretien.
          </p>

          <p>
            Dans l'attente de votre retour, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
          </p>

          <div className="mt-8">
            <p className="font-medium">Lydéric Yabada</p>
            <p className="text-sm text-muted-foreground">Data Engineer & Web Developer</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            AI & Machine Learning
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Data Engineering
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            GenAI & Innovation
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Cloud Architecture
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Software Engineering
          </Badge>
        </div>
      </div>
    </Card>
  );
};