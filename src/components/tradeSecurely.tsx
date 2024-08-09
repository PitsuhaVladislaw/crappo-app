import { LuBitcoin } from "react-icons/lu";
import { FaEthereum} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";
import { CriptoCardProps } from "@/types/CriptoCardProps";

export function ButtonCripto() {
    return (
        <button className="flex justify-center items-center rounded-full w-16 h-16 border-2 border-solid border-purple-700 border-opacity-20 mt-9">
            <FaAngleRight className="w-7 h-7 text-blue-600" />
        </button>
    )
}

const criptoCardArray: CriptoCardProps[] = [
    {
        img: LuBitcoin,
        title: "Bitcoin",
        text: "Digital currency in which a record of transactions is maintained.",
        symbol: "BTC",
        color: "bg-blue-600"
    },
    {
        img: FaEthereum,
        title: "Ethereum",
        text: "Blockchain technology to create and run decentralized digital applications.",
        symbol: "ETH",
        color: "bg-yellow-500"
    },
    {
        img: FaLitecoinSign,
        title: "Litecoin",
        text: "Cryptocurrency that enables instant payments to anyone in the world.",
        symbol: "LTC",
        color: "bg-gray-400"
    }
];

export const CriptoCard: React.FC<CriptoCardProps> = ({ img, title, text, symbol, color }) => {
    return (
        <article className="flex flex-col items-center rounded-2xl shadow-button bg-white gap-4 h-auto w-auto py-12 px-6">
            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${color}`}>
                {img({className: `w-12 h-12 text-white`})}
            </div>
            <div className="flex items-center gap-2 justify-center mt-9">
                <h2 className="text-center text-gray-900 text-2xl font-bold leading-12">
                    {title}
                </h2>
                <h5 className="text-center text-gray-700 text-lg font-medium leading-7">
                    {symbol}
                </h5>
            </div>
            <p className="text-center text-body-small font-rubik text-base font-normal leading-7 tracking-tighter w-80">
                {text}
            </p>
            <ButtonCripto />
        </article>
    )
}

export default function TradeSecurely() {
    return (
        <section className="flex flex-col items-center bg-neutral-light p-0">
            <article className="flex flex-col items-center justify-center bg-[rgba(13, 13, 43, 1)] my-10 gap-6">
                <h2 className="text-center text-white text-4xl font-bold leading-60">
                    Check how much you can earn
                </h2>
                <p className="text-center text-gray-300 text-lg font-normal leading-7 w-3/4">
                    Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
                </p>
            </article>
            <article className="mt-10 pb-24 flex flex-col gap-16 w-full bg-gradient-to-b from-gray-200 to-gray-100">
                <h3 className="text-center text-primary text-4xl font-bold leading-60 w-3/4 mt-10 my-0 mx-auto">
                    Trade securely and market the high growth cryptocurrencies.
                </h3>
                <div className="flex flex-wrap justify-around gap-[45px]">
                    {criptoCardArray.map((obj, index) => (
                        <CriptoCard
                            key={index}
                            img={obj.img}
                            text={obj.text}
                            title={obj.title}
                            symbol={obj.symbol}
                            color={obj.color}
                        />
                    ))}
                </div>
            </article>
        </section>
    )
}