import Image from "next/image";

export default function Logos() {
    return (
        <div className="relative w-full h-auto bg-[#0B0E12] py-10">
            <p className="text-center text-[#335DD2] font-inter font-bold text-[22px] leading-8 tracking-[0.02em] mb-8">
                OUR PARTNERS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 px-4">
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/uniramp.png" alt="Uniramp Logo" width={151} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/pinksale.png" alt="Pinksale Logo" width={160} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/uniswap.png" alt="Uniswap Logo" width={147} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/coin.png" alt="Coin Logo" width={141} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/pancake.png" alt="Pancake Logo" width={152} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/dex.png" alt="Dex Logo" width={164} height={40} />
                </div>
                <div className="hover:scale-125 transition-transform duration-300 ease-in-out">
                    <Image src="/assets/logo/coinmarket.png" alt="CoinMarket Logo" width={148} height={40} />
                </div>
            </div>
        </div>
    );
}
