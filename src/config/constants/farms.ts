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
    lpSymbol: 'CID-BNB',
    lpAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    tokenSymbol: 'CID',
    tokenAddresses: {
      97: '',
      56: '0x2061A33ffc1aBAA10204Ab97771809340d5fE942',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    tokenSymbol: 'CID',
    tokenAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    lpSymbol: 'ETH-BNB',
    lpAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    tokenSymbol: 'CID',
    tokenAddresses: {
      97: '',
      56: '0x93f44521A0b6dDE17E8C4BB8e85E8c215d2EEf0e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }
]

export default farms
