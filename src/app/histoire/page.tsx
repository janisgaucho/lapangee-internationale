import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notre histoire | La Pangée Internationale',
  description: 'Découvrez l’histoire de la Pangée Internationale, de son origine à son mode de fonctionnement.',
};

export default function HistoirePage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/v1787094765/visite_%C3%A9cole.jpg')",
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
              Notre histoire
            </h1>
            <p className="text-lg text-foreground/90 font-medium md:text-xl leading-relaxed">
              Découvrez l’histoire de la Pangée Internationale, de son origine à son mode de fonctionnement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-16 md:py-24 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Highlighted Paragraph */}
          <div className="relative bg-primary/5 border-l-4 border-[#1B6EA3] p-6 md:p-10 rounded-r-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium text-justify">
              La Pangée Internationale est une association de solidarité internationale née de la rencontre entre des femmes et des hommes d’actions d’Afrique et d’Europe, animés par une passion partagée et une conviction commune : le développement participatif et alternatif de l’Afrique par ses habitants et ses communautés, principalement dans les domaines de l’agriculture, de l’écologie urbaine, de la santé et de l’éducation.
            </p>
          </div>

          {/* Sections d'histoire détaillées */}
          <div className="mt-16 space-y-12 md:space-y-16">

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">La création de la Pangée Internationale</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Créée le 22 mars 2019, La Pangée Internationale est une association régie par la Loi de 1901. Les statuts de l’association La PANGÉE INTERNATIONALE ont été déclarés en Préfecture de Seine Saint-Denis le 22 mars 2019 et modifiés le 15 juillet 2020 en Préfecture des Alpes-Maritimes.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">L'origine de notre nom</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  En 1912, l’astronome et climatologue allemand Alfred Wegener a décrit la Pangée comme un seul continent rassemblant la quasi-totalité des terres émergées. Le choix du nom de l’association traduit notre objectif : se rassembler pour travailler et avancer ensemble.
                </p>
              </div>
              <div className="w-full flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-border/30">
                  <img
                    src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787006635/Gif-La-Pangee_1.gif"
                    alt="Notre histoire en animation"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Les coopératives agricoles</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Par une approche globale par région, nous mobilisons les communautés pour la création de coopératives agricoles dans les zones reculées afin de permettre aux populations d’avoir une autonomie agricole et alimentaire, dans le respect des sociétés et des milieux. Nous intervenons également dans les domaines de la santé/nutrition, de l’éducation, de l’écologie/environnement et du sport/culture.
              </p>
              <div className="pt-8">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-sm group">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://res.cloudinary.com/due8mtlz/image/upload/v1787094771/Cl%C3%B4ture_%C3%A9pineux_10.jpg"
                      alt="Coopératives agricoles sur le terrain"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/50" />
                  </div>
                  <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Explorer nos actions sur le terrain</h3>
                    <p className="text-white/80 mb-8 max-w-xl text-lg leading-relaxed">
                      Découvrez comment nos coopératives agricoles transforment la vie des communautés au Sénégal et en Mauritanie vers une autonomie durable.
                    </p>
                    <Link href="https://www.lapangee-internationale.com/cooperatives-agricoles/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="secondary" className="group rounded-full px-8 text-black bg-white hover:bg-gray-100 cursor-pointer">
                        Découvrir nos coopératives
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Notre fonctionnement</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
                <p>
                  Notre approche consiste à apporter un soutien technique, logistique et financier pour mettre en place les projets et en confier ensuite la gestion à des responsables locaux, partenaires de l’association la Pangée Internationale.
                </p>
                <p>
                  Pour mener à bien ses projets, la Pangée Internationale s’appuie sur une équipe dédiée et des équipes locales engagées par région.
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
}
