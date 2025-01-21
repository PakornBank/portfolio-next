import ScrollAnimation from "../ScrollAnimation";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "./constant";

const ProjectSection = () => {
	return (
		<section
			id="project"
			className="w-full py-12 flex flex-col items-center px-4 relative"
		>
			<ScrollAnimation>
				<h2 className="text-3xl font-bold mb-8 text-center">Project</h2>
			</ScrollAnimation>
			<ProjectCard {...PROJECT_DATA} />
			<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
		</section>
	);
};

export default ProjectSection;
