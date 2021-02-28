import { MenuEntry } from '@bscindex/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href: 'https://swap.bscindex.com',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.bscindex.com/#/pool',
      },
      {
        label: 'Exchange',
        href: '#',
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
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.bscindex.com',
      },
      {
        label: 'Tokens',
        href: 'https://info.bscindex.com/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.bscindex.com/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.bscindex.com/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.bscindex.com',
      },
      {
        label: 'Github',
        href: 'https://github.com/bscindex',
      },
      {
        label: 'Docs',
        href: 'https://docs.bscindex.com',
      },
      {
        label: 'Blog',
        href: 'https://bscindex.medium.com',
      },
    ],
  },
]

export default config
