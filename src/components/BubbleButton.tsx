import { motion } from "framer-motion";
import React from "react";
import "./styles.css";

interface BubbleButtonProps {
  className?: string;  
  text: string;
  size: string;
  font: string;  // 確保這是字體大小，如 "20" 或 "xl"
}

const BubbleButton: React.FC<BubbleButtonProps> = ({ className, text, size, font }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={className}  
    >
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }} 
        className="bubbleBtn relative"
        style={{ width: size, height: size }}
      >
        <p className={`text-${font} bubbleText` }>{text}</p>
        <span className="absolute top-2 left-2 w-6 h-6 bg-white/100 
                         rounded-full blur-md opacity-75"></span>
      </motion.button>
    </motion.div>
  );
}

export default BubbleButton;
