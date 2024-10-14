// "use client"

import type { Metadata, Viewport } from "next";
// import { Inter, Audiowide, Rock_Salt, Monoton, JetBrains_Mono } from 'next/font/google'
import "./styles.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { MonotonFont, RockSaltFont, InterFont, JetBrainsMonoFont } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react"
import Performance from "@/components/performance";

// const programFont = localFont({
// 	src: "/fonts/LigaJetBrainsMonoNerdFont-Regular.ttf"
// })

// const monotonFont = localFont({
// 	src: "/fonts/Monoton.ttf"
// })

// const rocksaltFont = localFont({
// 	src: "/fonts/RockSalt-Regular.ttf"
// })

// const audiowideFont = localFont({
// 	src: "/fonts/audiowide.ttf"
// })

// const interFont = localFont({
// 	src: "/fonts/Inter.ttf"
// })

export const metadata: Metadata = {
	title: "littleblack111",
	description: "littleblack111 is a full stack developer, who uses arch btw",
	keywords: ["littleblack111", "full stack", "developer", "arch", "linux"],
	publisher: "littleblack111",
	authors: [{name: "littleblack111", url: "https://littleblack111.com"}],
	creator: "littleblack111",
	twitter: {
		card: 'summary_large_image',
		title: 'littleblack111',
		description: 'littleblack111 is a full stack developer, who uses arch btw',
		creator: '@littleblac59922',
		images: {
			url: "https://avatars.githubusercontent.com/u/97672521",
			alt: "littleblack111"
		},
	},
	openGraph: {
		title: 'littleblack111',
		description: 'littleblack111 is a full stack developer, who uses arch btw',
		url: 'https://littleblack111.com',
		siteName: "littleblack111's website",
		images: {
			url: "https://avatars.githubusercontent.com/u/97672521",
			alt: "littleblack111"
		},
		type: 'website',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en" style={{ "--blur-size": 0 } as React.CSSProperties}>
		<body className={`${MonotonFont.variable} ${RockSaltFont.variable} ${InterFont.variable} ${JetBrainsMonoFont.variable}`}>
			<div className="wrapper">
				<Header />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Analytics />
				<Performance />
			</div>
		</body>
		</html>
	);
}
