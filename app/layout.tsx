// "use client"

import type { Metadata } from "next";
// import { Inter, Audiowide, Rock_Salt, Monoton, JetBrains_Mono } from 'next/font/google'
import "./styles.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { MonotonFont, RockSaltFont, InterFont, JetBrainsMonoFont } from "./lib/fonts";
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
	keywords: ["littleblack111", "full stack", "developer", "arch", "btw"],
	authors: [{name: "littleblack111", url: "https://littleblack111.com"}],
	creator: "littleblack111",

};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en" style={{ "--blur-size": 0 } as React.CSSProperties}>
		<body className={`${MonotonFont.variable} ${RockSaltFont.variable} ${InterFont.variable} ${JetBrainsMonoFont.variable}`}>
			<Header />
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				{children}
			</ThemeProvider>
			<Analytics />
			<Performance />
		</body>
		</html>
	);
}
