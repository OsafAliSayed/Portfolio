import Icons from '@/components/ui/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/constants';
import SectionHeader from '../ui/section-header';

/**
 * Small contact CTA that offers Email and WhatsApp actions.
 * Replace the default `email` and `phone` props with real values.
 */

export default function ContactCTA({
  email = contactInfo.email,
  phone = contactInfo.phone 
}) {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent("Hi! I'd like to connect about a project.")}`;
  const calendlyLink = "https://calendly.com/osafalisayed/30min";
  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      <SectionHeader>Get In Touch</SectionHeader>

      <div className="rounded-3xl border border-white/10 bg-[rgb(12,12,12)] px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
        <p className="text-base  flex-1 leading-relaxed">
          Interested in working with me? Drop me a mail at{' '}
          <Link href={`mailto:${email}`} className="text-secondary">{email}</Link>{' '}
          or message me on WhatsApp.
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp" className="inline-flex transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Button
              variant="ghost"
              size="default"
              className="rounded-full border border-white/10 bg-transparent text-neutral-400 text-sm px-4 py-2 inline-flex items-center gap-2 hover:border-green-400 hover:text-green-300 transition-all duration-300"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>

          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" aria-label="Schedule a meet" className="inline-flex transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Button
              variant="ghost"
              size="default"
              className="rounded-full border border-white/10 bg-transparent text-neutral-400 text-sm px-4 py-2 inline-flex items-center gap-2 hover:border-blue-400 hover:text-blue-300 transition-all duration-300"
            >
              <Icons.Calendly className="w-4 h-4" />
              Schedule a Meet
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
