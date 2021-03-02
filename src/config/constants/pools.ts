import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    csiId: 0,
    tokenName: 'CID',
    earnToken: 'CID',
    stakingTokenName: QuoteToken.CID,
    stakingTokenAddress: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    contractAddress: {
      97: '',
      56: '0xC78F0Ad92591Ce4902653C5089C7358CED058721',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://bscindex.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

]

export default pools
