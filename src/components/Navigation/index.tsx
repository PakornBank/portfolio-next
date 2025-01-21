"use client";

import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_ITEMS } from "./constant";

const Navigation = () => {
	const [hidden, setHidden] = useState(false);
	const { setTheme, theme, systemTheme } = useTheme();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (!previous) return;

		if (latest < 50) {
			setHidden(false);
			return;
		}

		const scrollDifference = latest - previous;
		if (Math.abs(scrollDifference) < 10) return;

		setHidden(scrollDifference > 0);
	});

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	const resolvedTheme = theme === "system" ? systemTheme : theme;

	return (
		<nav
			className={`fixed w-full z-50 transition-transform duration-300 
				bg-gradient-to-b from-background/95 to-background/30 backdrop-blur-md ${
					hidden ? "-translate-y-full" : "translate-y-0 "
				}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-end md:justify-center h-16">
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{NAV_ITEMS.map((item) => (
							<Button
								key={item.href}
								variant="ghost"
								onClick={() => handleNavClick(item.href)}
								className="text-sm font-medium transition-colors hover:text-primary"
							>
								<item.icon className="h-4 w-4 mr-2" />
								{item.label}
							</Button>
						))}

						{/* Theme Toggle Button */}
						<Button
							variant="ghost"
							size="icon"
							onClick={() =>
								setTheme(resolvedTheme === "dark" ? "light" : "dark")
							}
							className="hover:text-primary"
						>
							<span className="sr-only">Toggle theme</span>
							{resolvedTheme === "dark" ? (
								<Sun className="h-5 w-5" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button>
					</div>

					{/* Mobile Navigation */}
					<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
						<SheetTrigger asChild className="md:hidden">
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-transparent"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="p-0 w-64">
							<nav className="flex flex-col h-full p-4">
								<div className="space-y-2 mt-4">
									{NAV_ITEMS.map((item) => (
										<Button
											key={item.href}
											variant="ghost"
											className="w-full justify-start"
											onClick={() => handleNavClick(item.href)}
										>
											<item.icon className="mr-2 h-4 w-4" />
											{item.label}
										</Button>
									))}
									<Button
										variant="ghost"
										className="w-full justify-start"
										onClick={() => {
											setTheme(resolvedTheme === "dark" ? "light" : "dark");
											setIsMobileMenuOpen(false);
										}}
									>
										{resolvedTheme === "dark" ? (
											<>
												<Sun className="mr-2 h-4 w-4" />
												Light Mode
											</>
										) : (
											<>
												<Moon className="mr-2 h-4 w-4" />
												Dark Mode
											</>
										)}
									</Button>
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
