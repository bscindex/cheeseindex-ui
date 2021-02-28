import BigNumber from 'bignumber.js'
import { getCidAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CID balance is at least the amount passed in
 */
const useHasCidBalance = (minimumBalance: BigNumber) => {
  const cidBalance = useTokenBalance(getCidAddress())
  return cidBalance.gte(minimumBalance)
}

export default useHasCidBalance
