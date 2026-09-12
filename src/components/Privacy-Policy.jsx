"use client";
import BackToTopButton from "./ui/BackToTopButton";
import BackgroundBeamsWithCollision from "./hero-components/BackgroundBeams";

export default function PrivacyPolicy() {
    return (
        <>
            <BackgroundBeamsWithCollision>
                <section className="relative w-full mx-auto max-w-3xl px-4 py-16 sm:py-24 md:py-28 text-foreground">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-400">Privacy Policy</h1>
                        <p className="text-base sm:text-lg text-foreground/80">Effective date: January 1, 2026</p>
                    </div>
                    <div className="space-y-8 text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Who We Are</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                LumeNoor ("we", "our", "us") is a premier digital agency specializing in custom frontend web development, AI analytics integration, Conversion Rate Optimization (CRO), and ongoing website management tailored for US small and medium-sized businesses. This Privacy Policy outlines how we collect, use, protect, and handle your information when you visit our website (lumenoor.com) or utilize our web development and AI strategy services.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Scope of This Policy</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                This policy applies to: (a) potential and current clients submitting project inquiries, (b) US SMB owners and representatives partnering with us for web development and retainer services, and (c) general visitors to our agency website.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>
                                    <span className="font-semibold text-purple-500 dark:text-purple-300">A. Information You Provide Voluntarily</span>
                                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm sm:text-base">
                                        <li>Contact details: Name, email address, phone number, business name, and existing website URL submitted via our contact forms or project inquiry requests.</li>
                                        <li>Project details: Business goals, design preferences, service interests, and communications during project discovery and development.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-purple-500 dark:text-purple-300">B. Automated Technical Information</span>
                                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm sm:text-base">
                                        <li>Website usage data: Device type, browser specifications, IP addresses, pages viewed, and session duration to ensure security and improve our site experience.</li>
                                        <li>Cookies & performance tracking: Essential cookies for site navigation and performance analytics.</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold text-purple-500 dark:text-purple-300">C. AI Analytics Service Data (Client Websites)</span>
                                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm sm:text-base">
                                        <li>When integrating our AI Analytics suite into client websites, we collect aggregated, non-personally identifiable traffic patterns, form conversion triggers, and user interaction signals to generate monthly revenue growth reports.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>To evaluate your project requirements and deliver tailored proposals and web design mockups.</li>
                                <li>To execute custom frontend development contracts, integrate AI strategy tools, and optimize conversion flows.</li>
                                <li>To deliver monthly website management services, security updates, performance monitoring, and AI growth reports.</li>
                                <li>To send invoice, billing, and project status updates.</li>
                                <li>To protect our digital assets against cyber threats, unauthorized access, or fraudulent activities.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Information Sharing & Disclosure</h2>
                            <p className="text-base text-foreground/90 mb-2 leading-relaxed">
                                We strictly prioritize your privacy. We do <span className="font-semibold text-purple-500 dark:text-purple-300">never sell, rent, or trade</span> your personal or business data to third parties for marketing purposes. Data is shared strictly on a need-to-know basis with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>Infrastructure & hosting partners (e.g., Vercel, AWS) for website hosting and deployment.</li>
                                <li>Invoicing & payment processors (e.g., Stripe) to handle billing securely.</li>
                                <li>Legal authorities only if explicitly required by applicable state or federal law.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Data Security</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                We employ industry-standard administrative, technical, and physical security measures, including SSL/TLS encryption for all data in transit, strict access control policies, and regular vulnerability checks to safeguard your information.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Your Data Rights</h2>
                            <p className="text-base text-foreground/90 leading-relaxed mb-2">
                                You have full control over your personal and business information. You may at any time:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90 text-base">
                                <li>Request a copy of the personal or inquiry data we store about you.</li>
                                <li>Request correction of any inaccurate information.</li>
                                <li>Request the permanent deletion of your project inquiry data or contact records.</li>
                            </ul>
                            <p className="text-base text-foreground/90 leading-relaxed mt-2">
                                To exercise any of these rights, email us directly at <a href="mailto:connect@lumenoor.com" className="text-purple-500 underline font-medium">connect@lumenoor.com</a>.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Updates to This Policy</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                We may periodically update this Privacy Policy to reflect changes in legal requirements, technology, or our service offerings. Any revisions will be published on this page with an updated effective date.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Contact Us</h2>
                            <p className="text-base text-foreground/90 leading-relaxed">
                                If you have any questions or concerns regarding this Privacy Policy, please reach out to us at:
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
