import Image from "next/image";

export default function CTA() {
    return (
        <div className="relative w-full h-[480px] bg-[#0B0E12]">
            <Image
                src="/assets/shadow.png"
                alt="shadow"
                fill
                className="rotate-180 object-cover"
                priority
            />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 max-w-[780px] w-full px-4 grid justify-items-center content-center gap-6 font-inter text-center">
                <h1 className="font-bold text-[32px] md:text-[56px] leading-tight -tracking-[0.03em] text-[#FFFFFF]">
                    With XV Token the <br className="hidden md:block" /> possibilities are limitless
                </h1>
                <p className="font-normal text-[18px] md:text-[22px] leading-8 -tracking-[0.02em] text-[#E2E6E7]">
                    One token for everything. $XV is the utility token for an ecosystem that has <br className="hidden md:block" /> 
                    gotten bigger than ever before and is now fully community-oriented.
                </p>
                <button className="w-[200px] h-16 rounded-lg hover:scale-105 hover:duration-300 hover:ease-in-out hover:bg-[#3868ee] bg-[#335DD2] font-semibold text-lg leading-8 tracking-[-0.02em] text-[#FFFFFF]">
                    REGISTER NOW
                </button>
            </div>
        </div>
    );
}
