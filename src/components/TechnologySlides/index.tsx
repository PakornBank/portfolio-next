import Marquee from "react-fast-marquee";
import TechnologyLogo from "./TechnologyLogo";
import { TECHNOLOGIES } from "./constant";

const TechnologySlides = () => {
	return (
		<div className="w-full bg-gray-50 dark:bg-gray-900 py-8">
			<Marquee className="overflow-hidden" pauseOnHover>
				{TECHNOLOGIES.map((technologies, index) => (
					<TechnologyLogo key={index} technology={technologies} />
				))}
			</Marquee>
		</div>
	);
};

export default TechnologySlides;
