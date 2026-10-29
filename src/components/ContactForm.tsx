import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submittedData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      message: formData.message,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submittedData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
      }).catch(() => {});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1A] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1A] mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-[#1A1A1A] mb-2">
            Handynummer
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-[#1A1A1A] mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8B0000] text-white font-bold uppercase py-4 rounded hover:bg-[#B22222] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Wird gesendet...
            </>
          ) : (
            'Nachricht senden'
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded border border-green-200">
            <CheckCircle size={20} />
            <p className="text-sm font-semibold">
              Vielen Dank! Deine Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei dir.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded border border-red-200">
            <AlertCircle size={20} />
            <p className="text-sm font-semibold">
              Ein Fehler ist aufgetreten. Bitte versuche es erneut oder kontaktiere uns direkt per Telefon.
            </p>
          </div>
        )}

        {!submitStatus && (
          <p className="text-sm text-[#555555] text-center">
            Wir antworten in der Regel innerhalb von 24 Stunden.
          </p>
        )}
      </form>
    </div>
  );
}
