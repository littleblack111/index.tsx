"use client";

import { useEffect } from "react";
import { getGPUTier } from "detect-gpu";

export default function Performance() {
	useEffect(() => {
		getGPUTier().then((gpuTier) => {
			const blurSize = gpuTier.tier < 3 || gpuTier.type === "FALLBACK" ? "0" : "1024";
			document.documentElement.style.setProperty("--blur-size", blurSize + "px");
		});
	}, []);

	return null;
};
