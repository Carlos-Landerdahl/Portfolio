import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        subtext: 'var(--subtext)',
        border1: 'var(--border-1)',
        border2: 'var(--border-2)',
        title: 'var(--title)',
        bgBlack: 'var(--bg-black)',
        subtitle: 'var(--subtitle)',
        bgButton: 'var(--bg-button)',
        bgStack: 'var(--bg-stack)',
        bgCard: 'var(--bg-card)',
        hoverCard: 'var(--hover-card)',
        textHover: 'var(--text-hover)',
        hoverButton: 'var(--hover-button)',
        headerLink: 'var(--header-link)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
