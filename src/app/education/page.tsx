import React from 'react';
import { ImageIcon } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden bg-muted"
        style={{
          // TODO: Ajouter l'URL de l'image de fond ici (ex: backgroundImage: "url('...')")
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/v1787094746/R%C3%A9union_femmes_1.jpg')"
        }}
      >
        {/* Effet Glassmorphism (flou + translucidité + bordure blanche subtile + ombre interne) */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-md z-0"></div>

        {/* Dégradé fondu vers la couleur de fond (pour effacer la bordure dure en bas) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6 relative z-20">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              L'éducation
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              Un enjeu fondamental pour l'avenir.
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
              L’éducation est un droit fondamental inscrit dans la Déclaration Universelle Des Droits de l’Homme et dans la Convention Internationale des Droits de l’Enfant.
              Une éducation de qualité aura pour effet de réduire la pauvreté et les inégalités, d’améliorer les conditions de vie par une meilleure hygiène sanitaire et un respect de l’environnement.
            </p>
          </div>

          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden border shadow-sm order-1 md:order-1 relative">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094761/salle_de_classe_coll%C3%A8ge_03.03.2022.jpg"
                alt="Salle de classe d'un collège"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
            </div>
            <div className="space-y-6 order-2 md:order-2 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                1. Les raisons du manque d'accès
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">La démographie :</strong> l’Afrique a la plus jeune population au monde avec 70 % de la population sous la barre des 30 ans.
                </p>
                <p>
                  <strong className="text-foreground">La taille des classes :</strong> Dans la moitié des pays pour lesquels des données sont disponibles en Afrique subsaharienne, les classes au primaire dépassent 50 élèves.
                </p>
                <p>
                  <strong className="text-foreground">L’accès à l’eau, à l’électricité, et aux manuels scolaires :</strong> Seules 22% des écoles ont accès à l’électricité et moins de la moitié à l’eau potable. En Afrique subsaharienne, 31% des écoles primaires n’ont pas de toilettes. La pénurie de manuels est réelle.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="space-y-6 order-2 md:order-1 flex flex-col justify-center py-2 md:py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                2. L'enseignement en Afrique de l'Ouest
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Ces difficultés ne sont pas insurmontables. La question de la qualité de l’enseignement primaire et secondaire en Afrique de l’Ouest est un défi majeur pour l’avenir.
                </p>
                <p>
                  La Pangée Internationale souhaite mobiliser tous les acteurs et les citoyens pour porter des projets globaux de rénovation d’écoles pour accueillir les élèves dans les meilleures conditions : construction de bâtiments, de latrines, accès à l’eau et l’électricité, fourniture de mobilier et de moyens pédagogiques.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden border shadow-sm order-1 md:order-2 relative">
              <img
                src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094754/Visite_%C3%A9cole_primaire_Dienga_1.jpg"
                alt="Visite d'une école primaire"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
