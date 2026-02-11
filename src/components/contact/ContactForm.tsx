import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";

const SERVICES = [
  { value: "web-development", label: "Web Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "branding", label: "Branding" },
  { value: "design", label: "Design" },
  { value: "production", label: "Production" },
  { value: "other", label: "Other" },
];

export const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("other");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service && SERVICES.find((s) => s.value === service)) {
      setSelectedService(service);
    }
  }, []);

  return (
    <form
      className="space-y-6"
      action="https://formsubmit.co/info@blizmedia.com"
      method="POST"
    >
      <input
        type="hidden"
        name="_next"
        value="http://blizmedia.com/acknowledge"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-secondary">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-4 bg-muted border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-secondary">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="john@example.com"
            className="w-full px-4 py-4 bg-muted border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-secondary">
          Interested In
        </label>
        <select
          name="subject"
          id="subject"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full px-4 py-4 bg-muted border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300 appearance-none cursor-pointer"
        >
          {SERVICES.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-secondary">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-4 bg-muted border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300 resize-none"
          required
        ></textarea>
      </div>

      <input
        name="_formsubmit_id"
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="group relative w-full md:w-auto px-10 py-4 bg-secondary text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:bg-primary shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3"
      >
        Send Message
        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  );
};
