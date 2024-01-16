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
        subtext: '#b3b3b3',
        border1: '#464646',
        border2: '#222222',
        title: 'white',
        bgBlack: 'black',
        subtitle: '#adadad',
        bgButton: '#1a1a1a',
        bgStack: '#161616',
        bgCard: '#272727',
        hoverCard: '#424242',
        textHover: '#ebebeb',
        hoverButton: '#424242',
        headerLink: '#727272',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
