import Image from "next/image";
import Square from '../assets/img/square-3d.png'
import FormMining from "@/utils/FormMining";

export default function StartMining() {
    return(
        <section className="flex-col my-[88px] flex justify-center items-center bg-gradient-to-b from-purple-900 to-black w-auto">
            <div className="flex items-center justify-between bg-blue-500 rounded-lg p-12 relative overflow-hidden">
                <article className="flex flex-col items-start gap-4">
                    <h4 className="font-rubik text-white text-3xl font-bold leading-12 text-left">
                        Start mining now
                    </h4>
                    <p className="text-white text-base font-normal leading-7 tracking-tighter text-left w-[348px]">
                        Join now with CRAPPO to get the latest news and start mining now
                    </p>
                </article>
                <FormMining />
                <Image 
                    src={Square} 
                    alt="square" 
                    className="absolute -top-11 left-6 w-auto h-auto"
                />
            </div>
        </section>
    )
}