import { Sponsors } from "@/components/sponsors";
import { siteConfig } from "@/config/site";
import Balancer from "react-wrap-balancer";

export default function Page() {
	return (
		<div className="@container/page flex flex-1 flex-col gap-8 p-6">
			<div className="text-center flex flex-col gap-8">
				<h1 className="text-6xl md:text-8xl font-bold text-special">
					{siteConfig.name.toUpperCase()}
				</h1>
				<h2 className="text-2xl md:text-4xl text-muted-foreground w-full lg:w-1/2 mx-auto">
					<Balancer>{siteConfig.description}</Balancer>
				</h2>
			</div>
			<Sponsors />
		</div>
	);
}
