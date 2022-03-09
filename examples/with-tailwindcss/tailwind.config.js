/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        monb: ['Monb'],
        body: ['Mint Grotesk', 'sans-serif'],
        heading: ['GT Flexa']
      },
      colors: {
        primary: '#59f',
        bgc: '#f4f4f4',
        lightgray: '#B8B8B8',
        blackText: '#1F1D1D',
        whiteText: '#FCF9F2',
        darkWhite: '#E2E0E0',
        deepBlue: '#262538',
        deepgray: '#828282',
        darkInactive: '#504F67',
        darkCard: '#1B1A29',
        darkBlack: '#171626',
        sweetOrange: '#EC775D',
        deepOrange: '#C25840',

        // New Colors
        dark: {
          0: '#0A0910',
          1: '#161527',
          2: '#23213B',
          3: '#393757',
          4: '#39376C',
          5: '#4B4973',
          6: '#605E8A',
          7: '#7D7BA6',
          8: '#CCCAE3',
          9: '#E4E4ED'
        },
        light: {
          0: '#FFFFFF',
          1: '#F5F5F5',
          2: '#E0E0E0',
          3: '#9F9F9F',
          4: '#5E5E5E',
          5: '#525252',
          6: '#414141',
          7: '#2F2F2F',
          8: '#1E1E1E',
          9: '#0D0D0D'
        },

        verify: '#4674FB',
        yes: '#17BB5C',
        no: '#FC6F43',
        gnosis: '#03A96D',
        color: {
          0: 'var(--color-0)',
          1: 'var(--color-1)',
          2: 'var(--color-2)',
          3: 'var(--color-3)',
          4: 'var(--color-4)',
          5: 'var(--color-5)',
          6: 'var(--color-6)',
          7: 'var(--color-7)',
          8: 'var(--color-8)',
          9: 'var(--color-9)'
        }
      },
      fontSize: {
        xxs: '10px',
        '7xl': '4rem'
      },
      screens: {
        '3xs': '370px',
        xxs: '400px',
        '2xl': '1700px',
        '3xl': '2000px'
      },
      gradientColorStops: {
        repColor1: '#df876f',
        repColor2: '#a39cc3',
        repColor3: '#51e9d7'
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))'
      },
      letterSpacing: {
        moreWide: '0.2em'
      },
      backgroundImage: {
        gradient1:
          'linear-gradient(266.87deg, #E8B05D -3.02%, #ED6F4D 26.11%, #7765CB 80.61%, #4F81E2 100.58%)',
        gradient2: 'linear-gradient(135deg, #FF9D6C 0%, #BB4E75 100%)',
        reputation:
          'linear-gradient(266.87deg, #DB7E64 -3.02%, #B095CC 30.97%, #38D8C4 100.58%)',
        portal:
          'radial-gradient(90.12% 85.29% at 76.15% 7.31%, #FFCA9C 0%, #FFAB63 12.75%, #EF764B 35.94%, #C08283 58.22%, #7B779D 73.67%, #1A2C4C 100%)'
      }
    }
  },
  plugins: []
}

module.exports = config
