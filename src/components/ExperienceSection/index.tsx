import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "./constant";
import ScrollAnimation from "../ScrollAnimation";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
	return (
		<div id="experience" className="w-full max-w-4xl mx-auto p-4 relative">
			<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />

			<ScrollAnimation>
				<div className="flex items-center justify-start gap-3 mb-6 w-full">
					<div className="bg-primary/10 p-3 rounded-xl">
						<Briefcase className="w-6 h-6 text-primary" />
					</div>
					<h2 className="text-3xl font-bold">Experience</h2>
				</div>
			</ScrollAnimation>
			{EXPERIENCES.map((exp, index) => (
				<ScrollAnimation key={index} delay={0.1}>
					<ExperienceCard experience={exp} />
				</ScrollAnimation>
			))}
		</div>
	);
};

export default ExperienceSection;
