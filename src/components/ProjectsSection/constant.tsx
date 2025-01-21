import { ProjectCardProps } from "./type";
import { Code2, Server, TestTube2 } from "lucide-react";

export const PROJECT_DATA: ProjectCardProps = {
	title: "OpenMirai",
	description:
		"An online education platform with features for both learners and instructors, accessible to all users.",
	url: "https://openmirai.com",
	technologies: [
		{
			category: "Frontend",
			items: ["React", "Next.js", "Tailwind", "Headless UI"],
			icon: <Code2 className="h-5 w-5 text-purple-500" />,
		},
		{
			category: "Backend",
			items: ["NestJS", "Go", "tRPC"],
			icon: <Server className="h-5 w-5 text-green-500" />,
		},
		{
			category: "Testing",
			items: ["Playwright"],
			icon: <TestTube2 className="h-5 w-5 text-orange-500" />,
		},
	],
	status:
		"Currently building Go microservices for future scalability. Ongoing improvements to features and UI.",
	iconPath: "/svg/openmirai.svg",
};
