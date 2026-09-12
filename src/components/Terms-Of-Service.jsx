"use client";
import BackToTopButton from "./ui/BackToTopButton";
import BackgroundBeamsWithCollision from "./hero-components/BackgroundBeams";

export default function TermsOfService() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="relative w-full mx-auto max-w-3xl px-4 py-16 sm:py-24 md:py-28 text-foreground">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">Terms of Service</h1>
                        <p className="text-base sm:text-lg text-foreground/80">Effective date: January 1, 2026</p>
                    </div>
                    <div className="space-y-8 text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">1. Acceptance of Terms</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                Welcome to LumeNoor ("we", "our", "us"). By accessing our website (lumenoor.com) or engaging us for custom web development, AI analytics integration, Conversion Rate Optimization (CRO), or monthly website management services, you ("Client", "User") agree to be bound by these Terms of Service.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">2. Description of Services</h2>
                            <p className="text-base text-foreground/90 leading-relaxed mb-2">
                                LumeNoor provides professional digital web development and growth services engineered specifically for US small and medium businesses, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">Custom Frontend Web Development:</span> Tailor-made, mobile-responsive frontend site architecture built from scratch without generic templates.</li>
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">AI Analytics & Strategy Integration:</span> Custom behavioral tracking, lead analytics, and actionable monthly AI growth reports.</li>
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">Conversion Rate Optimization (CRO):</span> Continuous page, contact form, and booking flow optimizations to maximize local client lead capture.</li>
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">Monthly Website Management & Retainers:</span> High-speed hosting management, 24/7 security monitoring, routine maintenance, and ongoing technical support.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">3. Client Responsibilities</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>Provide accurate business information, logos, content assets, and access credentials necessary for project fulfillment in a timely manner.</li>
                                <li>Review project deliverables and provide timely feedback during design and testing phases.</li>
                                <li>Ensure that all media, images, text, and trademarks provided to LumeNoor do not infringe upon third-party intellectual property rights.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">4. Intellectual Property & Ownership</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">Client Ownership:</span> Upon receipt of full payment for a web development project, the Client owns the custom frontend design and bespoke code created specifically for their business.</li>
                                <li><span className="font-semibold text-purple-500 dark:text-purple-300">Agency Ownership:</span> LumeNoor retains ownership of pre-existing core agency frameworks, proprietary AI analytical tools, reusable components, and base development libraries.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">5. Payment Terms & Billing</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>Project milestone payments and monthly management fees are billed via secure invoicing (Stripe or direct wire transfer) as outlined in your project proposal.</li>
                                <li>Monthly retainer subscriptions are billed recurringly. Cancellation of monthly management services requires 30 days written notice prior to the next billing cycle.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">6. Warranties & Limitation of Liability</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>LumeNoor performs services in a professional manner following industry best practices for web design, performance, and security.</li>
                                <li>We aim for maximum website availability (99.9% target uptime for hosting management); however, we do not guarantee uninterrupted operational time caused by third-party infrastructure outages beyond our control.</li>
                                <li>To the maximum extent permitted by law, LumeNoor's total cumulative liability for any claim arising from our services is limited to the total fees paid by the Client to LumeNoor during the 12 months preceding the event.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">7. Termination</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                Either party may terminate an ongoing service retainer with 30 days written notice. We reserve the right to suspend or terminate services immediately in the event of non-payment or breach of these Terms.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">8. Changes to Terms</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. Continued use of our services following updates constitutes acceptance of the revised Terms.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">9. Contact Us</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                For any legal or service inquiries regarding these Terms, please contact us at:
                            </p>
                            <div className="mt-2 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm sm:text-base space-y-1">
                                <p className="font-semibold text-foreground">LumeNoor Agency</p>
                                <p className="text-foreground/80">Email: <a href="mailto:connect@lumenoor.com" className="text-purple-500 underline font-medium">connect@lumenoor.com</a></p>
                                <p className="text-foreground/80">Website: <a href="https://lumenoor.com" className="text-purple-500 underline font-medium">lumenoor.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </BackgroundBeamsWithCollision>
            <BackToTopButton scrollThreshold={180} />
        </>
    );
}
