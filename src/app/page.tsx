import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SenegalMap from "@/components/Map";

export default function Home() {
  // Liste des images pour le carousel de la page d'accueil
  // Remplacez les 'null' par vos liens Cloudinary. N'oubliez pas d'utiliser f_auto,q_auto !
  // Exemple : "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v12345/image.jpg"
  const carouselImages = [
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094770/Cl%C3%B4ture_%C3%A9pineux_1.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094767/visite_village.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094760/r%C3%A9union_femmes_GIE_03.03.2022.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094757/Cl%C3%B4ture_%C3%A9pineux_9.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094749/RIZIERE_REGION_ZIGUINCHOR_9.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094747/r%C3%A9union_vilage.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094743/R%C3%A9union_Bow_6.jpg",
    "https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094750/SINDIAN_17.jpg"
  ];

  return (
    <div className="flex flex-col items-center w-full">

      {/* Wrapper global pour Hero + Carousel avec fond d'image */}
      <div 
        className="relative w-full flex flex-col items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094748/Rizi%C3%A8re_Bow_5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Effet Glassmorphism unifié */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-0"></div>

        {/* Dégradé fondu vers le bas pour la transition en douceur */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center relative z-20">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                Bienvenue sur <br /><span className="font-bold text-primary">La Pangée Internationale</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-foreground/90 font-medium md:text-xl leading-relaxed">
                Le développement participatif et alternatif de l'Afrique par ses habitants et ses communautés.
              </p>
            </div>
            <div className="space-x-4 flex pt-4">
              <Link href="/a-propos">
                <Button size="lg" className="cursor-pointer p-6">
                  Découvrir notre mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="cursor-pointer p-6" variant="outline" size="lg">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="w-full relative pb-12 md:pb-24 lg:pb-32 overflow-hidden z-20">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4 py-4">
            {carouselImages.map((imageUrl, index) => (
              <CarouselItem key={index} className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-[28%]">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-muted overflow-hidden flex items-center justify-center border shadow-sm">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls (Below Carousel) */}
          <div className="flex justify-center gap-4 mt-8 z-20 relative">
            <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 h-12 w-12 bg-white/40 text-neutral-800 backdrop-blur-md border border-white/20 hover:bg-white/60 hover:text-neutral-900 dark:bg-black/40 dark:text-neutral-300 dark:border-white/10 dark:hover:bg-black/60 dark:hover:text-neutral-100 transition-all shadow-sm cursor-pointer" />
            <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 h-12 w-12 bg-white/40 text-neutral-800 backdrop-blur-md border border-white/20 hover:bg-white/60 hover:text-neutral-900 dark:bg-black/40 dark:text-neutral-300 dark:border-white/10 dark:hover:bg-black/60 dark:hover:text-neutral-100 transition-all shadow-sm cursor-pointer" />
          </div>
        </Carousel>
        </section>
      </div>

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
              <Button className="cursor-pointer p-6" size="lg" variant="default">
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
            <Link href="/sante" className="flex flex-col items-start text-left group cursor-pointer">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094769/Case_de_sant%C3%A9_3.jpg"
                  alt="La santé"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-1.5 transition-colors group-hover:text-primary">La santé</h3>
              <p className="text-muted-foreground">
                L'assurance d'un avenir meilleur.
              </p>
            </Link>
            <Link href="/agriculture" className="flex flex-col items-start text-left group cursor-pointer">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094755/Visite_terrain_1.jpg"
                  alt="L'agriculture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-1.5 transition-colors group-hover:text-primary">L'agriculture</h3>
              <p className="text-muted-foreground">
                Une agriculture durable pour le monde de demain.
              </p>
            </Link>
            <Link href="/education" className="flex flex-col items-start text-left group cursor-pointer">
              <div className="w-full aspect-video rounded-2xl bg-muted/40 flex items-center justify-center mb-4 overflow-hidden transition-all duration-300 group-hover:bg-muted/80">
                <img
                  src="https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094768/biblioth%C3%A8que_coll%C3%A8ge_1.jpg"
                  alt="L'éducation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-1.5 transition-colors group-hover:text-primary">L'éducation</h3>
              <p className="text-muted-foreground">
                Un enjeu fondamental pour l'avenir.
              </p>
            </Link>
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
              <CarouselContent className="-ml-4 py-4">
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
