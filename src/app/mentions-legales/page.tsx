import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | La Pangée Internationale',
  description: 'Mentions légales et politique de confidentialité de La Pangée Internationale.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-muted/10 pb-20">
      {/* Header Section */}
      <section className="w-full py-16 md:py-24 bg-background border-b border-border/40 flex justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Mentions Légales & Politique de Confidentialité
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 flex justify-center">
        <div className="container px-4 md:px-6 max-w-4xl space-y-12 text-muted-foreground leading-relaxed">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground border-b pb-2">1. Mentions Légales</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Éditeur du site</h3>
              <p>
                Le présent site est édité par l'association <strong>La Pangée Internationale</strong>.<br />
                Association loi 1901 à but non lucratif.<br />
                <strong>Siège social :</strong> [Adresse complète de l'association]<br />
                <strong>Email :</strong> <a href="mailto:hello@lapangee-internationale.com" className="text-primary hover:underline">hello@lapangee-internationale.com</a><br />
                <strong>Téléphone :</strong> [Numéro de téléphone]<br />
                <strong>Numéro RNA :</strong> [WXXXXXXXXX]<br />
                <strong>Numéro SIRET :</strong> [XXXXXXXXXXXXXX] (si applicable)
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Directeur de la publication</h3>
              <p>
                <strong>Nom :</strong> [Nom et Prénom du Président(e)]<br />
                <strong>Fonction :</strong> Président(e) de l'association
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Création et Développement</h3>
              <p>
                Ce site a été conçu et développé par <strong>Janis BOTELLA</strong>.<br />
                <strong>Site internet :</strong> <a href="https://www.janisbotella.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.janisbotella.fr</a>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Hébergement</h3>
              <p>
                Ce site est hébergé par :<br />
                <strong>Nom de l'hébergeur :</strong> [Vercel Inc. / OVH / Hostinger...]<br />
                <strong>Adresse :</strong> [Adresse postale de l'hébergeur]<br />
                <strong>Contact de l'hébergeur :</strong> [Numéro de téléphone ou lien vers le site]
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground border-b pb-2">2. Politique de Confidentialité (RGPD)</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Collecte et traitement des données</h3>
              <p>
                Dans le cadre de l'utilisation de notre formulaire de contact, l'association <strong>La Pangée Internationale</strong> est amenée à collecter et traiter des données à caractère personnel vous concernant (Nom, Prénom, Email, Téléphone, Profession, Domaine de compétence, Message).
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">Finalité du traitement</h3>
              <p>
                Ces données sont collectées dans le but exclusif de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Répondre à vos demandes de contact et d'informations.</li>
                <li>Gérer les propositions de partenariats ou d'aides.</li>
                <li>Communiquer avec vous au sujet des actions de l'association (si vous avez donné votre accord).</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">Destinataires et Conservation</h3>
              <p>
                Ces données sont strictement confidentielles et sont destinées uniquement aux membres habilités du bureau de l'association La Pangée Internationale. Elles ne seront en aucun cas vendues, cédées ou louées à des tiers.
                <br /><br />
                Elles sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de notre dernier contact.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Vos droits (Accès, Rectification, Suppression)</h3>
              <p>
                Conformément à la réglementation européenne en vigueur (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles.
                <br /><br />
                Pour exercer ce droit, vous pouvez nous contacter à tout moment par email à l'adresse suivante :<br />
                <a href="mailto:hello@lapangee-internationale.com" className="text-primary font-medium hover:underline">hello@lapangee-internationale.com</a>
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">Cookies et traceurs</h3>
              <p>
                Le site utilise des services tiers, notamment pour l'affichage de la carte interactive (Mapbox). Ces services peuvent déposer des cookies techniques strictement nécessaires à leur fonctionnement.
                <br /><br />
                Ce site n'utilise aucun cookie de traçage publicitaire ou de reciblage commercial.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
