import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MotivationLetter = () => {
  return (
    <Card className="p-8 bg-card-gradient border-border/50 backdrop-blur max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">
            Cover Letter
          </h1>
          <p className="text-muted-foreground">
            Application for Data & AI Engineer Position - Accenture
          </p>
        </div>

        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <div>
            <p className="font-medium">Dear Hiring Manager,</p>
          </div>

          <p>
            The opportunity to join Accenture as a Data & AI Engineer represents an exceptionally motivating professional challenge for me. As an experienced Data Engineer and full-stack developer, passionate about artificial intelligence and emerging technologies, I am convinced that my technical expertise and innovative vision perfectly match the requirements of this position within your Data & AI team.
          </p>

          <p>
            <strong>Expertise in developing industrialized AI/ML solutions</strong><br />
            My experience in data engineering and full-stack development positions me ideally to design and deploy robust and scalable artificial intelligence solutions. My mastery of cloud architectures, data pipelines, and machine learning frameworks will enable me to transform business challenges into innovative technological solutions. My software development expertise ensures the creation of high-quality AI solutions, from the discovery phase to complete industrialization.
          </p>

          <p>
            <strong>Strategic vision and technological architecture</strong><br />
            My deep understanding of technological ecosystems and my ability to design scalable architectures constitute major assets for defining ambitious AI/ML implementation strategies. My experience in technology selection and application strategy definition will allow me to contribute effectively to architectural decisions and guide clients toward the best solutions. My ability to simplify complex concepts will facilitate the adoption of emerging technologies by business teams.
          </p>

          <p>
            <strong>Multidisciplinary collaboration and client excellence</strong><br />
            My collaborative approach and ability to work in multidisciplinary teams naturally prepare me to evolve in Accenture's dynamic environment. My ease in establishing trusting relationships with clients and my understanding of business challenges will allow me to bring significant added value to transformation projects. My adaptability and intellectual curiosity will help me navigate effectively between the different business sectors covered by Accenture.
          </p>

          <p>
            <strong>Innovation and cutting-edge technologies</strong><br />
            My passion for emerging technologies, particularly generative AI and the latest advances in machine learning, deeply drives me. The opportunity to work with cutting-edge technologies while contributing to the transformation of leading global organizations represents an exceptional professional challenge. I am enthusiastic about contributing to Accenture's Data & AI community by sharing my insights and actively participating in research and development initiatives.
          </p>

          <p>
            <strong>Commitment to impact and transformation</strong><br />
            Joining Accenture represents for me the unique opportunity to participate in large-scale transformation projects, having a real impact on industry and society. My motivation to "re-imagine the future of the industry" aligns perfectly with Accenture's mission. I am convinced that my technical expertise, coupled with my strategic vision and passion for innovation, will effectively contribute to the growth and excellence ambitions of your Data & AI team.
          </p>

          <p>
            Convinced that my technical profile and passion for artificial intelligence can bring significant added value to your transformation projects, I would be delighted to discuss in more detail my vision of industrial AI and my innovation proposals during an interview.
          </p>

          <p>
            Looking forward to hearing from you, I remain yours sincerely.
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