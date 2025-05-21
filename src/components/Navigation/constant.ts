import { NavItem } from "./type";
import { User, Info, FileBadge, Award } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
	{ label: "Home", href: "#hero", icon: User },
	{ label: "About", href: "#about", icon: Info },
	{ label: "Experience", href: "#experience", icon: FileBadge },
	{ label: "Certifications", href: "#certification", icon: Award },
];
