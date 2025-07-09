import React, { useEffect, useRef, useState } from "react";

export default function Counter({ targetNumber, duration = 1500, suffix = "", className }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(0, targetNumber, duration);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNumber, duration]);

  function animateCount(start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentCount = Math.floor(progress * (end - start) + start);
        setCount(currentCount);
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(update);
  }

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()} {suffix}
    </span>
  );
}
