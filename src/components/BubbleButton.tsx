import { motion } from "framer-motion";
import "./styles.css"; 

export default function BubbleButton() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0], // Floating animation
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed top-10 right-10"
    >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }} 
        className="btn"
      >
        泡泡
        <span className="absolute top-2 left-18 w-6 h-6 bg-white/100 
                         rounded-full blur-md opacity-75"></span>
      </motion.button>
    </motion.div>
  );
}
