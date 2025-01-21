import Image from "next/image";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Technology } from "./type";

interface Props {
	technology: Technology;
}

const TechnologyLogo = ({ technology }: Props) => {
	const { iconPath, name, description } = technology;

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="w-32 h-32 flex items-center justify-center p-4 hover:scale-105 transition-transform">
					<Image
						src={iconPath}
						alt={`${name} logo`}
						width={0}
						height={0}
						className="w-full h-full object-contain"
					/>
				</TooltipTrigger>
				<TooltipContent>
					<p className="font-semibold">{name}</p>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{description}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default TechnologyLogo;
