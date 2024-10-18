"use client"

import { TypeInfaSect } from "@/types/TypeInfaSect"
import "../style/coinPage.css"
import Bitcoin1 from '@/assets/img/bitcoin1.png'
import Bitcoin2 from '@/assets/img/bitcoin2.png'
import Bitcoin3 from '@/assets/img/bitcoin3.png'
import Litecoin1 from '@/assets/img/litecoin1.png';
import Litecoin2 from '@/assets/img/litecoin2.png';
import Litecoin3 from '@/assets/img/litecoin3.png';
import Ethereum1 from '@/assets/img/ethereum1.png';
import Ethereum2 from '@/assets/img/ethereum2.png';
import Ethereum3 from '@/assets/img/ethereum3.png';
import Image from "next/image";

export interface infoPage {
    nameCri: string;
    obj: TypeInfaSect[];
}

const InfoPage: React.FC<infoPage> = ({nameCri, obj}) => {
    const getIcon = (iconName: string) => {
        switch(iconName) {
            case "Bitcoin1":
                return Bitcoin1;

            case "Bitcoin2":
                return Bitcoin2;

            case "Bitcoin3":
                return Bitcoin3;

            case "Litecoin1":
                return Litecoin1;

            case "Litecoin2":
                return Litecoin2;

            case "Litecoin3":
                return Litecoin3;
                
            case "Ethereum1":
                return Ethereum1;

            case "Ethereum2":
                return Ethereum2;

            case "Ethereum3":
                return Ethereum3;

            default:
                return Bitcoin1;
        }
    }

    return(
        <div className="flex flex-col items-center gap-20 justify-between p-20">
            <h1 className="text-4xl font-bold text-center text-white mb-1">
                Description of {nameCri}
            </h1>
            {obj.map((sect: TypeInfaSect, index: number) => {
            const IconComponent = getIcon(sect.iconName);
            
            return (
                <div 
                    className={`flex ${index === 1 ? 'flex-row-reverse' : ''} items-start justify-around gap-20`}
                    key={index}
                >
                    <Image 
                        src={IconComponent}
                        className="text-white w-96 h-96"
                        alt={sect.iconName}
                    />
                    <section className="history-section p-8 bg-gray-800 rounded-lg my-1 w-full">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            {sect.info.title}
                        </h2>
                        <p className="text-gray-300">
                            {sect.info.text1}
                        </p>
                        <br />
                        <p className="text-gray-300">
                            {sect.info.text2}
                        </p>
                        <br />
                        <p className="text-gray-300">
                            {sect.info.text3}
                        </p>
                    </section>
                </div>
                );
            })}
        </div>
    )
}

export default InfoPage;