"use client"
import React, { useState, useEffect, useRef } from 'react';
import isMobile from '@/lib/isMobile';
import styles from './styles/blob.module.css';

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

    function rresetblob() {
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
            }).addEventListener('finish', rresetblob);

            setIsResetting(true);
        }
    };

    useEffect(rresetblob, []);

    return (
        <div
            id="blob"
            className={styles.blob}
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

function MouseBlob() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            if (blobRef.current) {
                const { pageX, pageY } = event;

                // Get Initial Momentum
                const momentumX = pageX + pageX - blobRef.current.offsetLeft;
                const momentumY = pageY + pageY - blobRef.current.offsetTop;

                // Move to momentum offset position
                blobRef.current.animate({
                    left: `${momentumX}px`,
                    top: `${momentumY}px`
                }, { duration: 1000, fill: "forwards" });

                // Move/Bounce back to initial mouse after momentum
                blobRef.current.animate({
                    left: `${pageX}px`,
                    top: `${pageY}px`
                }, { duration: 500, fill: "forwards" });

                // Set Default Initial position for blob / fix safari as the animate don't persist (it doesn't care about fill forwards)
                blobRef.current.style.left = `${pageX}px`;
                blobRef.current.style.top = `${pageY}px`;
            }
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <div
            id="blob"
            className={styles.sblob}
            ref={blobRef}
            style={{ position: 'absolute' }}
        />
    );
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

    return blobtype === 'random' ? <RandomBlob /> : <MouseBlob />;
}