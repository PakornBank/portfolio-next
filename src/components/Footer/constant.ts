import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "./type";

export const SOCIAL_LINKS: SocialLink[] = [
	{ platform: "GitHub", url: "https://github.com/PakornBank/", icon: Github },
	{
		platform: "LinkedIn",
		url: "https://www.linkedin.com/in/pakorn-bank",
		icon: Linkedin,
	},
	{ platform: "Email", url: "mailto:pakorn22120@gmail.com", icon: Mail },
];
