import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CID',
    lpAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    tokenSymbol: 'CSI',
    tokenAddresses: {
      97: '',
      56: '0x2061A33ffc1aBAA10204Ab97771809340d5fE942',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CID-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9Aa251cFaBdA84F750DDE8A227F9240aE11E9f8C',
    },
    tokenSymbol: 'CID',
    tokenAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
   {
    pid: 4,
    lpSymbol: 'CTK-CHS LP',
    lpAddresses: {
      97: '',
      56: '0xa5A1e8855A0D4f6C7Df6F1574CEa79ba9Ca47ff7',
    },
    tokenSymbol: 'CTK',
    tokenAddresses: {
      97: '',
      56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
   {
    pid: 5,
    lpSymbol: 'CTK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaeA443b0B54E255DAfeCD6766C7d36D8DF8F529E',
    },
    tokenSymbol: 'CTK',
    tokenAddresses: {
      97: '',
      56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
