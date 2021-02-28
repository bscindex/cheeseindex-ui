import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCidAddress = () => {
  return addresses.cid[chainId]
}
export const getCsiAddress = () => {
  return addresses.csi[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}