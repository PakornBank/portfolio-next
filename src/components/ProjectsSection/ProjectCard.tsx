import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowUpRight } from "lucide-react";
import { ProjectCardProps } from "./types";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

const ProjectCard = ({
	title,
	description,
	url,
	technologies,
	status,
	iconPath,
}: ProjectCardProps) => {
	return (
		<ScrollAnimation delay={0.1}>
			<Card className="w-full max-w-4xl overflow-hidden">
				<ScrollAnimation>
					<CardHeader>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								{iconPath ? (
									<Image src={iconPath} alt={title} width={24} height={24} />
								) : (
									<Globe className="h-6 w-6 text-blue-500" />
								)}
								<CardTitle className="text-2xl font-bold">{title}</CardTitle>
							</div>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
							>
								{url.replace("https://", "")}
								<ArrowUpRight className="h-4 w-4" />
							</a>
						</div>
						<div>
							<CardDescription className="mt-2 text-lg">
								{description}
							</CardDescription>
						</div>
					</CardHeader>
				</ScrollAnimation>
				<CardContent>
					<div className="space-y-6">
						{technologies.map((tech, index) => (
							<ScrollAnimation
								delay={0.1 * index}
								direction="right"
								key={index}
								className="flex items-start gap-2"
							>
								<div className="mt-1">{tech.icon}</div>
								<div>
									<h3 className="font-semibold text-sm text-muted-foreground mb-2">
										{tech.category}
									</h3>
									<div className="flex flex-wrap gap-2">
										{tech.items.map((item, i) => (
											<Badge key={i} variant="secondary" className="px-3 py-1">
												{item}
											</Badge>
										))}
									</div>
								</div>
							</ScrollAnimation>
						))}

						<ScrollAnimation className="mt-6 pt-4 border-t">
							<h3 className="font-semibold text-sm text-muted-foreground mb-2">
								Current Status
							</h3>
							<p className="text-sm">{status}</p>
						</ScrollAnimation>
					</div>
				</CardContent>
			</Card>
		</ScrollAnimation>
	);
};

export default ProjectCard;
