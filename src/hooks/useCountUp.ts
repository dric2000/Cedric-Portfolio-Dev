import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useCountUp = (
  target: number,
  duration = 1200,
  startOnView = true,
) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!startOnView || (startOnView && isInView)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsCounting(true);
    }
  }, [isInView, startOnView]);

  useEffect(() => {
    if (!isCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isCounting, target, duration]);

  return { count, ref, isInView };
};
