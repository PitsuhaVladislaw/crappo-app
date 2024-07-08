import Image from "next/image";
import Img from "../assets/img/Illustrations.png";

interface ButtonProps {
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className="w-auto h-auto p-4 gap-6 rounded-3xl bg-blue-500 ">
            <h6 className="text-base font-medium leading-27 text-center text-white">{text}</h6>
        </button>
    );
};


export default function WhyCrappo() {
    return (
        <section className="flex flex-col gap-24">
            <article className="flex justify-between w-auto h-92">
            </article>
            <article className="flex justify-evenly items-center gap-16">
                <Image alt="Picture" className="w-650 h-473" src={Img} />
                <div className="flex flex-col items-start justify-between gap-6 w-96">
                    <h2 className="w text-4xl font-bold leading-20 text-left text-white">Why you should choose CRAPPO</h2>
                    <p className="font-rubik text-base font-normal leading-7 tracking-tighter text-left text-gray-300">
                        Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                    </p>
                    <Button text="Learn more" />
                </div>
            </article>
        </section>
    );
}