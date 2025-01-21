import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface Props {
	numberOfParticles?: number;
	children?: React.ReactNode;
	className?: string;
}

const AnimatedBackground = ({
	numberOfParticles = 20,
	children,
	className,
}: Props) => {
	const { theme } = useTheme();

	useEffect(() => {
		const style = document.createElement("style");
		style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) translateX(0);
        }
        25% {
          transform: translateY(-20px) translateX(10px);
        }
        50% {
          transform: translateY(-35px) translateX(-10px);
        }
        75% {
          transform: translateY(-20px) translateX(8px);
        }
      }
      
      .animate-float {
        animation: float linear infinite;
      }
    `;
		document.head.appendChild(style);

		return () => {
			document.head.removeChild(style);
		};
	}, []);

	const themeStyles = {
		light: {
			background: "bg-gradient-to-br from-gray-100 via-gray-50 to-white",
			particle: "bg-gray-900/10",
		},
		dark: {
			background: "bg-gradient-to-br from-gray-900 via-gray-950 to-black",
			particle: "bg-white/10",
		},
	};

	const currentTheme = theme === "dark" ? "dark" : "light";
	const styles = themeStyles[currentTheme];

	return (
		<div
			className={cn(
				"relative min-h-screen overflow-hidden transition-colors duration-300",
				styles.background,
				className
			)}
		>
			<div className="absolute inset-0">
				{[...Array(numberOfParticles)].map((_, i) => (
					<div
						key={i}
						className="absolute animate-float"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${5 + Math.random() * 10}s`,
						}}
					>
						<div
							className={cn("w-4 h-4 rounded-full blur-sm", styles.particle)}
						/>
					</div>
				))}
			</div>

			<div className="relative">{children}</div>
		</div>
	);
};

export default AnimatedBackground;
