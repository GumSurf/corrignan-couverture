'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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

    const templateParams = {
      nom: formData.nom,
      email: formData.email,
      telephone: formData.telephone,
      typeProjet: formData.typeProjet,
      sujet: formData.sujet,
      message: formData.message,
    };

    try {
      await emailjs.send(NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      setSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
        typeProjet: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Une erreur est survenue lors de l’envoi du message. Veuillez réessayer.');
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

      <div className="grid gap-6 md:grid-cols-2">

        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-[#b8b09a] mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white placeholder-[#666] focus:border-[#c9a84c] focus:outline-none transition"
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#b8b09a] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white placeholder-[#666] focus:border-[#c9a84c] focus:outline-none transition"
            placeholder="votre@email.com"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-[#b8b09a] mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white placeholder-[#666] focus:border-[#c9a84c] focus:outline-none transition"
            placeholder="06 04 10 70 18"
          />
        </div>

        {/* Type de projet */}
        <div>
          <label htmlFor="typeProjet" className="block text-sm font-medium text-[#b8b09a] mb-2">
            Type de projet
          </label>
          <select
            id="typeProjet"
            name="typeProjet"
            value={formData.typeProjet}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white focus:border-[#c9a84c] focus:outline-none transition"
          >
            <option value="">Choisir un type</option>
            <option value="ardoise">Pose/Réparation ardoise</option>
            <option value="zinc">Pose/Réparation zinc</option>
            <option value="bac-acier">Pose bac acier</option>
            <option value="aluminium">Pose aluminium</option>
            <option value="bardage">Bardage extérieur</option>
            <option value="urgence">Urgence (fuite, etc.)</option>
            <option value="autre">Autre</option>
          </select>
        </div>

      </div>

      {/* Sujet */}
      <div className="mt-6">
        <label htmlFor="sujet" className="block text-sm font-medium text-[#b8b09a] mb-2">
          Sujet *
        </label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white placeholder-[#666] focus:border-[#c9a84c] focus:outline-none transition"
          placeholder="Objet de votre message"
        />
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-[#b8b09a] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-night-800 border border-[#c9a84c33] rounded-lg text-white placeholder-[#666] focus:border-[#c9a84c] focus:outline-none transition resize-none"
          placeholder="Décrivez votre projet ou votre demande..."
        />
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-br from-[#b8882a] to-[#e0b84a] text-[#120d00] font-medium py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>

      {error ? (
        <p className="text-sm text-red-400 mt-4 text-center">{error}</p>
      ) : null}

      <p className="text-xs text-[#666] mt-4 text-center">
        * Champs obligatoires. Nous nous engageons à ne jamais partager vos informations personnelles.
      </p>

    </form>
  );
}