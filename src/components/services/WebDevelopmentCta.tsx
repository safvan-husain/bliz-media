import { Rocket } from 'lucide-react';

const CTA_CONTENT = {
  title: 'Let\'s Build Your Next Digital Project',
  description:
    'Whether it\'s a simple business site or a complex web application, we have the expertise to bring your vision to life.',
  buttonText: 'Start Your Web Project',
};

export const WebDevelopmentCta = () => {
  return (
    <section className="text-center space-y-8 py-12">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-secondary">
          {CTA_CONTENT.title}
        </h3>
        <p className="text-lg text-zinc-600">{CTA_CONTENT.description}</p>
      </div>

      <a
        href="/contact?service=web-development"
        className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
      >
        {CTA_CONTENT.buttonText}
        <Rocket className="w-5 h-5" />
      </a>
    </section>
  );
};
