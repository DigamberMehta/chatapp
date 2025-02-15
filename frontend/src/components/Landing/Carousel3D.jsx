import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Windows-11-Search-bar?scl=1",
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-PC-open-with-Start-menu-on-the-screen?scl=1",
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-A-person-setting-a-PC-on-a-table?scl=1",
];

export default function Carousel3D() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full flex items-center justify-center h-fit overflow-hidden mt-[24px]">
      <div className="relative w-[800px] h-[600px] flex justify-center items-center perspective-[1500px]">
        {images.map((img, i) => {
          const offset = ((i - index + images.length + images.length) % images.length) - 1;
          const scale = 1 - Math.abs(offset) * 0.1;
          const zIndex = images.length - Math.abs(offset);
          const opacity = offset === 0 ? 1 : 0.6;
          const translateX = offset === -1 ? -120 : offset === 1 ? 120 : 0;
          const rotateY = offset === -1 ? -20 : offset === 1 ? 20 : 0;

          return (
            <motion.img
              key={img}
              src={img}
              className="absolute rounded-lg shadow-lg"
              style={{
                transform: `translateX(${translateX}%) translateY(${Math.abs(offset) * 10}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
              }}
              animate={{ opacity, x: translateX, scale, rotateY }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          );
        })}
      </div>
      <button
        className="absolute left-5 bg-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-5 bg-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}