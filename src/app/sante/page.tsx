import React from 'react';
import { ImageIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SantePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden bg-muted"
        style={{
          // TODO: Ajouter l'URL de l'image de fond ici (ex: backgroundImage: "url('...')")
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/v1787094742/Poste_de_sant%C3%A9_Mogo_qui_dessert_Dienga_2.jpg')"
        }}
      >
        {/* Effet Glassmorphism (flou + translucidité + bordure blanche subtile + ombre interne) */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-0"></div>

        {/* Dégradé fondu vers la couleur de fond (pour effacer la bordure dure en bas) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-20">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              La santé
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              L'assurance d'un avenir meilleur.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-20 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl space-y-16">

          {/* Intro */}
          <div className="relative bg-primary/5 border-l-4 border-primary p-6 md:p-10 rounded-r-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
              Des progrès ont été réalisés dans le secteur de la santé mais il reste beaucoup à faire. L’accès aux soins n’est pas le même pour tous.
              Les structures sanitaires manquent de moyens pour assurer la prise en charge des populations dans de bonnes conditions. Le Sénégal manque de professionnels de santé, répartis inégalement sur le territoire.
            </p>
          </div>

          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden border shadow-sm order-1 md:order-1 relative">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094745/R%C3%A9union_chef_de_village_2_1.jpg"
                alt="Réunion chef de village sur la sécurité alimentaire"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                1. Sécurité alimentaire
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Le Sénégal est un pays à déficit vivrier qui entre dans la catégorie des pays les moins avancés car les taux d’insécurité alimentaire et nutritionnelle sont très élevés dans certaines régions, notamment dans le nord, le sud, et l’ouest du pays.
                </p>
                <p>
                  Plusieurs études confirment d’ailleurs la précarité de la situation alimentaire ainsi que la dégradation de l’état nutritionnel des enfants, 1/3 des décès d’enfants de moins de 5 ans serait directement ou indirectement lié à une mauvaise nutrition.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                2. La malnutrition chez les nourrissons
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Une mauvaise nutrition pendant les 1000 premiers jours (de la grossesse à 24 mois) d’un enfant peut causer des dommages irréversibles toute la vie. La malnutrition contribue à affaiblir le système immunitaire, rendant les enfants plus sensibles aux maladies infectieuses.
                </p>
                <p>
                  Non prise en charge, la malnutrition entraine une perturbation du développement physique, cognitif et intellectuel de l’enfant. Elle affecte les performances scolaires des enfants, une baisse des défenses immunitaires et une baisse de productivité chez l’adulte.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl bg-muted/40 flex items-center justify-center border shadow-sm order-1 md:order-2 relative overflow-hidden group">
              <img
                src="https://lesoleil.sn/wp-content/uploads/2025/06/Malnutrition-au-Senegal.jpg"
                alt="La malnutrition chez les nourrissons au Sénégal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl bg-white flex items-center justify-center border shadow-sm order-1 md:order-1 relative overflow-hidden p-8 group">
              <img
                src="https://www.manega.org/logos/logo-bamisa.gif"
                alt="Logo BAMiSA"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                3. Notre solution contre la malnutrition au Sénégal
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Face à cette situation alarmante, l’association La Pangée Internationale a décidé d’apporter sa contribution dans la lutte contre ce fléau en lançant un programme de traitement et de prévention de la malnutrition avec son partenaire BAMiSA.
                </p>
                <div className="pt-2">
                  <a href="https://www.bamisagora.org/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="cursor-pointer">
                      Découvrir le projet BAMiSA
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
