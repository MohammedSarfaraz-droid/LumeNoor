"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedGradientButton from "./ui/animated-gradient-button";

const servicesList = [
  "Custom Frontend Web Dev",
  "AI Analytics & Strategy",
  "Conversion Rate Optimization (CRO)",
  "Monthly Website Management",
  "Others"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    services: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="mx-auto max-w-5xl h-72 blur-3xl bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-purple-500/15 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Ready to Grow Your <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Business Online?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business goals. We'll analyze your current setup and provide an actionable strategy and quote.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative group"
        >
          {/* Outer glow container */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none" />

          {/* Form Box */}
          <div className="relative rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-purple-500/30 shadow-2xl shadow-purple-900/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
                <p className="text-sm sm:text-base text-foreground/70 max-w-md mx-auto">
                  Thank you for reaching out. We will review your project requirements and get back to you within 24 hours with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      businessName: "",
                      websiteUrl: "",
                      services: [],
                      message: "",
                    });
                  }}
                  className="mt-4 text-xs sm:text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 2 Column Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                      Your Name <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-slate-800/60 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                      Email Address <span className="text-purple-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-slate-800/60 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-all"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Acme Growth Inc."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-slate-800/60 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-all"
                    />
                  </div>

                  {/* Current Website URL */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-slate-800/60 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                    Services You Are Interested In
                  </label>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {servicesList.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                            isSelected
                              ? "bg-purple-500/25 border-purple-400 text-purple-700 dark:text-purple-300 shadow-sm shadow-purple-500/20"
                              : "bg-gray-100/70 dark:bg-slate-800/40 border-purple-500/15 text-foreground/70 hover:border-purple-500/40"
                          }`}
                        >
                          {isSelected && <span className="mr-1.5">✓</span>}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-foreground/90 block">
                    Project Details & Goals <span className="text-purple-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, target local market, or current challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-slate-800/60 border border-purple-500/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-foreground/60 text-center sm:text-left">
                    🔒 We respect your privacy. No spam, ever.
                  </div>
                  <AnimatedGradientButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    showArrow={true}
                    arrowDirection="right"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
                  </AnimatedGradientButton>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
