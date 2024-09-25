import { CriptoCardProps } from "@/types/CriptoCardProps";
import { FaAngleRight } from "react-icons/fa";
import '../style/hoverAnima.css'

export function ButtonCripto() {
    return (
        <button className="flex justify-center items-center rounded-full w-16 h-16 border-2 border-solid border-purple-700 border-opacity-20 mt-9">
            <FaAngleRight className="w-7 h-7 text-blue-600" />
        </button>
    )
}

export const CriptoCard: React.FC<CriptoCardProps> = ({ img, title, text, symbol, color }) => {
    return (
        <article className="flex flex-col items-center rounded-2xl shadow-button bg-white gap-4 h-auto w-auto py-12 px-6 hoverCriptoCard">
            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${color}`}>
                {img({className: `w-12 h-12 text-white`})}
            </div>
            <div className="flex items-center gap-2 justify-center mt-9">
                <h2 className="text-center text-gray-900 text-2xl font-bold leading-12">
                    {title}
                </h2>
                <h5 className="text-center text-gray-300 text-lg font-medium leading-4 text-[16px]">
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