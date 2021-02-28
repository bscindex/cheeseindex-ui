import {
  getCheeseIndexTokenProfileAddress,
  getCheeseIndexTokenRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
} from 'utils/addressHelpers'
import { getContract } from 'utils/web3'
import profileABI from 'config/abi/cheeseIndexTokenProfile.json'
import cheeseIndexTokenRabbitsAbi from 'config/abi/cheeseIndexTokenRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'

export const getProfileContract = () => {
  return getContract(profileABI, getCheeseIndexTokenProfileAddress())
}

export const getCheeseIndexTokenRabbitContract = () => {
  return getContract(cheeseIndexTokenRabbitsAbi, getCheeseIndexTokenRabbitsAddress())
}

export const getBunnyFactoryContract = () => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress())
}

export const getBunnySpecialContract = () => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress())
}

export default null
