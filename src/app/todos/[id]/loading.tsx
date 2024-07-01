'use client';

import { motion } from 'framer-motion';

interface LoadingTodoProps {}

export function LoadingTodo({}: LoadingTodoProps) {
    return (
        <motion.div
            animate={{
                scaleX: [1, 100],
                translateX: [0, 495]
            }}
            transition={{
                duration: 3,
                ease: 'easeIn',
            }}
            style={{height: "15px", backgroundColor: "red", width: "10px"}}
        >
        </motion.div>
    );
}

export default LoadingTodo;
