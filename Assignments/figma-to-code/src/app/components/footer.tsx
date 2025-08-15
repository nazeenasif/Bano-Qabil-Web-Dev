import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E12] w-full">
      <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-16 grid gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <Link href="./">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={117}
              height={32}
              className="mb-6"
            />
          </Link>
          <p className="text-[#A7B5C3] font-normal font-inter text-base leading-6 tracking-[-0.02em] mb-4">
            A SocialFi platform for Web3.0 projects to connect with users.
          </p>
          <p className="text-[#A7B5C3] font-normal font-inter text-base leading-6 tracking-[-0.02em]">
            WebXV is a decentralized social platform for Web3.0 users to meet
            and connect with one another.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          <div>
            <p className="font-inter font-semibold text-xl leading-7 tracking-[-0.02em] text-[#FFFFFF] mb-6">
              Company
            </p>
            <nav className="grid gap-2 text-[#A7B5C3] font-inter font-normal text-base leading-6 tracking-[-0.02em]">
              <Link href="#" className="hover:scale-105 hover:duration-300 hover:ease-in-out">About us</Link>
              <Link href="#" className="hover:scale-105 hover:duration-300 hover:ease-in-out">Projects</Link>
              <Link href="#" className="hover:scale-105 hover:duration-300 hover:ease-in-out">Community</Link>
              <Link href="#" className="hover:scale-105 hover:duration-300 hover:ease-in-out">Privacy Policy</Link>
              <Link href="#" className="hover:scale-105 hover:duration-300 hover:ease-in-out">Terms & Conditions</Link>
            </nav>
          </div>
          <div>
            <p className="font-inter font-semibold text-xl leading-7 tracking-[-0.02em] text-[#FFFFFF] mb-6">
              Social
            </p>
            <nav className="grid gap-2 text-[#A7B5C3] font-inter font-normal text-base leading-6 tracking-[-0.02em]">
              <Link href="#" className="hover:scale-105 duration-300 ease-in-out">Tiktok</Link>
              <Link href="#" className="hover:scale-105 duration-300 ease-in-out">Twitter</Link>
              <Link href="#" className="hover:scale-105 duration-300 ease-in-out">Youtube</Link>
              <Link href="#" className="hover:scale-105 duration-300 ease-in-out">Telegram</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 pb-6 text-center md:text-right">
        <p className="text-[#A7B5C3] font-inter font-normal text-sm leading-5 tracking-[-0.02em]">
          © Copyright 2023 XV | All Rights Reserved | WhitePaper
        </p>
      </div>
    </footer>
  );
}
