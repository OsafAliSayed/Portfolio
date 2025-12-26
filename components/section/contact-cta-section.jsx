'use client';

import Icons from '@/components/icons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/constants';

/**
 * Small contact CTA that offers Email and WhatsApp actions.
 * Replace the default `email` and `phone` props with real values.
 */

export default function ContactCTA({
  email = contactInfo.email,
  phone = contactInfo.phone 
}) {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent("Hi! I'd like to connect about a project.")}`;

  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        Get in touch
      </h2>

      <div className="p-4 bg-[#0a0a0a] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-neutral-300 flex-1">
          Interested in working with me? Drop me a mail at <Link href={`mailto:${email}`} className="text-secondary">{email}</Link> or message me on WhatsApp.
        </p>

        <div className="flex items-center gap-3">

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp" className="inline-flex">
            <Button
              variant="ghost"
              size="default"
              className="rounded-none border border-white/10 bg-transparent text-green-400 text-sm px-3 py-2 inline-flex items-center gap-2 hover:border-green-400 hover:text-green-300 transition-colors"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
