module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        1: '0px 4px 18px rgba(0, 0, 0, 0.17)',
        2: '0px 1px 5px -363px rgba(0, 0, 0, 0.19)',
        3: '0px 6px 16px rgba(0, 0, 0, 0.12)'
      },
      fontSize: {
        h1: ['40px', '60px'],
        h2: ['32px', '48px'],
        h3: ['24px', '36px'],
        h4: ['20px', '30px'],
        h5: ['18px', '27px'],
        h6: ['16px', '24px'],
        p1: ['14px', '21px'],
        p2: ['12px', '18px'],
        p3: ['10px', '12px']
      },
      aspectRatio: {
        'aspect-21/9': '21 / 9',
        'aspect-3/2': '3 / 2',
        'aspect-16/10': '16 / 9',
        'aspect-9/15': '9 / 15'
      },
      screens: {
        // => @media (min-width: 360px) { ... }
        mobileS: '360px',
        // => @media (min-width: 480px) { ... }
        mobileM: '480px',
        // => @media (min-width: 640px) { ... }
        mobileL: '640px',
        // => @media (min-width: 768px) { ... }
        tablet: '768px',
        // => @media (min-width: 960px) { ... }
        laptop: '960px',
        // => @media (min-width: 1024px) { ... }
        laptopM: '1024px',
        // => @media (min-width: 1280px) { ... }
        laptopL: '1280px',
        // => @media (min-width: 1440px) { ... }
        desktop: '1366px',
        // => @media (min-width: 1366px) { ... }
        desktopL: '1440px',
        // => @media (min-width: 1920px) { ... }
        desktopFullHD: '1920px'
      },
      colors: {
        main: {
          primary: '#fb5350',
          secondary: '#a8f083',
          lighter: '#f6f8fc',
          subtle: '#eff1f7'
        },
        error: {
          1: '#ED2323',
          2: '#D12B2B',
          3: '#FF5C5C',
          4: '#FF8080'
        },
        warning: {
          1: '#FACC14',
          2: '#E5B800',
          3: '#FDDD48',
          4: '#FDED72'
        },
        info: {
          1: '#3868B0',
          2: '#2C528B',
          3: '#5B8AD0',
          4: '#9DBFF9'
        },
        success: {
          1: '#06C270',
          2: '#05A660',
          3: '#39D98A',
          4: '#57EBA1'
        },
        light: {
          1: '#F7F7FB',
          2: '#EBEBF0',
          3: '#F2F2F5',
          4: '#FAFAFC'
        },
        dark: {
          1: '#060606',
          2: '#3A3A3C',
          3: '#6B7588',
          4: '#8F90A6',
          5: '#C7C9D9'
        },
        // plain color
        white: '#FFFFFF',
        black: '#000000'
      },
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px'
      }
    }
  },
  plugins: []
};
