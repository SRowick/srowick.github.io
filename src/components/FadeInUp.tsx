import { motion } from "motion/react";

function FadeInUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInUp;
