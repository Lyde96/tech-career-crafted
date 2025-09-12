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
            Candidature pour le poste de Chargé de projet en pédagogie des TIC - FOBAGRA
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Madame, Monsieur,</p>
          </div>

          <p>
            L'annonce pour le poste de Chargé de projet en pédagogie des TIC au sein de FOBAGRA – Auberges numériques a retenu toute mon attention. En tant que Data Engineer et développeur web passionné par l'innovation technologique et sensible aux enjeux sociétaux, je suis convaincu que mon profil technique associé à ma volonté de démocratiser l'accès au numérique correspond parfaitement à vos attentes.
          </p>

          <p>
            <strong>Une expertise technique au service de l'inclusion numérique</strong><br />
            Mon parcours professionnel m'a permis de développer une solide maîtrise des nouvelles technologies. Spécialisé en Data Engineering avec une expertise en Python, SQL, ETL, Power BI et Databricks, ainsi qu'en développement web (React, TypeScript), je possède les compétences techniques nécessaires pour concevoir et développer les simulateurs numériques et environnements d'exercice évoqués dans votre offre. Ma connaissance approfondie de l'écosystème Azure et Apache Spark me permettra d'apporter une vision moderne et scalable aux outils pédagogiques.
          </p>

          <p>
            <strong>Un potentiel pédagogique à développer</strong><br />
            Bien que mon parcours soit principalement technique, j'ai régulièrement été amené à former des collègues et à vulgariser des concepts complexes. Cette expérience m'a sensibilisé à l'importance d'adapter le discours et les méthodes selon l'audience. Mon approche analytique et méthodologique, acquise dans le domaine de la data, constitue un atout pour développer des approches pédagogiques innovantes et structurées.
          </p>

          <p>
            <strong>Une sensibilité naturelle aux enjeux sociaux</strong><br />
            L'inclusion numérique est pour moi un enjeu sociétal majeur. Ayant évolué dans des environnements technologiques avancés, je mesure l'importance de réduire le fossé numérique et de rendre la technologie accessible à tous. Mon expérience en conception d'interfaces utilisateur et en ergonomie me sensibilise naturellement aux besoins des publics en difficulté avec le numérique.
          </p>

          <p>
            <strong>Des compétences transversales valorisables</strong><br />
            Mes capacités rédactionnelles, développées à travers la documentation technique et les cahiers de spécifications, me permettront de contribuer efficacement à la rédaction des cahiers pédagogiques. Mon goût pour la recherche et l'expérimentation, cultivé dans mes projets de data science, s'alignent parfaitement avec votre besoin d'innovation pédagogique. Enfin, mon expérience du travail en équipe pluridisciplinaire facilitera ma collaboration avec les médiateurs numériques et développeurs.
          </p>

          <p>
            <strong>Une motivation sincère pour ce défi</strong><br />
            Ce poste représente une opportunité exceptionnelle de mettre mes compétences techniques au service d'une cause sociale importante. L'idée de contribuer à l'émancipation numérique des publics fragiles et de participer à la conception d'outils pédagogiques innovants m'enthousiasme particulièrement. Je suis prêt à enrichir mon profil technique d'une dimension pédagogique forte.
          </p>

          <p>
            Convaincu que mon profil technique, associé à ma motivation pour l'inclusion numérique, peut apporter une valeur ajoutée à vos équipes, je serais ravi de vous exposer plus en détail ma vision du poste lors d'un entretien.
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
            Expertise Technique
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Innovation Pédagogique
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Inclusion Numérique
          </Badge>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Développement d'Outils
          </Badge>
        </div>
      </div>
    </Card>
  );
};