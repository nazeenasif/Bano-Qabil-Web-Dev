"use client";
import Image from "next/image";
import Rectangle from "../../../assets/Rectangle 2.png";
import Vector1 from "../../../assets/vectors/Vector 1.png";
import vector from "../../../assets/vectors/Vector.png";

import BrandsPage from "@/app/components/Brands";
import Arrivals from "@/app/components/Arrivals";
import Navbar from "@/app/components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-60 justify-center bg-[#F2F0F1] items-center md:items-start px-4 sm:px-6 md:px-0 overflow-hidden">
        <div className="ml-0 md:ml-24 text-center md:text-left mt-10 md:mt-0">
          <div className="text-black font-extrabold text-3xl sm:text-4xl md:text-5xl mt-6 md:mt-24 leading-snug">
            DISCOVER EVERYTHING <br className="hidden md:block" /> THAT FITS YOUR
            LIFESTYLE
          </div>

          <div className="font-normal text-sm sm:text-base leading-[22px] text-[#00000099] my-6 md:my-8">
            Browse through our diverse range of meticulously crafted garments
            designed <br className="hidden md:block" /> to bring out your
            individuality and cater to your sense of style.
          </div>

          <button className="rounded-[62px] px-[40px] md:px-[54px] py-3 md:py-4 bg-black gap-3 font-medium text-sm md:text-base leading-[21.6px] text-white">
            Shop Now
          </button>

          <div className="gap-8 flex flex-col sm:flex-row justify-center md:justify-start text-[#00000099] mt-10 md:mt-12">
            <div>
              <div className="font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[44px] md:leading-[54px] text-[#000000]">
                200+
              </div>
              <div className="font-normal text-sm md:text-base leading-[22px]">
                International Brands
              </div>
            </div>
            <div>
              <div className="font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[44px] md:leading-[54px] text-[#000000]">
                2,000+
              </div>
              <div className="font-normal text-sm md:text-base leading-[22px]">
                High-Quality Products
              </div>
            </div>
            <div>
              <div className="font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[44px] md:leading-[54px] text-[#000000]">
                30,000+
              </div>
              <div className="font-normal text-sm md:text-base leading-[22px]">
                Happy Customers
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 flex justify-center md:block">
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="w-[85%] sm:w-[65%] md:w-[500px] lg:w-[600px] md:hidden lg:block h-auto transition-all duration-300"
          />
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-10 md:right-32 lg:top-12 lg:right-12 flex flex-col gap-4">
            <Image
              src={Vector1}
              alt="Vector1"
              className="w-6 sm:w-8 md:w-10 lg:w-12 transition-all duration-300"
            />
            <Image
              src={vector}
              alt="Vector"
              className="w-6 sm:w-8 md:w-10 lg:w-12 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <BrandsPage />
      <Arrivals />
      <Footer />
    </>
  );
};

export default Home;
