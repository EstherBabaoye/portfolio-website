export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
export const stagger = (gap = 0.06) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: gap, delayChildren: 0.05 } },
});
export const hoverLift = {
  whileHover: { y: -3, scale: 1.01 },
  transition: { type: "spring", stiffness: 220, damping: 20 },
};
