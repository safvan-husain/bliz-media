import brand1 from "../assets/brands/brand-1.png";
import brand2 from "../assets/brands/brand-2.png";
import brand3 from "../assets/brands/brand-3.png";
import brand4 from "../assets/brands/brand-4.png";
import brand5 from "../assets/brands/brand-5.png";
import brand6 from "../assets/brands/brand-6.png";

export interface BrandItem {
  id: string;
  icon: string;
  color?: string;
}

export const brands: BrandItem[] = [
  { id: "brand-1", icon: brand1.src, color: "bg-white" },
  { id: "brand-2", icon: brand2.src, color: "bg-black" },
  { id: "brand-3", icon: brand3.src, color: "bg-black" },
  { id: "brand-4", icon: brand4.src, color: "bg-black" },
  { id: "brand-5", icon: brand5.src, color: "bg-black" },
  { id: "brand-6", icon: brand6.src, color: "bg-black" },
];
