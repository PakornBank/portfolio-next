"use client";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import TechnologySlides from "../TechnologySlides";
import { GraduationCap, Target, Wrench, Calendar, Clock } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { EDUCATION } from "./constant";

const AboutSection = () => {
	return (
		<section
			id="about"
			className="w-full py-16 bg-gradient-to-b from-background to-background/50"
		>
			<div className="container px-4 md:px-6 max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
					<div className="h-full">
						<ScrollAnimation className="flex items-center gap-3 mb-2">
							<div className="bg-primary/10 p-3 rounded-xl">
								<Target className="w-6 h-6 text-primary" />
							</div>
							<h2 className="text-3xl font-bold tracking-tight">Objective</h2>
						</ScrollAnimation>
						<ScrollAnimation
							delay={0.2}
							className="relative h-[calc(100%-3rem)]"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
							<Card className="relative h-full p-6 backdrop-blur-sm border border-primary/10 bg-background/50">
								<CardContent className="p-0 h-full flex items-center">
									<p className="text-lg leading-relaxed">
										Interested in full-stack software development, I am
										proficient in various technologies in this field. My goal is
										to improve my performance by enhancing my skills and
										experience, while also exploring other domains to take on
										different roles and meet task requirements.
									</p>
								</CardContent>
							</Card>
						</ScrollAnimation>
					</div>

					<div className="h-full">
						<ScrollAnimation
							delay={0.1}
							className="flex items-center gap-3 mb-2"
						>
							<div className="bg-primary/10 p-3 rounded-xl">
								<GraduationCap className="w-6 h-6 text-primary" />
							</div>
							<h2 className="text-3xl font-bold tracking-tight">Education</h2>
						</ScrollAnimation>
						<ScrollAnimation
							delay={0.3}
							className="relative h-[calc(100%-3rem)]"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl blur-3xl" />
							<Card className="relative h-full p-6 backdrop-blur-sm border border-primary/10 bg-background/50">
								<CardContent className="p-0 h-full flex flex-col justify-center">
									<div className="space-y-4">
										<div className="flex flex-col gap-4">
											<div className="space-y-2">
												<h3 className="text-2xl font-semibold">
													{EDUCATION.university}
												</h3>
												<p className="text-lg text-muted-foreground leading-relaxed">
													{EDUCATION.program}
												</p>
											</div>
											<div className="flex flex-col gap-2">
												<Badge
													variant="secondary"
													className="w-fit pl-1 py-1 text-sm font-medium"
												>
													<Calendar className="h-4 mr-1" />
													{EDUCATION.yearRange}
												</Badge>
												<span className="text-sm text-muted-foreground flex items-center">
													<Clock className="h-4" /> {EDUCATION.duration}
												</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</ScrollAnimation>
					</div>

					<div className="md:col-span-2">
						<ScrollAnimation className="flex items-center gap-3 mb-2">
							<div className="bg-primary/10 p-3 rounded-xl">
								<Wrench className="w-6 h-6 text-primary" />
							</div>
							<h2 className="text-3xl font-bold tracking-tight">
								Technologies & Tools
							</h2>
						</ScrollAnimation>
						<ScrollAnimation className="relative">
							<Card className="relative overflow-hidden border-none rounded-none shadow-none">
								<CardContent className="p-0">
									<div className="relative">
										<div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10" />
										<TechnologySlides />
										<div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10" />
									</div>
								</CardContent>
							</Card>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
