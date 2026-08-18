import { Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">La Pangée Internationale</span>
            </Link>
            <p className="text-muted-foreground text-sm italic">
              "Le développement participatif et alternatif de l'Afrique par ses habitants et ses communautés."
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+221 77 810 54 09</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:lapangee2019@gmail.com" className="hover:text-primary transition-colors">
                  lapangee2019@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/association" className="hover:text-primary transition-colors">L'association</Link></li>
              <li><Link href="/actualites" className="hover:text-primary transition-colors">Actualités</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} La Pangée Internationale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
