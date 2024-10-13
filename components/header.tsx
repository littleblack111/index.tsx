"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from 'react';
import "./header.css"


export default function Header() {
	const pathname = usePathname()
	const [isMinimized, setIsMinimized] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
		setIsMinimized(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
		window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header id="navBarHeader" className={isMinimized ? "minimizedIsland" : ""}>
			<nav className="navBar">
				<div className="hleft">
					<Link id="btnHome" className={pathname === "/" ? "active": ""} style={{ textDecoration: 'unset' }} href="/">Home</Link>
				</div>
				<div className="hright">
					<Link id="btnAbout" className={pathname === "/about" ? "active": ""} style={{ textDecoration: 'unset' }} href="/about">About</Link>
					<Link id="btnGhRepo" className={pathname === "/ghrepos" ? "active": ""} style={{ textDecoration: 'unset' }} href="/ghrepos">Github Repos</Link>
				</div>
			</nav>
		</header>
	)
}