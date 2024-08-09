import { FetchBitcoinData } from "@/utils/FetchBitcoinData";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { useEffect, useState, useRef } from "react";

Chart.register(...registerables);

const BitcoinGraf = () => {
    const [bitcoinData, setBitcoinData] = useState<number[]>([]);
    const [priceIncrease, setPriceIncrease] = useState<number>(100)
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchBitcoinData();
            if (data) {
                setBitcoinData(prevData => [...prevData, data.bitcoin.usd]);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 60000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Bitcoin Price',
                        data: bitcoinData.map((value, index) => ({
                            x: index + 1,
                            y: value,
                            r: 7
                        })),
                        backgroundColor: 'RGB(110, 220, 181)',
                        borderColor: 'rgba(110, 220, 181)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            } as ChartConfiguration);
        }
    }, [bitcoinData]);

    return (
        <div className="relative w-[580px] h-[427px] ml-24">
            <div className="flex flex-col bg-blue-800 rounded-2xl w-[580px] h-[298px] absolute top-0 left-0  p-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-start gap-4">
                        <div className="">

                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-2">
                                <h5 className="font-inter leading-[29.05px] text-white">
                                    Bitcoin
                                </h5>
                                <h6 className="font-inter leading-[19.36px] text-gray-500">
                                    BTC
                                </h6>
                            </div>
                            <p className="font-inter text-p font-p leading-[16.94px] tracking-[0.01em] text-gray-300">
                                {} BTC
                            </p>
                        </div>
                    </div>
                    <h5 className="font-inter text-base font-medium text-right text-green-400">
                        {priceIncrease} %
                    </h5>
                </div>
                <canvas 
                    className="h-[136px]" 
                    ref={chartRef} 
                    id="bitChart"
                ></canvas>
            </div>
            <div className="flex flex-col items-start rounded-2xl gap-4 shadow-lg bg-purple-700 absolute bottom-4 left-16 z-10 h-[184px] w-[178px]">
                
            </div>
            <div className="flex justify-center items-center rounded-2xl shadow-lg bg-purple-700 absolute bottom-20 right-10 z-10 h-[84px] w-[169px]">
                
            </div>
        </div>
    );
}

export default BitcoinGraf;