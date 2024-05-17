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

    const currentTargetRef = targetRef.current;

    if (currentTargetRef) {
      observer.observe(currentTargetRef);
    }

    return () => {
      if (currentTargetRef) {
        observer.unobserve(currentTargetRef);
      }
    };
  }, [counterStarted]);

  useEffect(() => {
    if (isVisible && counterStarted) {
      intervalRef.current = setInterval(() => {
        if (count < 1400) {
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
