import { type Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const staggerContainer = (staggerTime = 0.08): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: 0.1,
    },
  },
});

export const scaleOnHover = {
  scale: 1.03,
  transition: { duration: 0.2, ease: "easeOut" },
};

// ✅ CORRECTION : Animation flottante avec variants
export const floatVariants = (delay = 0): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
      delay: delay,
    },
  },
});

export const bounceVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const underlineAnimation = {
  width: ["0%", "100%"],
  transition: { duration: 0.4, ease: "easeOut" },
};
