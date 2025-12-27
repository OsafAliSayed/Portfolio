import Navbar from "@/components/ui/navbar";
import ContactCTA from "@/components/common/contact-cta-section";
import FooterSection from "@/components/common/footer";
export default function SnippetsPage() {

    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
            {/* Grid background */}
            <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
            <Navbar activeLabel="Snippets" />
            {/* Main Content */}
            <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
                
                {/* Contact CTA */}
                <ContactCTA />
                {/* Footer */}
                <FooterSection />
            </div>
        </div>
    );
}