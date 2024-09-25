import { LuBitcoin } from "react-icons/lu";
import { FaEthereum} from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";

export type CriptoCardProps = {
    img: any;
    title: string;
    text: string;
    symbol: string;
    color: string;
}

export const criptoCardArray: CriptoCardProps[] = [
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