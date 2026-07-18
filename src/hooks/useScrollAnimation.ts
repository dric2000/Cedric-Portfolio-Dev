import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { ref, isInView: hasAnimated || isInView };
};
