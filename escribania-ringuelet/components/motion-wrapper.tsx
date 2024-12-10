import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionWrapperProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}