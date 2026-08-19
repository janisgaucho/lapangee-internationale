import React from 'react';
import type { Metadata } from 'next';
import SenegalMap from '@/components/Map';

export const metadata: Metadata = {
  title: 'Nos coopératives agricoles | La Pangée Internationale',
  description: 'Découvrez les coopératives agricoles avec lesquelles nous collaborons au Sénégal.',
};

export default function CooperativesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-muted/10 pb-20">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden bg-muted"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094744/R%C3%A9union_Bow_8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Effet Glassmorphism sans bordure ni ombre */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-0"></div>

        {/* Dégradé fondu vers la couleur de fond */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-20">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Nos coopératives agricoles
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              Découvrez la carte interactive de toutes les coopératives avec lesquelles nous collaborons pour un développement participatif et solidaire.
            </p>
          </div>
        </div>
      </section>

      {/* Content & Map Section */}
      <section className="w-full py-12 flex justify-center">
        <div className="container px-4 md:px-6 max-w-6xl space-y-16">
          
          <div className="max-w-5xl mx-auto text-justify text-muted-foreground md:text-lg leading-relaxed md:columns-2 gap-x-12">
            <p className="mb-6">
              Bienvenue sur la page dédiée aux coopératives agricoles de La Pangée Internationale, notre engagement en faveur de l’autonomie alimentaire en Afrique. Nous sommes une association d’aide au développement durable passionnée par la création de coopératives agricoles durables, œuvrant actuellement au Sénégal et en Mauritanie.
            </p>
            <p className="mb-6 break-inside-avoid">
              Chez La Pangée Internationale, nous croyons fermement que l’autonomie alimentaire est la clé du développement communautaire. C’est pourquoi nous nous consacrons à l’établissement de coopératives agricoles, offrant aux villages les moyens de cultiver leurs propres ressources alimentaires et de bâtir des communautés résilientes.
            </p>
            <p className="mb-6 break-inside-avoid">
              Sur cette page, vous trouverez une liste complète des coopératives agricoles que nous avons initiées, détaillant leurs emplacements, leurs activités et les progrès réalisés. Explorez nos projets au Sénégal et en Mauritanie, découvrez comment chaque coopérative contribue à l’autonomie des villages locaux et participez à notre mission de création d’un avenir alimentaire durable.
            </p>
            <p className="font-medium text-foreground mb-6 break-inside-avoid">
              Rejoignez-nous dans notre quête pour construire une Pangée internationale où chaque communauté a la possibilité de prospérer grâce à une agriculture éthique et responsable. Ensemble, nous faisons la différence, un village à la fois.
            </p>
          </div>

          <div className="w-full mx-auto aspect-square md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-border/50 bg-background">
            <SenegalMap />
          </div>
        </div>
      </section>
    </div>
  );
}
