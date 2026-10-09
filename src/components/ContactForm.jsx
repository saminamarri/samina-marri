import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'client-opened', 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);

    const { emailService } = siteConfig;
    const accessKey = emailService?.web3formsAccessKey;
    const formspreeUrl = emailService?.formspreeEndpoint;

    try {
      if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `[Website Inquiry] ${formData.subject}`,
            message: formData.message,
            from_name: 'Samina Marri Website'
          })
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(data.message || 'Failed to send message via Web3Forms');
        }
      } else if (formspreeUrl && formspreeUrl.trim() !== '') {
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Formspree submission failed');
        }
      } else {
        const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setStatus('client-opened');
      }
    } catch (err) {
      console.error('Email send error:', err);
      const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setStatus('client-opened');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#121324] p-8 md:p-12 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-2xl relative">
      <h3 className="font-serif text-2xl md:text-3xl text-slate-900 dark:text-white mb-2 font-bold">
        Send a Direct Message
      </h3>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-8 font-light leading-relaxed">
        Fill out the form below to send an inquiry directly to <span className="text-purple-600 dark:text-purple-400 font-medium">{siteConfig.email}</span>.
      </p>

      {/* Success Notification */}
      {status === 'success' && (
        <div className="mb-6 p-5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-slate-900 dark:text-slate-100 flex items-start gap-3 animate-fade-in shadow-lg">
          <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-purple-700 dark:text-purple-300 text-sm mb-1">Message Sent Successfully!</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Thank you for reaching out. Your message has been sent directly to Samina Marri's inbox ({siteConfig.email}). She will respond to your inquiry shortly.
            </p>
          </div>
        </div>
      )}

      {/* Mail Client Fallback Notification */}
      {status === 'client-opened' && (
        <div className="mb-6 p-5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs text-slate-900 dark:text-slate-100 flex items-start gap-3 animate-fade-in">
          <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-purple-700 dark:text-purple-300 text-sm mb-1">Email Application Opened</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Your default email app has opened with your inquiry pre-filled for <strong className="text-purple-600 dark:text-purple-400">{siteConfig.email}</strong>. Click send in your email app to complete dispatch.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              disabled={isSubmitting}
              className={`w-full bg-slate-50 dark:bg-[#09090D] border ${
                errors.name ? 'border-red-500' : 'border-purple-500/20 dark:border-purple-400/30 focus:border-purple-500'
              } rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
              Your Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. eleanor@example.com"
              disabled={isSubmitting}
              className={`w-full bg-slate-50 dark:bg-[#09090D] border ${
                errors.email ? 'border-red-500' : 'border-purple-500/20 dark:border-purple-400/30 focus:border-purple-500'
              } rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
            Subject *
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Artwork Inquiry / Collaboration"
            disabled={isSubmitting}
            className={`w-full bg-slate-50 dark:bg-[#09090D] border ${
              errors.subject ? 'border-red-500' : 'border-purple-500/20 dark:border-purple-400/30 focus:border-purple-500'
            } rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
          />
          {errors.subject && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2 font-semibold">
            Message *
          </label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your thoughts, project details, or exhibition request..."
            disabled={isSubmitting}
            className={`w-full bg-slate-50 dark:bg-[#09090D] border ${
              errors.message ? 'border-red-500' : 'border-purple-500/20 dark:border-purple-400/30 focus:border-purple-500'
            } rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors resize-none disabled:opacity-50`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-purple-600/20 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SENDING MESSAGE...</span>
            </>
          ) : (
            <>
              <span>SEND MESSAGE</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
