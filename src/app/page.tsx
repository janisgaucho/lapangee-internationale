import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SenegalMap from "@/components/Map";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-muted/50 to-background flex justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bienvenue sur <span className="text-primary">La Pangée Internationale</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Le développement participatif et alternatif de l'Afrique par ses habitants et ses communautés.
            </p>
          </div>
          <div className="space-x-4 flex">
            <Link href="/association">
              <Button size="lg">
                Découvrir notre mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Nous contacter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Notre présence au Sénégal</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Découvrez les coopératives agricoles avec lesquelles nous collaborons pour un développement participatif.
            </p>
          </div>
          <div className="w-full mx-auto max-w-5xl aspect-square md:aspect-[16/9] lg:aspect-[21/9]">
            <SenegalMap />
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/cooperatives">
              <Button size="lg" variant="default">
                Voir toutes nos coopératives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section Placeholder */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-12">Nos domaines d'intervention</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-start text-left group">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <ImageIcon className="h-12 w-12 text-muted-foreground/40 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-1.5">La santé</h3>
              <p className="text-muted-foreground">
                L'assurance d'un avenir meilleur.
              </p>
            </div>
            <div className="flex flex-col items-start text-left group">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <ImageIcon className="h-12 w-12 text-muted-foreground/40 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-1.5">L'agriculture</h3>
              <p className="text-muted-foreground">
                Une agriculture durable pour le monde de demain.
              </p>
            </div>
            <div className="flex flex-col items-start text-left group">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <ImageIcon className="h-12 w-12 text-muted-foreground/40 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-1.5">L'éducation</h3>
              <p className="text-muted-foreground">
                Un enjeu fondamental pour l'avenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-muted/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-12">Actualités</h2>
          <div className="flex justify-center w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-[85vw] md:max-w-5xl"
            >
              <CarouselContent className="-ml-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-background transition-all duration-300 hover:shadow-lg hover:border-primary/20 cursor-pointer">
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
              <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
