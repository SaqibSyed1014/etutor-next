
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true
		},
		extend: {
			container: {
				padding: {
					'DEFAULT': '1rem',
				},
				screens: {
					'2xl': '1352px'
				}
			},
			fontSize: {
				'sm': ['14px', '22px']
			},
			colors: {
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},

				primary: {
					100: '#FFEEE8',
					200: '#FFDDD1',
					500: '#FF6636',
					600: '#CC522B',
					700: '#993D20'
				},
				gray: {
					50: '#F5F7FA',
					100: '#E9EAF0',
					300: '#B7BAC7',
					400: '#A1A5B3',
					500: '#8C94A3',
					600: '#6E7485',
					700: '#4E5566',
					900: '#1D2026'
				},
				secondary: {
					100: '#EBEBFF',
					500: '#564FFD',
					700: '#342F98'
				},
				success: {
					100: '#E1F7E3',
					500: '#23BD33',
					700: '#15711F'
				},
				warning: {
					100: '#FFF2E5',
					500: '#FD8E1F',
					800: '#65390C'
				},
				error: {
					100: '#FFF0F0',
					500: '#E34444',
					700: '#882929'
				},
				etutor: {
					primary: {
						DEFAULT: '#FF6636',
						light: '#FFEEE8'
					},

					darkblue: '#111827',
					lightgray: '#F3F4F6',
				}
			},
			boxShadow: {
				custom: '0px 0px 32px 0px #091A4412',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
} satisfies Config;
