import localFont from "next/font/local";
import { Inter, Audiowide, Rock_Salt, Monoton, JetBrains_Mono } from 'next/font/google'

export const InterFont = Inter({
	variable: "--font-inter",
	subsets: ['latin'],
	display: 'swap',
})

export const MonotonFont = Monoton({
	weight: ['400'],
	variable: "--font-monoton",
	subsets: ['latin'],
	display: 'swap',
})

export const RockSaltFont = Rock_Salt({
	weight: ['400'],
	variable: "--font-rocksalt",
	subsets: ['latin'],
	display: 'swap',
})

export const JetBrainsMonoFont = JetBrains_Mono({
	weight: ['400'],
	variable: "--font-jetbrains",
	subsets: ['latin'],
	display: 'swap',
})

export const hackedFont = localFont({
	src: "../fonts/Hacked-KerX.ttf"
})

export const smoothFont = localFont({
	src: "../fonts/SmoothElegantRegular-ZLv3.ttf"
})

export const bigFont = localFont({
	src: "../fonts/Big500-8MLOM.ttf"
})