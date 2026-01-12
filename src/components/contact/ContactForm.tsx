
import React, { useEffect, useState } from 'react';
import { Send, Rocket } from 'lucide-react';

const SERVICES = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'branding', label: 'Branding' },
    { value: 'design', label: 'Design' },
    { value: 'production', label: 'Production' },
    { value: 'other', label: 'Other' },
];

export const ContactForm = () => {
    const [selectedService, setSelectedService] = useState('other');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const service = params.get('service');
        if (service && SERVICES.find(s => s.value === service)) {
            setSelectedService(service);
        }
    }, []);

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-4 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-4 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-secondary">Interested In</label>
                <select
                    id="subject"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-4 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                    {SERVICES.map((service) => (
                        <option key={service.value} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Your Message</label>
                <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-4 bg-zinc-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all duration-300 resize-none"
                    required
                ></textarea>
            </div>

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
