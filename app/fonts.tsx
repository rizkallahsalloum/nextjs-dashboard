import { Outfit, Oswald } from 'next/font/google';

export const primary_font_outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
  weight: ['400', '700'],
});
export const secondary_font_oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
  weight: ['300', '400', '600', '700'],
});
