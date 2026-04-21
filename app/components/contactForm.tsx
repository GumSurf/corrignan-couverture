'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    typeProjet: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS config manquante");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone,
      typeProjet: formData.typeProjet,
      sujet: formData.sujet,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
        typeProjet: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors de l’envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33] text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
        <p className="text-[#b8b09a]">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-night-700 rounded-2xl p-8 border border-[#c9a84c33]">
      <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>

      {/* ... le reste de ton JSX inchangé ... */}

      {error && (
        <p className="text-sm text-red-400 mt-4 text-center">{error}</p>
      )}
    </form>
  );
}