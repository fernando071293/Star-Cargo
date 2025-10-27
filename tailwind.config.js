/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-900': '#000D42',
        'base-800': '#0A1D58',
        'base-700': '#132664',
        'base-600': '#1C2E6E',
        'base-500': '#3A487A',
        'base-400': '#586394',
        'base-300': '#7B86B8',
        'base-200': '#A3AACB',
        'base-100': '#D4D9EC',
        'base-050': '#E3E5ED',
        'blue-900': '#021992',
        'blue-800': '#002BAF',
        'blue-700': '#0041E3',
        'blue-600': '#004DF0',
        'blue-500': '#0056FC',
        'blue-400': '#4A71FF',
        'blue-300': '#728DFF',
        'blue-200': '#9FAEFF',
        'blue-100': '#C7CDFF',
        'blue-050': '#E9EBFF',
        'support-grey': '#F3F6F9',
        'support-green': '#00B265',
        'support-yellow': '#DB961D',
        'support-red': '#DD3350',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        h1: ['64px', {
            lineHeight: '72px',
            fontWeight: '900'
          }
        ],
        h2: ['44px', {
            lineHeight: '52px',
            fontWeight: '900'
          }
        ],
        h3: ['32px', {
            lineHeight: '40px',
            fontWeight: '900'
          }
        ],
        h4: ['24px', {
            lineHeight: '32px',
            fontWeight: '700'
          }
        ],
        h5: ['20px', {
            lineHeight: '30px',
            fontWeight: '700'
          }
        ],
        h6: ['18px', {
            lineHeight: '26px',
            fontWeight: '700'
          }
        ],
        body: ['16px', {
            lineHeight: '24px',
            fontWeight: '400'
          }
        ],
        button: ['16px', {
            lineHeight: '16px',
            fontWeight: '700'
          }
        ],
        'overline-large': ['14px', {
            lineHeight: '20px',
            fontWeight: '700'
          }
        ],
        'overline-small': ['12px', {
            lineHeight: '16px',
            fontWeight: '700'
          }
        ],
        caption: ['12px', {
            lineHeight: '16px',
            fontWeight: '400'
          }
        ],
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      }
    },
  },
  plugins: [],
}
