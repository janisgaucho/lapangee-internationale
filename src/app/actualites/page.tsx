import React from 'react';
import type { Metadata } from 'next';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: 'Actualités | La Pangée Internationale',
  description: 'Retrouvez toutes les actualités et derniers articles de La Pangée Internationale.',
};

export default function ActualitesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-muted/10">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24 bg-background border-b border-border/40 flex justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Actualités
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Retrouvez toutes nos dernières actualités, nos actions sur le terrain et nos événements.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full py-16 md:py-24 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {Array.from({ length: 9 }).map((_, index) => (
              <Card key={index} className="h-full flex flex-col group overflow-hidden border-border/50 bg-background transition-all duration-300 hover:shadow-lg hover:border-primary/20 cursor-pointer">
                <div className="w-full aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted transition-transform duration-500 group-hover:scale-105">
                    <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
                  </div>
                </div>
                <CardHeader className="flex-1 space-y-2">
                  <CardTitle className="line-clamp-2 transition-colors duration-300 group-hover:text-primary text-xl">
                    Titre de l'article {index + 1}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    Ceci est un résumé temporaire pour l'article d'actualité. Il donne un aperçu du contenu pour inciter le lecteur à cliquer et en savoir plus.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center text-sm font-semibold text-primary transition-colors">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
