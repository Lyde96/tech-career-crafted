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
            Candidature pour le poste de Manager Service Delivery Digital Workplace - STIB
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre la STIB en tant que Manager Service Delivery Digital Workplace représente pour moi un défi professionnel exceptionnellement motivant. En tant que Data Engineer et développeur full stack expérimenté, doté d'une solide expérience en gestion d'équipes techniques et en définition de stratégies digitales, je suis convaincu que mon profil de leader technique et ma vision stratégique correspondent parfaitement aux exigences de ce poste managérial.
          </p>

          <p>
            <strong>Leadership et gestion d'équipes multidisciplinaires</strong><br />
            Mon expérience en encadrement d'équipes techniques et ma capacité à développer les compétences individuelles me positionnent idéalement pour manager une équipe de 20 personnes. Ma maîtrise du coaching technique, de l'évaluation des performances et de la motivation d'équipes me permettra d'assurer un accompagnement personnalisé de chaque collaborateur. Mon approche collaborative du leadership, couplée à ma capacité d'écoute active et d'empathie, garantira un environnement de travail épanouissant et performant pour l'ensemble de l'équipe Service Delivery.
          </p>

          <p>
            <strong>Expertise en stratégie Digital Workplace et gouvernance IT</strong><br />
            Ma compréhension approfondie des écosystèmes digitaux et ma maîtrise des solutions collaboratives (SharePoint, M365) me permettront de définir et mettre en œuvre une stratégie Digital Workplace innovante et mesurable. Mon expérience en architecture de systèmes d'information et ma connaissance des frameworks ITIL/Service Management constituent des atouts majeurs pour superviser les niveaux de service et établir une gouvernance rigoureuse des solutions low-code et collaboratives. Ma capacité à traduire une vision stratégique en plans d'actions concrets facilitera l'adoption des meilleures pratiques.
          </p>

          <p>
            <strong>Gestion budgétaire et optimisation des ressources</strong><br />
            Mon esprit analytique et ma rigueur dans la gestion de projets complexes me préparent naturellement à piloter les ressources financières et optimiser les coûts de licences. Ma capacité à négocier et à maintenir des relations positives avec les fournisseurs, associée à ma vision d'ensemble des enjeux techniques, me permettra de gérer efficacement les contrats existants et les marchés publics futurs. Mon approche méthodologique garantira une gestion rigoureuse du budget tout en optimisant la qualité de service.
          </p>

          <p>
            <strong>Vision stratégique et capacité de transformation</strong><br />
            Ma facilité à impulser le changement et à lancer des initiatives innovantes me positionne parfaitement pour accompagner la transformation digitale du Service Delivery. Mon assertivité naturelle et ma capacité à challenger constructivement les équipes permettront d'identifier les opportunités d'amélioration et de mettre en place les évolutions nécessaires. Ma vision analytique et synthétique facilitera l'élaboration du plan d'assurance qualité et la gestion proactive des risques d'obsolescence et budgétaires.
          </p>

          <p>
            <strong>Passion pour l'excellence opérationnelle et la continuité de service</strong><br />
            Contribuer à faire bouger Bruxelles en garantissant la continuité et la disponibilité des services informatiques de la STIB me motive profondément. L'opportunité de superviser l'ensemble des solutions destinées aux utilisateurs finaux et d'optimiser leur expérience digitale représente un défi professionnel exceptionnel. Je suis enthousiaste à l'idée de mettre mon expertise technique et managériale au service de l'excellence opérationnelle du Service Delivery et de la transformation digitale de l'entreprise.
          </p>

          <p>
            Convaincu que mon profil de leader technique, associé à ma vision stratégique et ma passion pour l'innovation, peut apporter une valeur ajoutée significative à votre département Service Delivery, je serais ravi d'échanger plus en détail sur ma vision de la Digital Workplace et mes propositions de développement lors d'un entretien.
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
            Digital Workplace
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Service Delivery
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Leadership & Management
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            ITIL & Gouvernance IT
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            M365 & SharePoint
          </Badge>
        </div>
      </div>
    </Card>
  );
};