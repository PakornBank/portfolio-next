"use client";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { CERTIFICATIONS } from "./constant";
import Image from "next/image";
import Link from "next/link";

const CertificationSection = () => {
	return (
		<section
			id="certification"
			className="w-full max-w-4xl mx-auto p-4 pt-16 pb-16 relative"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl -z-10" />

			<ScrollAnimation>
				<div className="flex items-center justify-start gap-3 mb-6 w-full">
					<div className="bg-primary/10 p-3 rounded-xl">
						<Award className="w-6 h-6 text-primary" />
					</div>
					<h2 className="text-3xl font-bold">Certifications</h2>
				</div>
			</ScrollAnimation>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{CERTIFICATIONS.map((cert, index) => (
					<ScrollAnimation delay={0.1 * index} key={cert.id}>
						<Card className="overflow-hidden border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-secondary/20 to-secondary/5 h-full">
							<CardContent className="p-6">
								<div className="flex flex-col h-full">
									<div className="flex items-start justify-between mb-4">
										<div className="flex flex-col">
											<h3 className="text-xl font-semibold mb-1">
												{cert.name}
											</h3>
											<p className="text-muted-foreground text-sm">
												{cert.issuer}
											</p>
										</div>
										{cert.logo && (
											<div className="h-12 w-12 relative flex-shrink-0">
												<Image
													src={cert.logo}
													alt={`${cert.issuer} logo`}
													width={48}
													height={48}
													className="object-contain"
												/>
											</div>
										)}
									</div>

									<div className="mb-4">
										<Badge
											variant="secondary"
											className="w-fit pl-1 py-1 text-sm font-medium"
										>
											<Calendar className="h-4 mr-1" />
											{cert.date}
										</Badge>
									</div>

									{cert.description && (
										<p className="text-sm text-muted-foreground mb-4">
											{cert.description}
										</p>
									)}

									{cert.certificateImage && (
										<div className="my-4 relative w-full h-48 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
											<Image
												src={cert.certificateImage}
												alt={`${cert.name} Certificate`}
												fill
												className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
												onClick={() =>
													window.open(cert.certificateImage, "_blank")
												}
											/>
										</div>
									)}

									<div className="mt-auto">
										{cert.url && !cert.certificateImage && (
											<Link
												href={cert.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
											>
												View Certificate
												<ExternalLink className="h-3 w-3" />
											</Link>
										)}
										{!cert.url && cert.certificateImage && (
											<span className="text-sm text-muted-foreground">
												Click the image above to view the full certificate
											</span>
										)}
										{cert.url && cert.certificateImage && (
											<Link
												href={cert.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
											>
												Verify Certificate
												<ExternalLink className="h-3 w-3" />
											</Link>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					</ScrollAnimation>
				))}
			</div>
		</section>
	);
};

export default CertificationSection;
