import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'

const useGetProfileCosts = () => {
  const [costs, setCosts] = useState({
    numberCidToReactivate: new BigNumber(0),
    numberCidToRegister: new BigNumber(0),
    numberCidToUpdate: new BigNumber(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberCidToReactivate, numberCidToRegister, numberCidToUpdate] = await makeBatchRequest([
          profileContract.methods.numberCidToReactivate().call,
          profileContract.methods.numberCidToRegister().call,
          profileContract.methods.numberCidToUpdate().call,
        ])

        setCosts({
          numberCidToReactivate: new BigNumber(numberCidToReactivate as string),
          numberCidToRegister: new BigNumber(numberCidToRegister as string),
          numberCidToUpdate: new BigNumber(numberCidToUpdate as string),
        })
      } catch (error) {
        toastError('Error', 'Could not retrieve CID costs for profile')
      }
    }

    fetchCosts()
  }, [setCosts, toastError])

  return costs
}

export default useGetProfileCosts
