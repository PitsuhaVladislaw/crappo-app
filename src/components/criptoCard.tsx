import { CriptoCardProps } from "@/types/CriptoCardProps";
import { FaAngleRight } from "react-icons/fa";
import '../style/hoverAnima.css';
import Link from "next/link";

export function ButtonCripto({link}: {link: string}) {
    const handleClick = (link: string): void => {
        window.location.href = link;
    }
    
    return (
        <button 
            className="flex justify-center items-center rounded-full w-16 h-16 border-2 border-solid border-purple-700 border-opacity-20 mt-9 criptoHoverBut"
            onClick={() => handleClick(link)}
        >
            <Link href={link}>
                <span 
                    className="text-white font-bold "
                >
                    Learn More
                </span>
                <FaAngleRight className="w-7 h-7 text-blue-600" />
            </Link>
        </button>
    );
}

export const CriptoCard: React.FC<CriptoCardProps> = ({ id, img: ImgComponent, title, text, symbol, link }) => {
    const getColor = (id: number) => {
        switch(id) {
            case 1:
                return "bg-blue-600";
            case 2:
                return "bg-yellow-500";
            case 3:
                return "bg-gray-400";
            default:
                return "bg-black";
        }
    }

    return (
        <article className="flex flex-col items-center rounded-2xl shadow-lg bg-white gap-4 h-auto w-auto py-12 px-6 hoverCriptoCard">
            <div className={`flex items-center justify-center w-20 h-20 ${getColor(id)} rounded-full` }>
                <ImgComponent className="w-12 h-12 text-white" />
            </div>
            <div className="flex items-center gap-2 justify-center mt-9">
                <h2 className="text-center text-gray-900 text-2xl font-bold leading-tight">
                    {title}
                </h2>
                <h5 className="text-center text-gray-300 text-lg font-medium leading-4">
                    {symbol}
                </h5>
            </div>
            <p className="text-center text-base font-normal leading-7 tracking-tighter w-80">
                {text}
            </p>
            <ButtonCripto link={link} />
        </article>
    );
};