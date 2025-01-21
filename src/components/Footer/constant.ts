import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "./type";

export const SOCIAL_LINKS: SocialLink[] = [
	{ platform: "GitHub", url: "https://github.com", icon: Github },
	{ platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
	{ platform: "Email", url: "mailto:your@email.com", icon: Mail },
];
