import React from 'react';
import { Mail, Palette, Layout, Code2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { siteConfig } from '../data/config';

export default function ContactPage() {
  const services = [
    {
      title: "Fine Art Commissions",
      description: "Custom oil & acrylic canvas paintings, charcoal figure sketching, relief block prints, terracotta sculptures, and textile embroidery.",
      icon: Palette
    },
    {
      title: "Logo & Brand Identity",
      description: "Custom vector logos, visual branding identity, typography layout, marketing collateral, and vector illustration.",
      icon: Layout
    },
    {
      title: "Web & App Development",
      description: "Modern, responsive websites, React.js web applications, frontend user interfaces, and mobile-friendly web apps.",
      icon: Code2
    },
    {
      title: "Agentic AI & Technology",
      description: "Autonomous AI agent workflows, prompt craftsmanship, generative visual experimentation, and creative automation.",
      icon: Cpu
    }
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <SectionHeading
          label="GET IN TOUCH &amp; SERVICES"
          title="LET'S CREATE A CONVERSATION"
          subtitle="Have an idea, logo branding request, web/app project, AI workflow, fine art commission, or exhibition request? I'd love to hear from you."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email, Services & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#121324] p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#09090D] border border-purple-500/20 dark:border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400 font-bold block mb-1">
                  DIRECT EMAIL INQUIRIES
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-serif text-2xl font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light pt-4 border-t border-purple-500/10 dark:border-purple-400/20">
                Available for fine art commissions, logo design &amp; branding, web &amp; application development, agentic AI technology, and exhibition collaborations.
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold block mb-3">
                  CONNECT ON SOCIAL MEDIA
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Studio Availability Box */}
            <div className="bg-gradient-to-br from-white to-slate-100 dark:from-[#121324] dark:to-[#1A1C38] p-8 rounded-2xl border border-purple-500/20 dark:border-purple-400/30 shadow-xl space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                ARTIST &amp; DEVELOPER AVAILABILITY
              </span>
              <p className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Open for Fine Art, Branding, Web/App &amp; AI Projects
              </p>

              {/* Services Offered List */}
              <div className="space-y-3 pt-2">
                {services.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="p-3.5 bg-slate-50 dark:bg-[#09090D] rounded-xl border border-purple-500/10 dark:border-purple-400/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{title}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 font-light leading-relaxed mt-0.5">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
