"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for navigation after logout
import CartIcon from "../../../assets/cart.png";
import Frame from "../../../assets/Frame.png";
import Logo from "../../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // 🧹 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("userSession"); // or remove any saved auth key
    router.push("/sign-in"); // redirect to sign-in page
  };

  return (
    <>
      <div className="bg-black flex justify-center p-2 text-white text-sm">
        <p className="text-center">
          Sign up and get 20% off your first order.{" "}
          <a href="#" className="underline font-medium">
            Sign Up Now
          </a>
        </p>
      </div>

      <nav className="w-full shadow-sm bg-white">
        <div className="max-w-7xl px-4 md:px-2 py-8 flex justify-between items-center">
          <div className="flex items-center gap-2 ml-24">
            <Image src={Logo} alt="logo" width={160} height={35} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-gray-900">
            <Link href="#" className="font-medium text-xl flex items-center gap-1 hover:text-gray-600">
              Shop <Image src={Frame} alt="arrow" className="w-3 h-3" />
            </Link>
            <Link href="#" className="font-medium text-xl flex items-center gap-1 hover:text-gray-600">
              On Sale <Image src={Frame} alt="arrow" className="w-3 h-3" /> 
            </Link>
            <Link href="#" className="font-medium text-xl flex items-center gap-1 hover:text-gray-600">
              New Arrivals <Image src={Frame} alt="arrow" className="w-3 h-3" />
            </Link>
            <Link href="#" className="font-medium text-xl flex items-center gap-1 hover:text-gray-600">
              Brands <Image src={Frame} alt="arrow" className="w-3 h-3" />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 mr-6">
            <button>
              <Image src={CartIcon} alt="cart" width={70} height={70} />
            </button>

            {/* ✅ Logout Button */}
            <button
              onClick={handleLogout}
              className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black text-2xl"
            >
              {isOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col items-start gap-4 p-4 text-gray-800">
              <Link href="#" className="font-medium text-base hover:bg-gray-400 border hover:border-gray-600 w-full text-center rounded-md py-2">
                Shop
              </Link>
              <Link href="#" className="font-medium text-base hover:bg-gray-400 border hover:border-gray-600 w-full text-center rounded-md py-2">
                On Sale
              </Link>
              <Link href="#" className="font-medium text-base hover:bg-gray-400 border hover:border-gray-600 w-full text-center rounded-md py-2">
                New Arrivals
              </Link>
              <Link href="#" className="font-medium text-base hover:bg-gray-400 border hover:border-gray-600 w-full text-center rounded-md py-2">
                Brands
              </Link>

              {/* ✅ Mobile Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-black text-white w-full rounded-md py-2 font-medium hover:bg-gray-800 transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
