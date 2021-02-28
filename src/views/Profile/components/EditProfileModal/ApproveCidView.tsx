import React, { useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { AutoRenewIcon, Button, Flex, InjectedModalProps, Text } from '@bscindex/uikit'
import useI18n from 'hooks/useI18n'
import { useCid } from 'hooks/useContract'
import { useProfile, useToast } from 'state/hooks'
import { getCheeseIndexTokenProfileAddress } from 'utils/addressHelpers'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useGetProfileCosts from '../../hooks/useGetProfileCosts'
import { UseEditProfileResponse } from './reducer'

interface ApproveCidPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
}

const ApproveCidPage: React.FC<ApproveCidPageProps> = ({ goToChange, onDismiss }) => {
  const [isApproving, setIsApproving] = useState(false)
  const { profile } = useProfile()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const { numberCidToUpdate, numberCidToReactivate } = useGetProfileCosts()
  const cidContract = useCid()
  const { toastError } = useToast()
  const cost = profile.isActive ? numberCidToUpdate : numberCidToReactivate

  const handleApprove = () => {
    cidContract.methods
      .approve(getCheeseIndexTokenProfileAddress(), cost.times(2).toJSON())
      .send({ from: account })
      .on('sending', () => {
        setIsApproving(true)
      })
      .on('receipt', () => {
        goToChange()
      })
      .on('error', (error) => {
        toastError('Error', error?.message)
        setIsApproving(false)
      })
  }

  if (!profile) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text>
          {profile.isActive ? TranslateString(999, 'Cost to update:') : TranslateString(999, 'Cost to reactivate:')}
        </Text>
        <Text>{TranslateString(999, `${getFullDisplayBalance(cost)} CID`)}</Text>
      </Flex>
      <Button
        disabled={isApproving}
        isLoading={isApproving}
        endIcon={isApproving ? <AutoRenewIcon spin color="currentColor" /> : null}
        fullWidth
        mb="8px"
        onClick={handleApprove}
      >
        {TranslateString(999, 'Approve')}
      </Button>
      <Button variant="text" fullWidth onClick={onDismiss} disabled={isApproving}>
        {TranslateString(999, 'Close Window')}
      </Button>
    </Flex>
  )
}

export default ApproveCidPage
