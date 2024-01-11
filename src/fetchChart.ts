async function fetchChartData(geckoId, unixTimestamp) {
    const llamaUrl = `https://coins.llama.fi/chart/coingecko:${geckoId}w?start=${unixTimestamp}&span=365`
    const geckoUrl = `https://api.coingecko.com/api/v3/coins/${geckoId}/market_chart?vs_currency=usd&days=365`

    try {
        let response = await fetch(llamaUrl).then((r) => r.json())
        let chart = response?.coins?.[`coingecko:${geckoId}`]?.prices?.map(
            (price) => [price.timestamp * 1000, price.price]
        )

        if (!chart) {
            response = await fetch(geckoUrl).then((r) => r.json())
            chart = response?.prices
        }

        return chart ? { prices: chart } : null
    } catch (error) {
        console.error('Error fetching chart data:', error)
        return null
    }
}

export { fetchChartData }
