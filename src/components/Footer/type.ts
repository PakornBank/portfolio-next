export interface SocialLink {
	platform: string;
	url: string;
	icon: React.ComponentType<{ className?: string }>;
}
