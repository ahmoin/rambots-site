import { MCSMBanner } from "@/components/mcsm-banner";
import { Sponsors } from "@/components/sponsors";
import { siteConfig } from "@/config/site";
import Balancer from "react-wrap-balancer";

export default function Page() {
	return (
		<div className="@container/page flex flex-1 flex-col gap-8 p-6">
			<div
				className={
					"absolute inset-0 h-96 md:h-auto 2xl:h-200 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#141a30_1px,transparent_1px),linear-gradient(to_bottom,#141a30_1px,transparent_1px)] -z-30"
				}
			/>
			<div className="absolute top-0 right-0 bottom-0 left-0 h-96 md:h-auto 2xl:h-200 lg bg-[radial-gradient(circle_800px_at_0%_800px,rgba(12,12,245,0.5),transparent)] -z-20"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 h-96 md:h-auto 2xl:h-200 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(12,12,245,0.5),transparent)] -z-20"></div>
			<div className="pointer-events-none absolute inset-0 h-96 md:h-auto 2xl:h-200 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>
			<div className="text-center flex flex-col gap-8 mt-16 -mb-16 md:-mb-0 md:pt-32">
				<h1 className="text-6xl md:text-8xl font-bold text-special">
					{siteConfig.name.toUpperCase()}
				</h1>
				<h2 className="text-2xl md:text-4xl text-muted-foreground w-full lg:w-1/2 mx-auto">
					<Balancer>{siteConfig.description}</Balancer>
				</h2>
			</div>
			<div className="mt-8">
				<MCSMBanner />
			</div>
			<Sponsors />
		</div>
	);
}
