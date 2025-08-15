'use client';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Hero() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative bg-[#0B0E12] w-full">
      <div
        className="absolute inset-0 bg-[url('/assets/hero.png')] bg-cover bg-center opacity-30 md:opacity-100"
      ></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="font-extrabold font-inter tracking-tighter text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight">
            Welcome to WebXV
          </h1>
          <p className="font-inter text-[#E2E6E7] text-lg sm:text-xl leading-8 max-w-md mx-auto md:mx-0">
            Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>
          <button className="bg-[#335DD2] hover:scale-110 transition duration-300 ease-in-out hover:bg-[#3868ee] rounded-lg px-6 py-3 text-white text-lg font-inter font-semibold">
            REGISTER NOW
          </button>
        </div>
        <div className="flex-1 max-w-md bg-[#0E151B] shadow-[#00000033] shadow-2xl rounded-3xl p-6 space-y-6">
          <h2 className="font-inter font-semibold text-2xl sm:text-3xl text-white text-center">
            Welcome back
          </h2>
          
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username or email"
              className="w-full hover:scale-105 transition duration-300 ease-in-out font-light text-base font-inter text-[#E2E6E7] bg-[#18222F] p-4 rounded-lg"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full hover:scale-105 transition duration-300 ease-in-out font-light text-base font-inter text-[#E2E6E7] bg-[#18222F] p-4 rounded-lg pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="w-full hover:scale-105 transition duration-300 ease-in-out hover:bg-[#3868ee] px-4 py-3 rounded-xl bg-[#335DD2] font-inter font-semibold text-base text-white">
              LOGIN
            </button>
          </div>

          <p className="text-[#E2E6E7] text-sm text-center">
            Forgotten your password?
          </p>
          <p className="text-[#E2E6E7] text-sm text-center">
            Don’t have an account?{" "}
            <span className="text-[#2e58ce] font-semibold cursor-pointer">Register</span>
          </p>
        </div>
      </div>
    </section>
  );
}
