'use client';

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B0E12]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-10">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={117}
            height={32}
          />
        </Link>
        <div className="hidden md:flex gap-8 font-inter text-white">
          <Link className="hover:scale-110 transition duration-300" href="#WebXV">Web XV</Link>
          <Link className="hover:scale-110 transition duration-300" href="#AllProjects">All projects</Link>
          <Link className="hover:scale-110 transition duration-300" href="#Community">Community</Link>
          <Link className="hover:scale-110 transition duration-300" href="#AboutUs">About us</Link>
        </div>
        <div className="hidden md:flex">
          <button className="bg-[#335DD2] hover:bg-[#3868ee] hover:scale-105 transition duration-300 ease-in-out rounded-lg px-5 py-2 text-white font-inter text-base tracking-[-0.02em]">
            REGISTER
          </button>
        </div>
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0B0E12] px-6 pb-4 space-y-3 text-white font-inter">
          <Link href="#WebXV" className="block hover:scale-105 transition duration-300">Web XV</Link>
          <Link href="#AllProjects" className="block hover:scale-105 transition duration-300">All projects</Link>
          <Link href="#Community" className="block hover:scale-105 transition duration-300">Community</Link>
          <Link href="#AboutUs" className="block hover:scale-105 transition duration-300">About us</Link>
          <button className="w-full bg-[#335DD2] hover:bg-[#3868ee] rounded-lg px-4 py-2 mt-2 text-white">
            REGISTER
          </button>
        </div>
      )}
    </nav>
  );
}
