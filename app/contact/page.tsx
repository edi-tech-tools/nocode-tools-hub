"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#a78bfa] bg-[#7c3aed]/10 px-3 py-1.5 rounded-md mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Have a question, suggestion, or want us to review a low-code platform?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-liquid rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-[#7c3aed]/10 border border-[#a78bfa]/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#a78bfa]/10 flex items-center justify-center mx-auto mb-3">
                    <Send className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-1">Message Sent!</p>
                  <p className="text-white/60 text-sm">
                    Thank you for reaching out. Our team in Porto will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#12082a] border border-[#7c3aed]/20 rounded-lg text-white placeholder:text-white/30 focus:border-[#7c3aed] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#12082a] border border-[#7c3aed]/20 rounded-lg text-white placeholder:text-white/30 focus:border-[#7c3aed] focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#12082a] border border-[#7c3aed]/20 rounded-lg text-white focus:border-[#7c3aed] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="platform-review">Suggest a Platform for Review</option>
                      <option value="bug">Report a Bug</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#12082a] border border-[#7c3aed]/20 rounded-lg text-white placeholder:text-white/30 focus:border-[#7c3aed] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-5">
            <div className="card-liquid rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a78bfa]" />
                Email Us
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-white/60">
                  <strong className="text-white">General:</strong>
                  <br />
                  <a href="mailto:hello@junipernode.com" className="text-[#a78bfa] hover:underline">
                    hello@junipernode.com
                  </a>
                </p>
                <p className="text-sm text-white/60">
                  <strong className="text-white">Reviews:</strong>
                  <br />
                  <a href="mailto:reviews@junipernode.com" className="text-[#a78bfa] hover:underline">
                    reviews@junipernode.com
                  </a>
                </p>
              </div>
            </div>

            <div className="card-liquid rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#a78bfa]" />
                Location
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Rua do Bonfim, 123
                <br />
                4300-071 Porto
                <br />
                Portugal
              </p>
            </div>

            <div className="card-liquid rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#a78bfa]" />
                Response Time
              </h3>
              <p className="text-sm text-white/60">
                We typically respond within{" "}
                <strong className="text-white">24 hours</strong> during
                business days (WET/WEST timezone).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
