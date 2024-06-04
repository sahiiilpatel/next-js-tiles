import React, { useState, useEffect, useRef } from "react";

interface ScrollCounterProps {
    targetValue: number;
}

const Counter: React.FC<ScrollCounterProps> = ({ targetValue }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentRef = targetRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < targetValue) {
                        return prevCount + 15;
                    } else {
                        clearInterval(intervalRef.current!);
                        return targetValue;
                    }
                });
            }, 30);

            return () => clearInterval(intervalRef.current!);
        }
    }, [isVisible, targetValue]);

    return (
        <div className="counter-container" ref={targetRef}>
            <h1 className="counter">{count}+</h1>
        </div>
    );
};

export default Counter;