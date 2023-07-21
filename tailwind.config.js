/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xsm: '425px',
      // => @media (min-width: 425px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      tall: { raw: '(min-height: 930px)' },
      // => @media (min-height: 930px) { ... }
      lg_1: '1175px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      exSMMAX: { min: '0px', max: '425px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      smMAX: { min: '0px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
    },
    boxShadow: {
      inner: 'inset 0 0 6px #14213D',
    },
  },
  plugins: [],
};
