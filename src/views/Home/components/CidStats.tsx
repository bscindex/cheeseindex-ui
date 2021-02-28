import React from 'react'
import { Card, CardBody, Heading, Text } from '@bscindex/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCidAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import {usePriceCidBusd } from '../../../state/hooks'

const StyledCidStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CidStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCidAddress()))
  const cidPrice = usePriceCidBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cidSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const marketCap = getBalanceNumber(cidPrice.times(circSupply));


  return (
    <StyledCidStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Cid Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total CID Supply')}</Text>
          {cidSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cidSupply && <CardValue fontSize="14px" value={cidSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total CID Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={marketCap} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New CID/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
      </CardBody>
    </StyledCidStats>
  )
}

export default CidStats
