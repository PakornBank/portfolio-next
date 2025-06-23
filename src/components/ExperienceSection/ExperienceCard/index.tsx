import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Props {
	experience: {
		company: string;
		role: string;
		period: string;
		duration: string;
		responsibilities: string[];
		skills: string[];
	};
}

const ExperienceCard = ({ experience }: Props) => {
	return (
		<Card className="relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-secondary/40 to-secondary/10">
			<div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

			<CardContent className="p-6">
				<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
					<ScrollAnimation delay={0.3} direction="right">
						<h3 className="text-2xl font-semibold flex items-center gap-2">
							<Building2 className="w-6 h-6 text-blue-500" />
							{experience.company}
						</h3>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							{experience.role}
						</p>
					</ScrollAnimation>

					<ScrollAnimation
						delay={0.4}
						direction="left"
						className="flex items-center gap-2 mt-2 md:mt-0"
					>
						<Calendar className="w-5 h-5 text-gray-500" />
						<span className="text-gray-600 dark:text-gray-400">
							{experience.period}
						</span>
						<Badge variant="secondary">{experience.duration}</Badge>
					</ScrollAnimation>
				</div>

				<div className="space-y-4">
					<div className="grid gap-3">
						{experience.responsibilities.map((resp, index) => (
							<ScrollAnimation
								delay={0.05 * index}
								direction="right"
								key={index}
								className="flex items-start gap-3 group"
							>
								<CheckCircle2 className="flex-shrink-0 h-4 mt-1 text-green-500 transition-opacity" />
								<p className="text-gray-700 dark:text-gray-300">{resp}</p>
							</ScrollAnimation>
						))}
					</div>

					<ScrollAnimation
						delay={0.2}
						className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
					>
						<h2 className="text-lg font-semibold mb-3">
							Technologies & Skills
						</h2>
						<div className="flex flex-wrap gap-2">
							{experience.skills.map((skill, index) => (
								<Badge
									key={index}
									variant="outline"
									className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
								>
									{skill}
								</Badge>
							))}
						</div>
					</ScrollAnimation>
				</div>
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;
