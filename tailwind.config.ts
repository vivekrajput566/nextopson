import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        body: "3%",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      fontSize: {
        small: "15px"
      },
      colors: {
        primary: "#054A91"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',

    }
  },
  plugins: [],
}
export default config
