import React from 'react';
import { HeroGeometric } from "./ui/shape-landing-hero";

const heroData = {
  badge: "Available for projects",
  title1: "Elevate Your Business",
  title2: "With Bliz Media"
};

const ServicesHero = () => {
  return (
    <HeroGeometric
      badge={heroData.badge}
      title1={heroData.title1}
      title2={heroData.title2}
    />
  );
};

export default ServicesHero;