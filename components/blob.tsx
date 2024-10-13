"use client"
import React, { useState, useEffect, useRef } from 'react';
import isMobile from '@/app/lib/isMobile';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateGradient(): string {
    let gradient = 'conic-gradient(';
    let firstTimeInter = true;
    const colorCount = Math.floor(Math.random() * 5) + 2;
    for (let i = 0; i < colorCount; i++) {
        if (firstTimeInter) {
            gradient += getRandomColor();
            firstTimeInter = false;
        } else {
            gradient += ', ' + getRandomColor();
        }
    }
    gradient += ')';
    return gradient;
}

function RandomBlob() {
    const blobRef = useRef<HTMLDivElement>(null);
    const [isResetting, setIsResetting] = useState(false);
    const mainInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        mainInterval.current = setTimeout(resetBlob, getRandomInt(7500, 30000));
        return () => {
            if (mainInterval.current) {
                clearTimeout(mainInterval.current);
            }
        };
    }, []);

    function randomPosition(element: HTMLElement) {
        const x = getRandomInt(0, window.innerWidth);
        const y = getRandomInt(0, window.innerHeight);
        element.style.position = 'absolute';
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    };

    function setRandomBlob() {
        if (blobRef.current) {
            blobRef.current.style.width = `${getRandomInt(50, 100)}%`;
            blobRef.current.style.height = `${getRandomInt(50, 100)}%`;
            blobRef.current.style.transform = `rotate(${getRandomInt(0, 360)}deg)`;
        }
    };

    function rrestblob() {
        setRandomBlob();
        blobRef.current!.style.background = generateGradient();
        randomPosition(blobRef.current!);
        const fadeInAnimation = blobRef.current!.animate([
            { opacity: 0 },
            { opacity: 0.4 }
        ], {
            duration: 3000,
            iterations: 1,
            fill: 'forwards'
        });

        fadeInAnimation?.addEventListener('finish', () => {
            setIsResetting(false);
        });
    }

    function resetBlob() {
        if (blobRef.current) {
            if (isResetting) {
                return;
            }
            blobRef.current?.animate([
                { opacity: 0.4 },
                { opacity: 0, transform: 'scale(0.8)' }
            ], {
                duration: 3000,
                iterations: 1,
                fill: 'forwards'
            }).addEventListener('finish', rrestblob);

            setIsResetting(true);
        }
    };

    useEffect(() => {
        rrestblob();
    }, []);

    return (
        <div
            id="blob"
            className="blob"
            ref={blobRef}
            onClick={() => {
                if (isResetting) {
                    return;
                }
                setIsResetting(true);
                if (mainInterval.current) {
                    clearTimeout(mainInterval.current);
                }
                resetBlob();
            }}
        />
    );
};

function mouseBlob() {
    // Implement the mouseBlob function
    return <div>Mouse Blob</div>;
}

export default function Blob({ blobtype: initialBlobType }: { blobtype?: string }) {
    const [blobtype, setBlobtype] = useState<string | undefined>(initialBlobType);

    if (blobtype === undefined) {
        isMobile().then((isMobile) => {
            setBlobtype(isMobile ? 'random' : 'mouse');
        });
    } else if (blobtype !== 'random' && blobtype !== 'mouse') {
        throw new Error(`Invalid blob type ${blobtype}`);
    }

    if (blobtype === undefined) {
        return null; // or a loading spinner
    }

    return blobtype === 'random' ? <RandomBlob /> : mouseBlob();
}