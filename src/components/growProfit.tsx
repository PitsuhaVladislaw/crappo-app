import React from 'react';
import '../style/inputText.css';
import '../style/iconBlockStatic.css'
import { LuBitcoin } from "react-icons/lu";
import { FaEthereum } from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";
import { getBitcoinPrice, getEthereumPrice, getLitecoinPrice } from '../utils/criptoApi';
import { CriptoArrayItems } from '@/types/CriptoArrayItems';

const criptoArray: CriptoArrayItems[] = [
    {
        icon: LuBitcoin,
        color: 'rgba(249, 170, 75, 1)',
        short: "BTC",
        title: "Bitcoin",
        price: () => getBitcoinPrice(),
        change: () => null,
        volume: () => null
    },
    {
        icon: FaEthereum,
        color: 'rgba(99, 116, 195, 1)',
        short: "ETH",
        title: "Ethereum",
        price: () => getEthereumPrice(),
        change: () => null,
        volume: () => null
    },
    {
        icon: FaLitecoinSign,
        color: 'rgba(89, 193, 156, 1)',
        short: "LTC",
        title: "Litecoin",
        price: () => getLitecoinPrice(),
        change: () => null,
        volume: () => null 
    },
];

export const InputText: React.FC<CriptoArrayItems> = ({ icon, color, short, title, price, change, volume }): JSX.Element => {
    return (
        <div className='table-row'>
            <div className='flex items-center gap-4'>
                <div style={{backgroundColor: color}} className="icon-block">
                    {React.createElement(icon)}
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <h2 className='font-inter text-lg font-bold leading-tight text-left text-white'>
                        {short}
                    </h2>
                    <h3 className='font-inter text-base font-normal leading-relaxed tracking-wide text-left text-gray-300'>
                        {title}
                    </h3>
                </div>
            </div>
            <div className='table-cell'>
                <h4 className='font-inter text-lg font-normal leading-relaxed text-left text-gray-300'>
                    {price()}
                </h4>
            </div>
            <div className='table-cell'>
                <h4 className='font-inter text-lg font-normal leading-relaxed text-left text-gray-300'>
                    {change()}
                </h4>
            </div>
            <div className='table-cell'>
                <h4 className='font-inter text-lg font-normal leading-relaxed text-left text-gray-300'>
                    {volume()}
                </h4>
            </div>
        </div>
    )
}

const GrowProfit = () => {
    return (
        <div className="bg-custom rounded-lg p-10 table w-full">
            <div className='table-row'>
                {["", "Price", "Change", "Volume(24h)"].map((item, index) => (
                    <div className='table-cell' key={index}>
                        <h5 className='font-inter text-base font-semibold leading-tight text-left text-white'>
                            {item}
                        </h5>
                    </div>
                ))}
            </div>
            {criptoArray.map((item, index) => (
                <InputText 
                    key={index}
                    color={item.color}
                    icon={item.icon}
                    short={item.short}
                    title={item.title}
                    price={item.price} 
                    change={item.change} 
                    volume={item.volume} 
                />
            ))}
        </div>
    )
}

export default GrowProfit;