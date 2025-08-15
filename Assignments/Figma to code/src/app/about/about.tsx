import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full min-h-[552px] bg-[#0B0E12] flex flex-col lg:flex-row justify-evenly items-center px-6 lg:px-16">
      <div className="max-w-[480px] grid gap-6">
        <div className="grid gap-4">
          <p className="font-inter font-semibold text-lg leading-7 text-[#335DD2] tracking-[0.02em]">
            About Us
          </p>
          <p className="font-inter font-bold text-4xl lg:text-5xl leading-tight text-white tracking-[0.02em]">
            Who We Are
          </p>
        </div>
        <div className="grid gap-4 font-inter font-normal text-base lg:text-lg leading-7 tracking-[0.02em] text-[#828493] mt-4">
          <p>
            XV is a community-focused project led by a highly experienced team of Web3 builders and traders. Our founder A On made his name in the industry moderating for several early crypto projects before the 2021 bull run.
          </p>
          <p>
            XV is also supported by several team members that are actively involved in the day-to-day running of the community. Join us on Telegram and Twitter.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-[810px] h-[392px] mt-8 lg:mt-0">
        <Image
          src="/assets/Image.png"
          alt="Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
