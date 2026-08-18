'use server';

import { Resend } from 'resend';

// Initialise Resend avec la clé API provenant du fichier .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    // Extraction des champs
    const lastName = formData.get('lastName') as string;
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const profession = formData.get('profession') as string;
    const domain = formData.get('domain') as string;
    const message = formData.get('message') as string;
    const attachment = formData.get('attachment') as File | null;
    const rgpd = formData.get('rgpd') === 'true' || formData.get('rgpd') === 'on';

    // Validations côté serveur
    if (!rgpd) {
      return { error: 'Vous devez accepter les conditions RGPD.' };
    }

    if (!lastName || !firstName || !email || !message) {
      return { error: 'Veuillez remplir tous les champs obligatoires.' };
    }

    // Préparation du contenu du message
    const emailContent = `
Nouveau message depuis le formulaire de contact :

----------------------------------------
INFORMATIONS PERSONNELLES
----------------------------------------
Prénom : ${firstName}
Nom : ${lastName}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Métier : ${profession || 'Non renseigné'}
Domaine de compétence : ${domain || 'Non renseigné'}

----------------------------------------
MESSAGE
----------------------------------------
${message}
    `;

    // Traitement de la pièce jointe
    const attachments = [];
    if (attachment && attachment.size > 0) {
      // Limite de taille à 5 Mo (Resend accepte généralement jusqu'à 40 Mo au total, mais 5 Mo est une bonne limite pour le web)
      if (attachment.size > 5 * 1024 * 1024) {
        return { error: 'La pièce jointe ne doit pas dépasser 5 Mo.' };
      }

      const buffer = Buffer.from(await attachment.arrayBuffer());
      attachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    // Envoi via Resend
    // Remarque : 'onboarding@resend.dev' est utilisé par défaut pour les tests sur Resend
    // L'utilisateur devra le remplacer par son propre domaine vérifié (ex: contact@votredomaine.com)

    if (!process.env.RESEND_API_KEY) {
      console.error("Clé API Resend manquante dans .env.local");
      return { error: "Configuration serveur incomplète (clé API manquante)." };
    }

    const emailPayload: any = {
      from: 'Contact La Pangée <onboarding@resend.dev>',
      to: ['hello@lapangee-internationale.com'], // Mettre l'adresse de réception souhaitée
      subject: `Nouveau contact de ${firstName} ${lastName} - La Pangée`,
      text: emailContent,
    };

    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const data = await resend.emails.send(emailPayload);

    if (data.error) {
      console.error("Erreur Resend:", data.error);
      return { error: "Erreur lors de l'envoi de l'email via Resend. Vérifiez votre configuration." };
    }

    return { success: true };
  } catch (error) {
    console.error("Erreur inattendue serveur:", error);
    return { error: error instanceof Error ? error.message : "Une erreur inattendue s'est produite." };
  }
}
