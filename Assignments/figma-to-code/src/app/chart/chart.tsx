import Image from "next/image";

export default function Chart() {
  return (
    <div className="w-full bg-[#0B0E12] relative py-10 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="font-inter font-semibold text-sm sm:text-lg tracking-[-0.02em] text-[#335DD2]">
          cryptocurrencies
        </p>
        <p className="font-inter font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-white">
          Top crypto chart
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <Image
          src="/assets/History.png"
          alt="chart"
          width={980}
          height={504}
          className="w-full h-auto hover:scale-105 hover:duration-300 hover:ease-in-out"
        />
      </div>
    </div>
  );
}
