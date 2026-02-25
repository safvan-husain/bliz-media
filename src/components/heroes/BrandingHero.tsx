"use client";

import React from "react";
import { ArcGalleryHero } from "../ui/arc-gallery-hero-component";
import { createServiceWhatsAppLink } from "@/lib/whatsapp";
import airecrewImage from "@/assets/projects-hero-images/airecrew@3x.jpg";
import flyeweelImage from "@/assets/projects-hero-images/flyeweel@3x.jpg";
import flyewellImage from "@/assets/projects-hero-images/flyewell@3x.jpg";
import hufiffImage from "@/assets/projects-hero-images/Hufiff@3x.jpg";
import ivalImage from "@/assets/projects-hero-images/ival 1@3x.jpg";
import luxcorpeeeImage from "@/assets/projects-hero-images/Luxcorpeee@3x.jpg";
import nexaaImage from "@/assets/projects-hero-images/nexaa@3x.jpg";

interface BrandingHeroProps {
  title: string;
  description?: string;
}

export function BrandingHero({ title, description }: BrandingHeroProps) {
  const defaultImages = [
    airecrewImage.src,
    flyeweelImage.src,
    flyewellImage.src,
    hufiffImage.src,
    ivalImage.src,
    luxcorpeeeImage.src,
    nexaaImage.src,
  ];

  return (
    <ArcGalleryHero
      title={title}
      description={description}
      images={defaultImages}
      ctaText="START YOUR PROJECT"
      onCtaClick={() =>
        (window.location.href = createServiceWhatsAppLink(title))
      }
      secondaryCtaText="SEE OUR WORK"
      onSecondaryCtaClick={() =>
        (window.location.href = `/projects?filter=${title}`)
      }
      theme="light"
    />
  );
}
