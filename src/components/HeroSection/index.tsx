"use client";

import { Code2, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.section
			id="hero"
			ref={sectionRef}
			className="min-h-screen relative flex items-center justify-center overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div
				style={{ y, opacity }}
				className="container mx-auto px-4 relative"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="text-center lg:text-left space-y-6 z-0">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Code2 className="w-16 h-16 mx-auto lg:mx-0 mt-4 mb:mt-0 text-primary animate-[spin_6s_linear_infinite]" />
						</motion.div>

						<motion.h1
							className="text-4xl font-bold sm:text-6xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							Hi, I&apos;m <span className="text-primary">Pakorn</span>
						</motion.h1>

						<motion.p
							className="text-xl text-muted-foreground"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							Full Stack Developer specializing in building exceptional digital
							experiences
						</motion.p>

						<motion.div
							className="flex justify-center lg:justify-start gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<Button size="lg" onClick={() => handleNavClick("#about")}>
								About Me
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => handleNavClick("#project")}
							>
								Project
							</Button>
						</motion.div>

						<motion.div
							className="flex justify-center lg:justify-start gap-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<Link href="https://github.com/PakornBank/">
								<Github className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
							</Link>
							<Link href="https://www.linkedin.com/in/pakorn-bank">
								<Linkedin className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
							</Link>
							<Link href="mailto:pakorn22120@gmail.com">
								<Mail className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
							</Link>
						</motion.div>
					</div>
					<motion.div
						className="relative w-full h-96 lg:h-[600px]"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						<div className="relative w-full h-full rounded-3xl overflow-hidden">
							<Image
								src="/jpg/me.jpg"
								alt="Pakorn's profile"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default HeroSection;
