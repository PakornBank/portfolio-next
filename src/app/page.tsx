import AboutSection from "@/components/AboutSection";
import CertificationSection from "@/components/CertificationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground -z-50">
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<CertificationSection />
			<Footer />
		</div>
	);
}
