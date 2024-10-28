/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        quote: ['"Bodoni Moda"']
      },
      colors: {
        primary: {
          background: 'hsl(var(--primary-background))',
          foreground: 'hsl(var(--primary-foreground))',
          'button-background': 'hsl(var(--primary-button-background))',
          'button-foreground': 'hsl(var(--primary-button-foreground))'
        },
        secondary: {
          background: 'hsl(var(--secondary-background))',
          foreground: 'hsl(var(--secondary-foreground))',
          'button-background': 'hsl(var(--secondary-button-background))',
          'button-foreground': 'hsl(var(--secondary-button-foreground))'
        },
        accent: {
          background: 'hsl(var(--accent-background))',
          foreground: 'hsl(var(--accent-foreground))',
          'button-background': 'hsl(var(--accent-button-background))',
          'button-foreground': 'hsl(var(--accent-button-foreground))'
        },
        muted: {
          background: 'hsl(var(--muted-background))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          background: 'hsl(var(--destructive-background))',
          foreground: 'hsl(var(--destructive-foreground))',
          'button-background': 'hsl(var(--destructive-button-background))',
          'button-foreground': 'hsl(var(--destructive-button-foreground))'
        },
        card: {
          background: 'hsl(var(--card-background))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        radius: 'var(--radius)'
      }
    }
  },
  plugins: []
};
