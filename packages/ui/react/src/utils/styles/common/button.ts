import { cx } from '../cx';

export const BASE_STYLES = cx(
  'rui-duration-300',
  'rui-flex',
  'rui-font-serif',
  'rui-group',
  'rui-items-center',
  'rui-relative',
  'rui-rounded-full',
  'rui-text-base',
  'rui-transition-all',
  'disabled:rui-bg-white/40',
  'disabled:rui-text-black',
  'focus:rui-opacity-100',
  'hover:rui-cursor-pointer'
);

export const GRADIENT_UNPADDED = cx(
  BASE_STYLES,
  'rui-border-none',
  'rui-bg-gradient-to-r',
  'rui-from-[#00C2FF]',
  'rui-opacity-[.84]',
  'rui-px-11',
  'rui-py-5',
  'rui-text-black',
  'rui-to-[#87F2FF]',
  'rui-transition-to-white-background',
  'rui-via-[#00E4FF]',
  'active:rui-opacity-70',
  'hover:rui-opacity-100'
);

export const GRADIENT = cx(GRADIENT_UNPADDED, 'px-11', 'py-5');

export const DARK_UNPADDED = cx(
  BASE_STYLES,
  'rui-bg-black',
  'rui-opacity-[.84]',
  'active:rui-opacity-70',
  'focus:rui-bg-white',
  'focus:rui-text-black',
  'hover:rui-bg-white',
  'hover:rui-text-black'
);

export const DARK = cx(DARK_UNPADDED, 'px-11', 'py-5');

export const PRIMARY_UNPADDED = cx(
  BASE_STYLES,
  'rui-bg-white',
  'rui-text-black',
  'rui-border-none',
  'active:rui-bg-white/50',
  'hover:rui-bg-white/70',
  'focus:rui-bg-white/70'
);

export const PRIMARY = cx(PRIMARY_UNPADDED, 'px-11', 'py-5');

export const SECONDARY_UNPADDED = cx(
  BASE_STYLES,
  'rui-border-white/30',
  'rui-border',
  'rui-text-white',
  'active:rui-bg-white/70',
  'active:rui-text-black',
  'focus:rui-bg-white',
  'focus:rui-text-black',
  'hover:rui-bg-white',
  'hover:rui-text-black'
);

export const SECONDARY = cx(SECONDARY_UNPADDED, 'px-11', 'py-5');

export const TERTIARY_WRAPPER_UNPADDED = cx(
  BASE_STYLES,
  'rui-group',
  'active:rui-opacity-50',
  'focus:rui-opacity-[.70]',
  'hover:rui-opacity-[.70]'
);

export const TERTIARY_WRAPPER = cx(TERTIARY_WRAPPER_UNPADDED, 'px-11', 'py-5');

export const TERTIARY = cx(
  'rui-border-b',
  'rui-border-transparent',
  'rui-flex',
  'rui-items-center',
  'rui-justify-center',
  'rui-transition',
  'group-focus:rui-border-white/70',
  'group-hover:rui-border-white/70'
);
