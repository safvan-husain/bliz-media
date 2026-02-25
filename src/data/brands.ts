import brand1 from "../assets/brands/brand-1.png";
import brand2 from "../assets/brands/brand-2.png";
import brand3 from "../assets/brands/brand-3.png";
import brand4 from "../assets/brands/brand-4.png";
import brand5 from "../assets/brands/brand-5.png";
import brand6 from "../assets/brands/brand-6.png";
import brand7 from "../assets/brands/brand-7.png";
import brand8 from "../assets/brands/brand-8.png";
import brand9 from "../assets/brands/brand-9.png";
import brand10 from "../assets/brands/brand-10.png";
import brand11 from "../assets/brands/brand-11.png";
import brand12 from "../assets/brands/brand-12.png";
import brand13 from "../assets/brands/brand-13.png";
import brand14 from "../assets/brands/brand-14.png";
import brand15 from "../assets/brands/brand-15.png";

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
  { id: "brand-8", icon: brand8.src, color: "bg-black" },
  { id: "brand-10", icon: brand10.src, color: "bg-black" },
  { id: "brand-12", icon: brand12.src, color: "bg-black" },
  { id: "brand-13", icon: brand13.src, color: "bg-black" },
  { id: "brand-14", icon: brand14.src, color: "bg-black" },
  { id: "brand-15", icon: brand15.src, color: "bg-black" },
];
