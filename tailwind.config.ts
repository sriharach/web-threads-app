import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'secondary-500': '#FFB620',
        blue: '#0095F6',
        'logout-btn': '#FF5A5A',
        'navbar-menu': 'rgba(16, 16, 18, 0.6)',
        'purple-1': '#7760C2',
        'purple-2': '#a48def65',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
        'gray-1': '#697C89',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'heading1-bold': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading1-semibold': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'heading2-bold': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading2-semibold': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'heading3-bold': [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'heading4-medium': [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'body-semibold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-medium': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-normal': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'body1-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        'base-regular': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'base-medium': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'base-semibold': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'base1-semibold': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'small-regular': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'small-medium': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'small-semibold': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'subtle-medium': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '500',
          },
        ],
        'subtle-semibold': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],
        'tiny-medium': [
          '10px',
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'x-small-semibold': [
          '7px',
          {
            lineHeight: '9.318px',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF9573',
          secondary: '#f3f3f3',
          accent: '#1dcdbc',
          neutral: '#2b3440',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#EAB308',
          error: '#f87272',
          disable: '#C1C1C1',
        },
      },
    ],
  },
}
export default config
