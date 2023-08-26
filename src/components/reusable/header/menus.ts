import {
  bugTypeIcon,
  dragonTypeIcon,
  fightingTypeIcon,
  fireTypeIcon,
  ghostTypeIcon,
  groundTypeIcon,
  rockTypeIcon
} from 'components/assets';
import BASE_URL from 'configs/base-url';

const menus = [
  {
    to: BASE_URL.HOME,
    label: 'Home',
    icon: groundTypeIcon
  },
  {
    to: BASE_URL.POKEDEX,
    label: 'Pokedex',
    icon: rockTypeIcon
  },
  {
    to: BASE_URL.COMING_SOON,
    label: 'Video Games',
    icon: fightingTypeIcon
  },
  {
    to: BASE_URL.COMING_SOON,
    label: 'GCC Pokemon',
    icon: bugTypeIcon
  },
  {
    to: BASE_URL.COMING_SOON,
    label: 'TV Pokemon',
    icon: dragonTypeIcon
  },
  {
    to: BASE_URL.COMING_SOON,
    label: 'Play! Pokemon',
    icon: ghostTypeIcon
  },
  {
    to: BASE_URL.COMING_SOON,
    label: 'News',
    icon: fireTypeIcon
  }
];

export default menus;
