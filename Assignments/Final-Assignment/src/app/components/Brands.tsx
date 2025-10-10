"use client";
import Image from "next/image";
import versace from "../../../assets/brands/versace.png";
import zara from "../../../assets/brands/zara.png";
import gucci from "../../../assets/brands/gucci.png";
import prada from "../../../assets/brands/prada.png";
import calvin from "../../../assets/brands/calvin.png";

const Brand = () => {
  const logos = [
    { id: 1, src: versace },
    { id: 2, src: zara },
    { id: 3, src: gucci },
    { id: 4, src: prada },
    { id: 5, src: calvin },
  ];

  // Duplicate the array for smooth looping
  const repeatedLogos = [...logos, ...logos];

  return (
    <>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .slider {
          animation: slide 20s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden bg-black py-10">
        <div className="flex gap-20 items-center slider w-[200%]">
          {repeatedLogos.map((logo, index) => (
            <Image
              key={`${logo.id}-${index}`}
              src={logo.src}
              alt={`brand-logo-${logo.id}-${index}`}
              className="w-32 h-auto"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brand;
