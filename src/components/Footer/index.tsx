import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "./constant";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t border-border">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-muted-foreground text-center md:text-left">
						© {currentYear} Pakorn Phongkhunakorn. All rights reserved.
					</div>

					<div className="flex items-center space-x-4">
						{SOCIAL_LINKS.map((link) => {
							const Icon = link.icon;
							return (
								<Button
									key={link.platform}
									variant="ghost"
									size="icon"
									className="hover:text-primary"
									asChild
								>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={link.platform}
									>
										<Icon className="h-5 w-5" />
									</a>
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
