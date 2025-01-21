import { NavItem } from "./type";
import { User, FolderGit2, Info, FileBadge } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
	{ label: "Home", href: "#hero", icon: User },
	{ label: "About", href: "#about", icon: Info },
	{ label: "Experience", href: "#experience", icon: FileBadge },
	{ label: "Project", href: "#project", icon: FolderGit2 },
];
