import Image from "next/image";
import Square from '../assets/img/square-3d.png'

export default function StartMining() {
    return(
        <section className="flex-col my-[88px] flex justify-center items-center bg-gradient-to-b from-purple-900 to-black w-auto">
            <div className="flex items-center justify-around bg-blue-500 rounded-lg p-12 relative overflow-hidden">
                <article className="flex flex-col items-start gap-4">
                    <h5 className="text-white text-left text-2xl font-bold leading-12">
                        Start mining now
                    </h5>
                    <p className="text-white text-left text-2xl font-bold leading-12 w-[348px]">
                        Join now with CRAPPO to get the latest news and start mining now
                    </p>
                </article>
                <article className="">

                </article>
                <Image 
                    src={Square} 
                    alt="square" 
                    className="absolute -top-11 left-6 w-auto h-auto"
                />
            </div>
        </section>
    )
}