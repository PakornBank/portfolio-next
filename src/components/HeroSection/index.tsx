"use client";

import { Code2, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialLinkProps {
	href: string;
	icon: React.ElementType;
}

const SocialLink = memo(({ href, icon: Icon }: SocialLinkProps) => (
	<Link href={href}>
		<Icon className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
	</Link>
));
SocialLink.displayName = "SocialLink";

const fadeInUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.5 },
	}),
};

const HeroSection = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	const handleNavClick = useCallback((href: string) => {
		const element = document.querySelector(href);
		element?.scrollIntoView({ behavior: "smooth" });
	}, []);

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
				className="container mx-auto px-4 relative will-change-transform"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="text-center lg:text-left space-y-6 z-0">
						<motion.div
							variants={fadeInUpVariants}
							initial="hidden"
							animate="visible"
							custom={0.2}
						>
							<Code2
								className="w-16 h-16 mx-auto lg:mx-0 mt-4 mb:mt-0 text-primary"
								style={{
									animation: "spin 6s linear infinite",
									willChange: "transform",
								}}
							/>
						</motion.div>

						<motion.h1
							className="text-4xl font-bold sm:text-6xl"
							variants={fadeInUpVariants}
							initial="hidden"
							animate="visible"
							custom={0.3}
						>
							Hi, I&apos;m <span className="text-primary">Pakorn</span>
						</motion.h1>

						<motion.p
							className="text-xl text-muted-foreground"
							variants={fadeInUpVariants}
							initial="hidden"
							animate="visible"
							custom={0.4}
						>
							Full Stack Developer specializing in building exceptional digital
							experiences
						</motion.p>

						<motion.div
							className="flex justify-center lg:justify-start gap-4"
							variants={fadeInUpVariants}
							initial="hidden"
							animate="visible"
							custom={0.5}
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
							variants={fadeInUpVariants}
							initial="hidden"
							animate="visible"
							custom={0.6}
						>
							<SocialLink href="https://github.com/PakornBank/" icon={Github} />
							<SocialLink
								href="https://www.linkedin.com/in/pakorn-bank"
								icon={Linkedin}
							/>
							<SocialLink href="mailto:pakorn22120@gmail.com" icon={Mail} />
						</motion.div>
					</div>

					<motion.div
						className="relative w-full h-96 lg:h-[600px]"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						style={{ willChange: "transform" }}
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
