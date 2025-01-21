export interface Technology {
	category: string;
	items: string[];
	icon: React.ReactNode;
}

export interface ProjectCardProps {
	title: string;
	description: string;
	url: string;
	technologies: Technology[];
	status: string;
	iconPath?: string;
}
