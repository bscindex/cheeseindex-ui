import { MenuEntry } from '@bscindex/uikit'

const config: MenuEntry[] = [
  {
    label: 'BSCIndex',
    icon: 'BSCIndexIcon',
    href: 'https://bscindex.com',
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href:
          'https://cheeseswap.app/#/swap?inputCurrency=0x93f44521a0b6dde17e8c4bb8e85e8c215d2eef0e&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      {
        label: 'Liquidity',
        href:
          'https://cheeseswap.app/#/add/0x93f44521a0b6dde17e8c4bb8e85e8c215d2eef0e/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: 'https://bscindex.com/#exchange',
  },
  {
    label: 'Keeper',
    icon: 'KeeperIcon',
    href: 'https://keep3rb.network',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0x93f44521a0b6dde17e8c4bb8e85e8c215d2eef0e',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0x9aa251cfabda84f750dde8a227f9240ae11e9f8c',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bscindex',
      },
    ],
  },
]

export default config
