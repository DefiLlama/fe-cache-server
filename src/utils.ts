export const chartExist = {
    tvl: () => true,
    mcap: ({ protocolData }) => !!protocolData.gecko_id,
    tokenPrice: ({ protocolData }) => !!protocolData.gecko_id,
    fdv: ({ protocolData }) => !!protocolData.gecko_id,
    volume: ({ protocolData }) => protocolData?.metrics.dexs,
    derivativesVolume: ({ protocolData }) => protocolData?.metrics?.derivative,
    fees: ({ protocolData }) => protocolData?.metrics.fees,
    revenue: ({ protocolData }) => protocolData?.metrics.fees,
    unlocks: ({ protocolData }) => protocolData?.metrics.unlocks,
    activeUsers: (props) => !!props.users,
    newUsers: (props) => !!props.users,
    events: ({ protocolData }) => protocolData?.hallmarks?.length > 0,
    transactions: (props) => !!props.users,
    gasUsed: (props) => !!props.users,
    medianApy: ({ protocolData }) => protocolData?.metrics.medianApy,
    usdInflows: ({ protocolData }) => protocolData?.metrics.inflows,
    governance: (props) => !!props?.governanceApis?.length,
    treasury: ({ protocolData }) => protocolData?.metrics.treasury,
    bridgeVolume: ({ protocolData }) => protocolData?.metrics.bridge,
    tokenVolume: ({ protocolData }) => !!protocolData.gecko_id,
    tokenLiquidity: ({ protocolData }) => !!protocolData.gecko_id,
    twitter: ({ protocolData }) => !!protocolData?.twitter,
    devMetrics: ({ protocolData }) => protocolData?.metricsdevMetrics,
    contributersMetrics: ({ protocolData }) => protocolData?.metricsdevMetrics,
    contributersCommits: ({ protocolData }) => protocolData?.metricsdevMetrics,
    devCommits: ({ protocolData }) => protocolData?.metricsdevMetrics,
    nftVolume: ({ protocolData }) => protocolData?.metricsnftVolume,
    staking: ({ protocolData }) =>
        !!protocolData?.historicalChainTvls['staking']?.tvl?.length,
    borrowed: ({ protocolData }) =>
        !!protocolData?.historicalChainTvls['borrowed']?.tvl?.length,
}

export const sluggify = (input: string) => {
    const slug = decodeURIComponent(input)
        .toLowerCase()
        .replace(/[^\w\/]+/g, '-')
    return slug.replace(/^-+/, '').replace(/-+$/, '')
}
