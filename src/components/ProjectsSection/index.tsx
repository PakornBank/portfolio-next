import { FolderKanban } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "./constant";

const ProjectSection = () => {
	return (
		<section id="project" className="w-full max-w-4xl mx-auto p-4 relative">
			<ScrollAnimation className="z-10 w-full">
				<div className="flex items-center justify-start gap-3 mb-6 w-full">
					<div className="bg-primary/10 p-3 rounded-xl">
						<FolderKanban className="w-6 h-6 text-primary" />
					</div>
					<h2 className="text-3xl font-bold text-center">Project</h2>
				</div>
			</ScrollAnimation>
			<ProjectCard {...PROJECT_DATA} />
			<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl -z-10" />
		</section>
	);
};

export default ProjectSection;
