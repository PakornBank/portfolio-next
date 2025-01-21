import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio | Pakorn",
	description: "Full Stack Developer Portfolio showcasing projects and skills",
	keywords: [
		"Full Stack Developer",
		"Web Development",
		"Portfolio",
		"React",
		"Next.js",
	],
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`${inter.className} min-h-screen bg-background antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navigation />
					<main className="pt-14">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
