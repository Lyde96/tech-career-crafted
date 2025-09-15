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
            Candidature pour un poste Tech/IT - Service d'aide à la recherche d'emploi par mentorat
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre votre service tech/IT dans le domaine de l'aide à la recherche d'emploi par mentorat représente pour moi un défi professionnel particulièrement motivant. En tant que Data Engineer et développeur full-stack expérimenté, passionné par l'innovation technologique et l'accompagnement professionnel, je suis convaincu que mes compétences techniques et ma vision humaine correspondent parfaitement aux exigences de ce poste.
          </p>

          <p>
            <strong>Expertise technique au service de l'insertion professionnelle</strong><br />
            Mon expérience en ingénierie des données et développement full-stack me positionne idéalement pour concevoir et déployer des solutions technologiques robustes et scalables dédiées à l'accompagnement professionnel. Ma maîtrise des architectures cloud, des pipelines de données et des frameworks de développement me permettra de créer des outils innovants facilitant la mise en relation mentors-candidats et l'optimisation des parcours d'insertion.
          </p>

          <p>
            <strong>Vision stratégique de la tech for good</strong><br />
            Ma compréhension approfondie des écosystèmes technologiques et ma capacité à concevoir des architectures évolutives constituent des atouts majeurs pour développer des stratégies tech impactantes dans le secteur de l'emploi. Mon expérience me permet de transformer les défis de l'insertion professionnelle en solutions technologiques concrètes, tout en gardant l'humain au centre des préoccupations.
          </p>

          <p>
            <strong>Collaboration et excellence dans l'accompagnement</strong><br />
            Mon approche collaborative et ma facilité à évoluer en équipes pluridisciplinaires me préparent naturellement à travailler dans votre environnement où se mélangent expertise technique et accompagnement humain. Ma capacité à établir des relations de confiance et ma compréhension des enjeux professionnels me permettront d'apporter une valeur ajoutée significative à vos projets d'accompagnement technologique.
          </p>

          <p>
            <strong>Innovation et impact social</strong><br />
            Ma passion pour les technologies émergentes, notamment l'IA et les dernières avancées en machine learning, m'anime profondément. L'opportunité de mettre ces technologies au service de l'insertion professionnelle et du mentorat représente un défi exceptionnel. Je suis enthousiaste à l'idée de contribuer à l'innovation de votre plateforme en partageant mes perspectives et en participant activement aux initiatives de R&D.
          </p>

          <p>
            <strong>Engagement pour l'impact et la transformation sociale</strong><br />
            Rejoindre votre équipe représente pour moi l'opportunité unique de participer à des projets à fort impact social, ayant une réelle influence sur l'insertion professionnelle et l'accompagnement des demandeurs d'emploi. Ma motivation à "révolutionner l'accès à l'emploi par la technologie" s'aligne parfaitement avec votre mission. Je suis convaincu que mon expertise technique, couplée à ma vision sociale et ma passion pour l'innovation, contribuera efficacement aux ambitions de croissance et d'excellence de votre service.
          </p>

          <p>
            Convaincu que mon profil technique et ma passion pour l'innovation sociale peuvent apporter une valeur ajoutée significative à vos projets de transformation digitale, je serais ravi de discuter plus en détail de ma vision de la tech for good et de mes propositions d'innovation lors d'un entretien.
          </p>

          <p>
            Dans l'attente de vous rencontrer, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
          </p>

          <div className="mt-8">
            <p className="font-medium">Lydéric Yabada</p>
            <p className="text-sm text-muted-foreground">Data Engineer & Développeur Web</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Tech for Good
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Insertion Professionnelle
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Innovation Sociale
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Mentorat Digital
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Développement Full-Stack
          </Badge>
        </div>
      </div>
    </Card>
  );
};