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
            Candidature pour le poste de Risk Engineer IT - STIB
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre la STIB en tant que Risk Engineer IT représente pour moi un défi professionnel particulièrement stimulant. En tant que Data Engineer et développeur full stack expérimenté, habitué à l'analyse de risques techniques et à la gestion proactive des enjeux opérationnels, je suis convaincu que mon profil analytique et méthodologique correspond parfaitement aux exigences de ce poste stratégique.
          </p>

          <p>
            <strong>Expertise en analyse de risques IT et gestion de projets</strong><br />
            Mon expérience en développement de solutions complexes et en architecture de données m'a naturellement amené à identifier, quantifier et mitiger les risques techniques tout au long du cycle de vie des projets. Ma maîtrise des méthodologies de gestion de projets, couplée à ma compréhension approfondie des systèmes d'information, me positionne idéalement pour développer et améliorer les processus de Risk Management au sein d'Information Systems. Mon expertise en documentation technique et en analyse de faisabilité constitue une base solide pour l'évaluation des risques opérationnels et projets.
          </p>

          <p>
            <strong>Capacités d'accompagnement et de formation</strong><br />
            Mes compétences en coaching technique, développées à travers la formation de collègues et l'accompagnement d'équipes dans l'adoption de nouvelles méthodologies, me préparent naturellement à jouer le rôle d'ambassadeur de l'Enterprise Risk Management. Mon expérience en vulgarisation de concepts complexes et ma capacité à sensibiliser les équipes aux enjeux techniques me permettront de promouvoir efficacement les méthodes et processus de gestion des risques. Ma facilité à animer des groupes de travail et à créer une dynamique collaborative sera précieuse pour faire adopter les bonnes pratiques.
          </p>

          <p>
            <strong>Vision analytique et approche méthodologique</strong><br />
            Mon esprit d'analyse, développé dans l'optimisation de performances et la résolution d'incidents complexes, me permet d'identifier rapidement les risques transversaux et émergents. Ma rigueur en matière de processus et ma capacité à structurer des approches méthodologiques garantiront une mise en œuvre cohérente du système de Risk Management. Mon expérience avec les outils de gestion de projets et ma connaissance d'environnements comme JIRA faciliteront l'implémentation et le suivi des plans d'actions de mitigation.
          </p>

          <p>
            <strong>Leadership collaboratif et orientation résultats</strong><br />
            Ma capacité d'écoute active, mon assertivité naturelle et ma facilité à mobiliser les équipes autour d'objectifs communs me permettront de créer une culture proactive de gestion des risques. Mon orientation client et ma capacité à communiquer efficacement avec différents stakeholders seront essentielles pour assurer le reporting mensuel et représenter les enjeux de Risk Management auprès des responsables. Ma capacité à prendre des décisions éclairées et à challenger constructivement les équipes contribuera à l'excellence opérationnelle d'Information Systems.
          </p>

          <p>
            <strong>Passion pour l'innovation et la continuité de service</strong><br />
            Contribuer à faire bouger Bruxelles en garantissant la fiabilité et la sécurité des systèmes d'information de la STIB me motive profondément. L'opportunité de participer à la maturation des équipes sur les enjeux de gestion des risques et d'accompagner l'évolution méthodologique d'une entreprise aussi stratégique représente un défi professionnel exceptionnel. Je suis enthousiaste à l'idée de mettre mon expertise analytique au service de la performance et de la continuité des services de transport public.
          </p>

          <p>
            Convaincu que mon profil technique et analytique, associé à ma passion pour la méthodologie et l'accompagnement d'équipes, peut apporter une valeur ajoutée significative à votre équipe Process & Governance, je serais ravi d'échanger plus en détail sur ma vision du Risk Management IT et mes propositions d'amélioration lors d'un entretien.
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
            Risk Management
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Enterprise Risk Management
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Leadership Collaboratif
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Analyse de Risques IT
          </Badge>
        </div>
      </div>
    </Card>
  );
};