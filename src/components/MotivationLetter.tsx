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
            Candidature pour le poste de Développeur LIMS - Institut Scientifique
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'opportunité de rejoindre votre institut scientifique en tant que Développeur LIMS m'enthousiasme particulièrement. En tant que Data Engineer et développeur full stack passionné par l'innovation technologique et sensible aux enjeux de santé publique, je suis convaincu que mon profil technique et ma rigueur scientifique correspondent parfaitement aux exigences de ce poste stratégique.
          </p>

          <p>
            <strong>Une expertise technique parfaitement alignée</strong><br />
            Mon expérience en développement full stack me positionne idéalement pour évoluer dans l'écosystème STARLIMS. Ma solide maîtrise de JavaScript, associée à ma connaissance approfondie de MS SQL Server et des architectures de bases de données, constitue une base excellente pour appréhender rapidement le STARLIMS Scripting Language (SSL) et JavaScript.Net. Mon expertise en intégration de systèmes via API REST et SOAP, développée dans mes projets Data Engineering, s'avère directement transférable pour les interfaces LIMS avec les systèmes internes et externes.
          </p>

          <p>
            <strong>Une approche scientifique et rigoureuse</strong><br />
            Ma formation et mon expérience en Data Engineering m'ont inculqué une rigueur scientifique et une méthodologie de travail essentielles dans un environnement de laboratoire. L'analyse de données complexes, la gestion de flux ETL critiques et la documentation technique précise font partie intégrante de mon quotidien professionnel. Cette approche systématique garantit la fiabilité et la maintenance des développements LIMS.
          </p>

          <p>
            <strong>Une vision architecturale moderne</strong><br />
            Mon expérience avec Azure DevOps et les environnements cloud me permet d'apporter une perspective moderne à l'évolution du LIMS. Ma connaissance des patterns d'architecture logicielle et des bonnes pratiques de développement contribuera à la scalabilité et à la maintenabilité des nouvelles fonctionnalités. Mon expérience en optimisation de performances sur de gros volumes de données s'avère précieuse pour les systèmes LIMS traitant de nombreux échantillons.
          </p>

          <p>
            <strong>Un potentiel de leadership technique</strong><br />
            Mes compétences en encadrement technique, développées à travers la formation de collègues et la documentation de solutions complexes, me préparent naturellement au rôle de référent technique évoqué dans votre offre. Mon goût pour la veille technologique et l'innovation me motivent à proposer des solutions novatrices pour faire évoluer le LIMS vers les meilleures pratiques du secteur.
          </p>

          <p>
            <strong>Une motivation pour la recherche au service de la santé</strong><br />
            Contribuer à un institut scientifique dédié à la santé humaine et animale représente pour moi une opportunité exceptionnelle d'allier expertise technique et impact sociétal. L'idée de participer à l'amélioration des processus laboratoire et de contribuer indirectement aux avancées scientifiques en santé me motive profondément. Je suis enthousiaste à l'idée de mettre mes compétences au service de cette mission d'intérêt général.
          </p>

          <p>
            Convaincu que mon profil technique, associé à ma rigueur scientifique et ma motivation pour la recherche en santé, peut apporter une valeur ajoutée significative à vos équipes LIMS, je serais ravi de vous exposer plus en détail ma vision du poste lors d'un entretien.
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
            Développement LIMS
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Full Stack Expert
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Rigueur Scientifique
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Leadership Technique
          </Badge>
        </div>
      </div>
    </Card>
  );
};