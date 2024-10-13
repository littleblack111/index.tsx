import type { Config } from "tailwindcss";

const config: Config = {
    // darkMode: ["selector", '[data-theme="dark"]'],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                dbackground: 'hsl(var(--dark-background))',
                dforground: 'hsl(var(--dark-foreground))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                monoton: ['var(--font-monoton)'],
                rocksalt: ['var(--font-rocksalt)'],
				jetbrains: ['var(--font-jetbrains)'],
            },
            keyframes: {
                slideInTop: {
                    'from': { transform: 'translateY(-300px)' },
                    'to': { transform: 'translateY(0)' }
                },
                bounce: {
                    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0px)' },
                    '40%': { transform: 'translateY(30px)' },
                    '80%': { transform: 'translateY(-15px)' }
                },
                zoomIn: {
                    '0%': { scale: '0.01' },
                    '65%': { scale: '1.05' },
                    '100%': { scale: '1', position: 'relative' }
                },
                zoomOut: {
                    'from': { transform: 'scale(1)' },
                    'to': { transform: 'scale(0.01)' }
                },
                fadeZoomIn: {
                    'from': { opacity: '0.35', scale: '1.15' },
                    'to': { opacity: '1', scale: '1' }
                },
                reveal: {
                    'from': {
                        filter: 'blur(32px)',
                        backdropFilter: 'blur(32px)',
                        transform: 'scale(2)'
                    }
                },
                shake: {
                    '0%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(.5deg)' },
                    '50%': { transform: 'rotate(0deg)' },
                    '75%': { transform: 'rotate(-.5deg)' },
                    '100%': { transform: 'rotate(0deg)' }
                },
                backgroundPan: {
                    'from': { backgroundPosition: '0% center' },
                    'to': { backgroundPosition: '-200% center' }
                },
                fadeIn: {
                    'from': { scale: '0.8', opacity: '0' },
                    'to': { opacity: '1', scale: '1' }
                },
                fadeOut: {
                    'from': {},
                    'to': { opacity: '0', scale: '0.8' }
                },
                scroll: {
                    'from': { opacity: '0.8', scale: '0.75' },
                    'to': { opacity: '1', scale: '1' }
                },
                rotate: {
                    'from': { rotate: '0deg' },
                    '50%': { scale: '1 1.25' },
                    'to': { rotate: '360deg' }
                },
                minimize: {
                    'from': { scale: '1', opacity: '1' },
                    'to': { scale: '0', opacity: '0' }
                }
            },
			animation: {
				slideInTop: 'slideInTop 1s ease-out',
				bounce: 'bounce 1s ease-out',
				ZoomIn: 'zoomIn 1s ease-out',
				ZoomInFast: 'zoomIn 300ms ease-out',
				ZoomOut: 'zoomOut 1s ease-out',
				fadeZoomIn: 'fadeZoomIn 1s ease-out',
				reveal: 'reveal 500ms ease-out forwards',
				revealFast: 'reveal 300ms ease-out forwards',
				shake: 'shake 1s ease-out',
				backgroundPan: 'backgroundPan 1s linear infinite',
				fadeIn: 'fadeIn 1s ease-out',
				fadeOut: 'fadeOut 1s ease-out',
				scroll: 'scroll 1s ease-out',
				rotate: 'rotate 1s linear infinite',
				minimize: 'minimize 1s ease-out'
			}
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
