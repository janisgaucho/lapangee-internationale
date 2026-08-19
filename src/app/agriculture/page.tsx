import React from 'react';
import { ImageIcon } from 'lucide-react';

export default function AgriculturePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden bg-muted"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/v1787094737/Cl%C3%B4ture_%C3%A9pineux_17.jpg')",
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
              L'agriculture
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              Une agriculture durable pour le monde de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-20 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl space-y-16">

          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                1. Un levier de développement
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  L’agriculture est un moteur essentiel pour le Sénégal. Ce secteur doit relever de nombreux défis face à l’accroissement de la population et aux changements climatiques à venir.
                </p>
                <p>
                  La situation de l’insécurité alimentaire devient de plus en plus critique imputable à une productivité agricole instable et une dépendance au marché extérieur pour les produits céréaliers.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden border shadow-sm order-1 md:order-2 relative">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094762/terrain_GIE_03.03.2022.jpg"
                alt="Terrain agricole et développement"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden border shadow-sm order-1 md:order-1 relative">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094749/rizi%C3%A8re.jpg"
                alt="Rizière et autosuffisance alimentaire"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                2. Un défi à relever
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  L’atteinte de l’autosuffisance alimentaire passe par une augmentation de la productivité agricole, la prise en compte des besoins des communautés et la diversification des sources de revenus pour répondre aux besoins essentiels des populations.
                </p>
                <p>
                  Une stratégie efficace repose sur l’exploitation commune et partagée des ressources et des outils, une gestion durable des terres agricoles.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
