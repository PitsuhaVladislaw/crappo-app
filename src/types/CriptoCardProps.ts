import { LuBitcoin } from "react-icons/lu";
import { FaEthereum} from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";

export type CriptoCardProps = {
    id: number;
    img: any;
    title: string;
    text: string;
    symbol: string;
}

export const criptoCardArray: CriptoCardProps[] = [
    {
        id: 1,
        img: LuBitcoin,
        title: "Bitcoin",
        text: "Digital currency in which a record of transactions is maintained.",
        symbol: "BTC"
    },
    {   
        id: 2,
        img: FaEthereum,
        title: "Ethereum",
        text: "Blockchain technology to create and run decentralized digital applications.",
        symbol: "ETH"
    },
    {
        id: 3,
        img: FaLitecoinSign,
        title: "Litecoin",
        text: "Cryptocurrency that enables instant payments to anyone in the world.",
        symbol: "LTC"
    }
];