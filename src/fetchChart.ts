async function fetchChartData(geckoId, unixTimestamp) {
    const llamaUrl = `https://coins.llama.fi/chart/coingecko:${geckoId}w?start=${unixTimestamp}&span=365`
    const geckoUrl = `https://api.coingecko.com/api/v3/coins/${geckoId}/market_chart?vs_currency=usd&days=365`
    let response,
        chart = null

    response = await fetch(geckoUrl).then((r) => r.json())
    chart = response?.prices

    if (!chart) {
        response = await fetch(llamaUrl).then((r) => r.json())
        chart = response?.coins?.[`coingecko:${geckoId}`]?.prices?.map(
            (price) => [price.timestamp * 1000, price.price]
        )
    }

    return chart ? { prices: chart } : null
}

export { fetchChartData }
