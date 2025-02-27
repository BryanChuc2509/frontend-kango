import { Variants } from "framer-motion";

export const enterFromLeft: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const enterFromRight: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const idleAnimation: Variants = {
  animate: {
    rotate: [0, -2, 2, -2, 0],
    y: [0, -5, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};
