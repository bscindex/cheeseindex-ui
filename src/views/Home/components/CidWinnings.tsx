import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCidBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const CidWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const cidAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(cidAmount).multipliedBy(usePriceCidBusd()).toNumber()

  return (
    <Block>
      <CardValue value={cidAmount} lineHeight="1.5" />
      <CardBusdValue value={claimAmountBusd} decimals={2} />
    </Block>
  )
}

export default CidWinnings
