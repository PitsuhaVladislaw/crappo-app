import BitcoinGraf from "./bitcoinGraf";
import GrowProfit from "./growProfit";

type descProps = {
    id: number;
    title: string;
    desc: string;
    link: string;
}

const descArray: descProps[] = [
    {
        id: 1,
        title: "Grow your profit and track your investments",
        desc: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.", 
        link: "#"
    },
    {
        id: 2,
        title: "Detailed Statistics",
        desc: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.", 
        link: "#"
    },
    {
        id: 3,
        title: "Grow your profit and track your investments",
        desc: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.", 
        link: "#"
    }
]

export const Description: React.FC<descProps> = ({id}) => {
    const item = descArray.find(item => item.id === id);

    if(!item) {
        return null;
    }

    return(
        <div className="flex flex-col items-start justify-between gap-6 w-auto h-auto mt-10">
            <h2 className="text-4xl font-bold leading-[48px] text-left text-white w-[454px]">
                {item.title}
            </h2>
            <p className="text-base font-normal leading-[28px] tracking-[0.01em] text-left text-gray-300 mt-4 w-a">
                {item.desc}
            </p>
            <button
                className="custom-button bg-blue-500 hover:bg-blue-700 text-white mt-4 rounded-full px-8 py-4 cursor-pointer"
                onSubmit={() => {}}
            >
                <h6 className="font-rubik text-lg font-medium leading-[27px] text-center">
                    Learn More
                </h6>
            </button>
        </div>
    )
}

export default function Features() {
    return(
        <section className="flex flex-col items-center gap-25 bg-gradient-to-b from-purple-900 to-purple-800">
            <h1 className="w-[758px] font-rubik text-4xl font-bold leading-60 text-center text-white">
                Market sentiments, portfolio, and run the infrastructure of your choice
            </h1>
            <article className="flex items-start justify-evenly mt-24">
                <Description id={1} title="" desc="" link=""/>
                <BitcoinGraf />
            </article>
            <article className="mt-5">
                <Description id={2} title="" desc="" link="" />
            </article>
            <article className="flex mt-5">
                <Description id={3} title="" desc="" link="" />
                <GrowProfit />
            </article>
        </section>
    )
}