import React from 'react';
import type { Metadata } from 'next';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos de nous | La Pangée Internationale',
  description: 'L’équipe, nos valeurs, et notre mode d’action.',
};

export default function AProposPage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/v1787094767/visite_village.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Effet Glassmorphism (flou + translucidité + bordure blanche subtile + ombre interne) */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-0"></div>

        {/* Dégradé fondu vers la couleur de fond (pour effacer la bordure dure en bas) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-20">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              À propos de nous
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              L’équipe, nos valeurs, et notre mode d’action.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl space-y-12 text-muted-foreground leading-relaxed text-lg text-justify">

          <div className="relative bg-primary/5 border-l-4 border-primary p-6 md:p-10 rounded-r-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              L’association La Pangée Internationale, née en mars 2019, est une association d’aide au développement durable.
              <br /><br />
              Nous ne sommes pas une association humanitaire, notre objectif est d’amener les populations vers l’autonomie, par la création de coopératives agricoles et artisanales.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 pt-4">
            <p>
              Il s’agit d’un programme très ambitieux de moyen et long terme et nous n’avons pas cherché à agir en France. Dès le départ, notre action s’est orientée vers les populations les plus démunies d’Afrique, en particulier au Sénégal, le premier pays que nous ayons visité.
            </p>

            <p>
              Nous y expliquons notre projet de développement participatif de coopératives, en sensibilisant les populations pour qu’elles s’approprient pleinement le projet au développement duquel nous apportons notre aide. <strong className="font-semibold text-foreground/90">Agir pour être aidées</strong>, c’est ce que nous demandons aux communautés que nous approchons.
            </p>

            <p>
              Dès lors que les premières coopératives ont été mises en place auprès des populations locales, que notre projet commence à être connu et se développe au Sénégal, nous souhaitons promouvoir La Pangée en France, pays où elle a été créée ainsi qu’en Europe.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 bg-muted/20 border-t border-border/40 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Notre équipe</h2>
            <p className="mt-4 text-lg text-muted-foreground">L'organisation de La Pangée Internationale.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {/* Michel Botella */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-4 border-background group-hover:border-primary/20 transition-all duration-300 shadow-md group-hover:shadow-lg ring-1 ring-border/50">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787007810/image00191-qz2uspwcw40nd3dlj01ay5wyk7x3it8h4h6cfqpsps.jpg"
                  alt="Michel Botella"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">Michel Botella</h3>
              <p className="text-primary font-medium mt-1">Président</p>
            </div>

            {/* Thérèse Wieviorka */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-4 border-background group-hover:border-primary/10 transition-all duration-300 shadow-md group-hover:shadow-lg ring-1 ring-border/50">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787007787/Photo-Therese-pour-le-site-qrtbe6my7st94dr1y1dsy5s44nofsv85vajv09zfs0.jpg"
                  alt="Thérèse Wieviorka"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">Thérèse Wieviorka</h3>
              <p className="text-muted-foreground font-medium mt-1">Secrétaire générale</p>
            </div>

            {/* Marine Benzerrouk */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-4 border-background group-hover:border-primary/10 transition-all duration-300 shadow-md group-hover:shadow-lg ring-1 ring-border/50">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787007833/Photo-Marine-BENZERROUK-secretaire-generale-adjointe-departement-education-qrtbcwkuwx27bhlyezh31zej0rzgbp5bcyl2hpvq8w.jpg"
                  alt="Marine Benzerrouk"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">Marine Benzerrouk</h3>
              <p className="text-muted-foreground font-medium mt-1">Secrétaire générale adjointe</p>
            </div>

            {/* Laure Garcia */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-4 border-background group-hover:border-primary/10 transition-all duration-300 shadow-md group-hover:shadow-lg ring-1 ring-border/50">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787007857/WhatsApp-Image-2024-12-02-a-09.47.32_244b8538-qz2v1a7f5rqp56xripaxo045elphnj8fmv5lui0o0w.jpg"
                  alt="Laure Garcia"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">Laure Garcia</h3>
              <p className="text-muted-foreground font-medium mt-1">Secrétaire adjointe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
