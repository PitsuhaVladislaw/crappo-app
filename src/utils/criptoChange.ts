import { getBitcoinPrice, getEthereumPrice, getLitecoinPrice } from "./criptoPrice";

let preBitcoinPrice: number | null = null;
let preEthereumPrice: number | null = null;
let preLitecoinPrice: number | null = null;

function calculateChange(prevPrice: number | null, curPrice: number): string {
    if (prevPrice === null) {
        return "Fail";
    }
    const change = ((curPrice - prevPrice) / prevPrice) * 100;
    if (change > 0) {
        return `+${change.toFixed(2)}%`;
    } else if (change < 0) {
        return `-${Math.abs(change).toFixed(2)}%`;
    } else {
        return "Price didn't change";
    }
}

export async function getBitcoinChange() {
    const price = await getBitcoinPrice();
    const change = calculateChange(preBitcoinPrice, price);

    preBitcoinPrice = price;
    return change;
}

export async function getEthereumChange() {
    const price = await getEthereumPrice();
    const change = calculateChange(preEthereumPrice, price);
    
    preEthereumPrice = price;
    return change;
}

export async function getLitecoinChange() {
    const price = await getLitecoinPrice();
    preLitecoinPrice = price;
    const change = calculateChange(preLitecoinPrice, price);

    return change;
}