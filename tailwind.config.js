const tailwindScrollBarHide = require('tailwind-scrollbar-hide');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        runSM: {
          '0%, 100%': { left: '0' },
          '50%': {
            left: 'calc(100vw - ((var(--skill-photo-size-sm)) * 5.3))',
          },
        },
        runMD: {
          '0%, 100%': { left: '0' },
          '50%': {
            left: 'calc(100vw - ((var(--skill-photo-size-md)) * 4.8))',
          },
        },
        runLG: {
          '0%, 100%': { left: '0' },
          '50%': {
            left: 'calc(100vw - ((var(--skill-photo-size-lg)) * 6.3))',
          },
        },
        runXL: {
          '0%, 100%': { left: '0' },
          '50%': {
            left: 'calc(100vw - ((var(--skill-photo-size-xl)) * 6))',
          },
        },
        run2XL: {
          '0%, 100%': { left: '0' },
          '50%': {
            left: 'calc(100vw - ((var(--skill-photo-size-2xl)) * 5.5))',
          },
        },
      },
      animation: {
        runSM: 'runSM 10s linear infinite',
        runMD: 'runMD 10s linear infinite',
        runLG: 'runLG 10s linear infinite',
        runXL: 'runXL 10s linear infinite',
        run2XL: 'run2XL 10s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [tailwindScrollBarHide],
};

/*
 'sm': '640px',
       => @media (min-width: 640px) { ... }

      'md': '768px',
       => @media (min-width: 768px) { ... }

      'lg': '1024px',
       => @media (min-width: 1024px) { ... }

      'xl': '1280px',
       => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
       => @media (min-width: 1536px) { ... }
  */
