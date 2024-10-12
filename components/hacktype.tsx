"use client"

import { useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hackType(element: HTMLElement) {
    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return element.getAttribute('data-value')![index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= element.getAttribute('data-value')!.length) {
            clearInterval(interval);
        }

        iteration += 1 / 5;
    }, 20);
}

export default function HackType({ text }: { text: string }) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.setAttribute('data-value', text);
            hackType(elementRef.current);

            const interval = setInterval(() => {
                hackType(elementRef.current!);
            }, 10000);

            document.addEventListener("visibilitychange", () => {
                if (!document.hidden && elementRef.current) {
                    hackType(elementRef.current);
                }
            });

            return () => clearInterval(interval);
        }
    }, [text]);

    return (
        <div ref={elementRef} className="hacktype">
            {text}
        </div>
    );
}