export async function getBitcoinPrice(): Promise<string> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const price = data.bitcoin.usd;

    return `$${price}`;
}

export async function getEthereumPrice(): Promise<string> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data = await response.json();
    const price = data.ethereum.usd;

    return `$${price}`;

}

export async function getLitecoinPrice(): Promise<string> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd');
    const data = await response.json();
    const price = data.litecoin.usd;

    return `$${price}`;
}