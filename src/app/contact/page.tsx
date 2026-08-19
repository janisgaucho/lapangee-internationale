'use client';

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/send-email';

// Définition du schéma de validation
const formSchema = z.object({
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  profession: z.string().optional(),
  domain: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  rgpd: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions d'utilisation"
  })
});

type FormValues = z.infer<typeof formSchema>;

const DOMAINS = [
  { id: 'education', label: 'Éducation' },
  { id: 'sante', label: 'Santé' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'sport', label: 'Sport' },
  { id: 'culture', label: 'Culture / Art' },
  { id: 'construction', label: 'Construction' },
  { id: 'autre', label: 'Autre' },
];
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, formState: { errors, isValid }, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      domain: '',
      rgpd: false as any,
    }
  });

  const onSubmit = async (data: FormValues) => {
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Création du FormData pour inclure le fichier uploadé qui n'est pas géré par React Hook Form nativement
    const formData = new FormData(formRef.current);

    // Vérification de la taille du fichier (Max 5 Mo)
    const file = formData.get('attachment') as File | null;
    if (file && file.size > 5 * 1024 * 1024) {
      setSubmitStatus('error');
      setErrorMessage("La pièce jointe dépasse la taille maximale autorisée de 5 Mo.");
      setIsSubmitting(false);
      return;
    }

    // Assurez-vous d'ajouter manuellement les valeurs gérées par React Hook Form qui ne sont pas des inputs standards (comme Select et Checkbox)
    formData.set('domain', data.domain || '');
    formData.set('rgpd', data.rgpd ? 'true' : 'false');

    try {
      const result = await sendContactEmail(formData);

      if (result?.error) {
        setSubmitStatus('error');
        setErrorMessage(result.error);
      } else {
        setSubmitStatus('success');
        formRef.current.reset(); // Réinitialiser le formulaire natif (pour vider l'input file)
        setValue('domain', '');
        setValue('rgpd', false as any);
        setValue('firstName', '');
        setValue('lastName', '');
        setValue('email', '');
        setValue('phone', '');
        setValue('profession', '');
        setValue('message', '');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-muted/10 pb-20">
      {/* Hero Section */}
      <section
        className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/due8mtlz/image/upload/f_auto,q_auto/v1787094752/Visite_de_terrain_9.jpg')",
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
              Contactez-nous
            </h1>
            <p className="text-lg text-foreground/80 font-medium md:text-xl leading-relaxed">
              Une question, un projet ou une envie de vous impliquer ? Laissez-nous un message et notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-12 flex justify-center">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="bg-background border border-border/50 rounded-2xl shadow-sm p-6 md:p-10">

            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Message envoyé !</h3>
                <p className="text-muted-foreground max-w-md">
                  Merci de nous avoir contactés. Nous avons bien reçu votre message et reviendrons vers vous très prochainement.
                </p>
                <Button className="mt-8" onClick={() => setSubmitStatus('idle')}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Prénom */}
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" placeholder="Jean" {...register('firstName')} />
                    {errors.firstName && <p className="text-sm text-red-500 font-medium">{errors.firstName.message}</p>}
                  </div>

                  {/* Nom */}
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" placeholder="Dupont" {...register('lastName')} />
                    {errors.lastName && <p className="text-sm text-red-500 font-medium">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="jean.dupont@exemple.com" {...register('email')} />
                    {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>}
                  </div>

                  {/* Téléphone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" {...register('phone')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Métier */}
                  <div className="space-y-2">
                    <Label htmlFor="profession">Métier</Label>
                    <Input id="profession" placeholder="Ex: Enseignant, Agriculteur..." {...register('profession')} />
                  </div>

                  {/* Domaine de compétence */}
                  <div className="space-y-2">
                    <Label htmlFor="domain">Domaine de compétence</Label>
                    <Select onValueChange={(val) => setValue('domain', val || undefined)} value={watch('domain') || undefined}>
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Sélectionnez un domaine">
                          {watch('domain') ? DOMAINS.find(d => d.id === watch('domain'))?.label : undefined}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent alignItemWithTrigger={false}>
                        {DOMAINS.map((domain) => (
                          <SelectItem key={domain.id} value={domain.id}>
                            {domain.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pièce jointe */}
                <div className="space-y-2">
                  <Label htmlFor="attachment">Pièce jointe (Max 5 Mo)</Label>
                  <Input
                    id="attachment"
                    type="file"
                    name="attachment"
                    className="h-14 px-3 py-2 cursor-pointer file:mr-4 file:h-10 file:px-4 file:rounded-md file:border-0 file:bg-primary/10 file:text-primary file:font-medium hover:file:bg-primary/20 file:transition-colors file:cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">Formats acceptés : PDF, JPG, PNG, DOCX.</p>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Écrivez votre message ici..."
                    className="min-h-[150px] resize-y"
                    {...register('message')}
                  />
                  {errors.message && <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>}
                </div>

                {/* RGPD */}
                <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <Checkbox
                    id="rgpd"
                    checked={watch('rgpd')}
                    onCheckedChange={(checked) => setValue('rgpd', checked === true)}
                    className="mt-1 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="rgpd" className="text-sm font-medium leading-snug cursor-pointer">
                      J'accepte d'être recontacté(e) et que mes données soient conservées dans le cadre de ma demande.
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Vos données personnelles ne seront jamais partagées à des tiers sans votre consentement.
                    </p>
                    {errors.rgpd && <p className="text-sm text-red-500 font-medium">{errors.rgpd.message}</p>}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto cursor-pointer" disabled={isSubmitting || !isValid}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </Button>

              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
