const LLAMA_API = 'https://coins.llama.fi/chart'
const CG_API = 'https://api.coingecko.com/api/v3/coins'

async function fetchChartData(geckoId, unixTimestamp, fullChart = false) {
    const llamaUrl = `${LLAMA_API}/coingecko:${geckoId}?start=${unixTimestamp}&span=${
        fullChart ? '1000' : '365'
    }`
    const geckoUrl = `${CG_API}/${geckoId}/market_chart?vs_currency=usd&days=${
        fullChart ? 'max' : '365'
    }`
    let response,
        chart = null

    response = await fetch(geckoUrl).then((r) => r.json())
    chart = response?.prices
    const cgChart = response

    if (!chart) {
        response = await fetch(llamaUrl).then((r) => r.json())
        chart = response?.coins?.[`coingecko:${geckoId}`]?.prices?.map(
            (price) => [price.timestamp * 1000, price.price]
        )
    }

    return chart ? { prices: chart, mcaps: cgChart?.market_caps || null } : null
}

export { fetchChartData }
