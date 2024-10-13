"use client"

import "./styles/index.css";
import Blob from "@/components/blob";
import { cn } from "@/lib/utils";
import HackType from "@/components/hacktype";
import Parallax from "react-next-parallax";


export default function Home() {
	return (
		<div className={cn("h-screen w-full top-0 left-0 overflow-hidden fixed -z-6")}>
			<section className={cn("top-0 left-0 m-0 p-0 w-full h-full bg-center bg-no-repeat bg-cover text-foreground dark:text-dforground bg-background dark:bg-dbackground")}>
				<Parallax fullPageListening spotGlareEnable={false} lineGlareEnable={false} className={cn("tilt relative top-[15%] left-[10%] h-[70%] w-[80%] bg-transparent flex justify-center items-center z-[999] overflow-visible")}>
					<div className={cn("relative w-full h-full border border-white rounded-[1em] flex justify-center items-center text-center z-[11] shadow-[0_0_100px_rgba(5,1,13,0.4)]")}>
						<div className="relative w-full text-center">
							<h2 className="font-inter text-[2.5vw] " data-parallax-offset="-5">Hello! I&apos;m</h2>
							<div className={cn("font-monoton uppercase text-[7vw] transition-all text-shadow-[15px_15px_15px_black]")}>
								<HackType text="littleblack111" data-parallax-offset="5"/>
							</div>
							<div className={cn("font-inter text-[2.5vw] transition-all text-shadow-[15px_15px_15px_black]")} data-parallax-offset="-5">welcome to my website!</div>
						</div>
					</div>
				</Parallax>
			</section>
			<Blob blobtype="random"/>
		</div>
	);
}