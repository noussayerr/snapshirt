import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
	return (
		<motion.div
			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }}
			animate={{
				y: ["20%", "50%", "0%"],
				x: ["0%", "50%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden='true'
		/>
	);
};
export default FloatingShape;