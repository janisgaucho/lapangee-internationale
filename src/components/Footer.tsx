import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex flex-col items-start space-y-3">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787067776/logo-pangee-internationale-fond-transparent.png"
                alt="Logo La Pangée Internationale"
                className="h-28 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://www.facebook.com/associationlapangee" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/associationlapangee/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/lapang%C3%A9e" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/la_pangee" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                <span className="sr-only">X</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+221778105409" className="hover:text-primary transition-colors">+221 77 810 54 09</a>
                  <a href="tel:+33767250009" className="hover:text-primary transition-colors">+33 7 67 25 00 09</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@lapangee-internationale.com" className="hover:text-primary transition-colors">
                  hello@lapangee-internationale.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/histoire" className="hover:text-primary transition-colors">Notre histoire</Link></li>
              <li><Link href="/actualites" className="hover:text-primary transition-colors">Actualités</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-center space-y-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} La Pangée Internationale. Tous droits réservés. Développé par <a href="https://www.janisbotella.fr" className='underline hover:text-primary transition-colors'>Janis BOTELLA</a>.</p>
          <Link href="/mentions-legales" className="hover:text-primary underline transition-colors">
            Mentions Légales & Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
