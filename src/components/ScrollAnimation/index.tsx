"use client";

import { motion } from "framer-motion";

interface Props {
	children: React.ReactNode;
	direction?: "up" | "down" | "left" | "right";
	duration?: number;
	delay?: number;
	className?: string;
}

const ScrollAnimation = ({
	children,
	direction = "up",
	duration = 0.5,
	delay = 0,
	className = "",
}: Props) => {
	const slideVariants = {
		hidden: {
			opacity: 0,
			y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
			x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 100,
				duration: duration,
				delay: delay,
			},
		},
	};

	return (
		<motion.div
			variants={slideVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default ScrollAnimation;
