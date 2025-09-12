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
            Candidature pour le poste d'IT Manager Sales Solutions - STIB
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre la STIB en tant qu'IT Manager Sales Solutions représente pour moi un défi professionnel particulièrement stimulant. En tant que Data Engineer et développeur full stack expérimenté, passionné par l'innovation technologique et la transformation digitale, je suis convaincu que mon profil technique et managérial correspond parfaitement aux exigences stratégiques de ce poste.
          </p>

          <p>
            <strong>Une expertise en architecture IT et gestion de projets</strong><br />
            Mon expérience en développement full stack et en architecture de données me positionne idéalement pour définir les orientations stratégiques des solutions de vente STIB. Ma maîtrise des technologies web modernes, couplée à ma connaissance approfondie des architectures distribuées et des API REST, constitue une base solide pour piloter l'évolution digitale de la billettique. Mon expertise en gestion de projets complexes et en coordination d'équipes techniques s'avère directement transférable pour orchestrer les initiatives transversales du département Sales Solutions.
          </p>

          <p>
            <strong>Leadership technique et vision stratégique</strong><br />
            Mes compétences en encadrement technique, développées à travers la formation de collègues et la coordination de projets multi-équipes, me préparent naturellement à gérer une équipe d'environ 20 collaborateurs. Mon expérience en définition de roadmaps techniques et en analyse de faisabilité me permettra de traduire efficacement les besoins business en solutions informatiques robustes. Ma capacité à communiquer avec différents stakeholders et à aligner les objectifs techniques avec les enjeux métier sera précieuse pour représenter le département auprès des comités internes et externes.
          </p>

          <p>
            <strong>Maîtrise des méthodologies Agile et du service management</strong><br />
            Mon expérience avec les processus de développement Agile et ma connaissance des outils comme Azure DevOps me permettront d'optimiser les processus de delivery et de maintenir les engagements de service vis-à-vis des clients internes et externes. Ma rigueur en matière de documentation technique et de gestion des connaissances garantira une transmission efficace de l'expertise billettique aux équipes et une continuité de service optimale.
          </p>

          <p>
            <strong>Passion pour la mobilité urbaine et l'innovation</strong><br />
            Contribuer à faire bouger Bruxelles en tant qu'acteur clé de la transformation digitale du transport public me motive profondément. L'opportunité de participer à la modernisation des systèmes de billettique et d'accompagner l'évolution technologique d'une entreprise aussi emblématique que la STIB représente un défi professionnel exceptionnel. Je suis enthousiaste à l'idée de mettre mon expertise au service de l'amélioration de l'expérience client et de la performance opérationnelle.
          </p>

          <p>
            <strong>Vision collaborative et orientée résultats</strong><br />
            Ma capacité d'écoute active, mon esprit d'analyse et ma facilité à mobiliser les équipes autour d'objectifs communs me permettront de créer une dynamique positive au sein du département. Mon orientation client naturelle et ma capacité à prendre des décisions éclairées contribueront à l'excellence opérationnelle des solutions de vente STIB et à la satisfaction des utilisateurs finaux.
          </p>

          <p>
            Convaincu que mon profil technique et managérial, associé à ma passion pour l'innovation et la mobilité urbaine, peut apporter une valeur ajoutée significative à vos équipes Sales Solutions, je serais ravi d'échanger plus en détail sur ma vision du poste et mes propositions d'amélioration lors d'un entretien.
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
            IT Management
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Architecture Solutions
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Leadership d'Équipe
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Stratégie Digitale
          </Badge>
        </div>
      </div>
    </Card>
  );
};