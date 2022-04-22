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
      },
    },
  },
  plugins: [],
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
