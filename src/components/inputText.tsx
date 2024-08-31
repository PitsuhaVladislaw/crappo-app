import { CriptoArrayItems } from '@/types/CriptoArrayItems';
import React from 'react';

const InputText: React.FC<CriptoArrayItems> = ({ icon, color, short, title, price, change, volume }): JSX.Element => {
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
                    ${price()}
                </h4>
            </div>
            <div className='table-cell'>
                <h4 className='font-inter text-lg font-normal leading-relaxed text-left text-gray-300'>
                    {change()}
                </h4>
            </div>
            <div className='table-cell'>
                <h4 className='font-inter text-lg font-normal leading-relaxed text-left text-gray-300'>
                    ${volume()}
                </h4>
            </div>
        </div>
    )
}

export default InputText;