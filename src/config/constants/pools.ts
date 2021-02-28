import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    csiId: 0,
    tokenName: 'CID',
    earnToken: 'CID',
    stakingTokenName: QuoteToken.CID,
    stakingTokenAddress: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    contractAddress: {
      97: '',
      56: '0x2fE9263BF105095e16167C093C4d28140e936E1b',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://cidswap.finance/',
    harvest: true,
    tokenPerBlock: '60.0',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
