import { MotivationLetter } from "@/components/MotivationLetter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MotivationPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour au CV
          </Link>
          
          <div className="flex gap-2">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Voir le CV
              </Button>
            </Link>
            <Button onClick={handlePrint} size="sm">
              <Download className="w-4 h-4 mr-2" />
              Télécharger PDF
            </Button>
          </div>
        </div>

        {/* Motivation Letter */}
        <MotivationLetter />
        
        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm border-t border-border/50 pt-8 mt-8">
          <p>Lettre de motivation • Lydéric Yabada • {new Date().toLocaleDateString('fr-FR')}</p>
        </footer>
      </div>
    </div>
  );
};

export default MotivationPage;