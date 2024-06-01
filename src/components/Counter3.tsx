import React, { useState, useEffect, useRef } from "react";

const ScrollCounter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const targetRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counterStarted) {
            setCounterStarted(true);
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = targetRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [counterStarted]);

  useEffect(() => {
    if (isVisible && counterStarted) {
      intervalRef.current = setInterval(() => {
        if (count < 574) {
          setCount((prevCount) => prevCount + 15);
        } else {
          clearInterval(intervalRef.current!);
        }
      }, 30);

      return () => clearInterval(intervalRef.current!);
    }
  }, [isVisible, counterStarted, count]);

  return (
    <div className="counter-container" ref={targetRef}>
      <h1 className="counter">{count}+</h1>
    </div>
  );
};

export default ScrollCounter;
