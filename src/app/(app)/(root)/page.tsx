"use client";

import { MCSMBanner } from "@/components/mcsm-banner";
import SplitText from "@/components/split-text";
import { Sponsors } from "@/components/sponsors";
import { TextAnimate } from "@/components/text-animate";
import { siteConfig } from "@/lib/config";

const _title = "FRC Team 4571 - The Rambots";
const _description =
	"The Rambots is a FIRST FRC robotics team, representing Manhattan Center for Science and Mathematics, located in East Harlem, our team shares the vision and wants to build a world where the future generation of STEM/STEAM students can thrive.";

export default function IndexPage() {
	return (
		<div className="@container/page flex flex-1 flex-col gap-8 p-6">
			<div className="absolute inset-0 h-96 md:h-auto 2xl:h-200 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#141a30_1px,transparent_1px),linear-gradient(to_bottom,#141a30_1px,transparent_1px)] -z-30" />
			<div className="absolute top-0 right-0 bottom-0 left-0 h-96 md:h-auto 2xl:h-200 lg bg-[radial-gradient(circle_800px_at_0%_800px,rgba(12,12,245,0.5),transparent)] -z-20"></div>
			<div className="absolute top-0 right-0 bottom-0 left-0 h-96 md:h-auto 2xl:h-200 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(12,12,245,0.5),transparent)] -z-20"></div>
			<div className="pointer-events-none absolute inset-0 h-96 md:h-auto 2xl:h-200 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>
			<div className="flex flex-row gap-8 mt-16 -mb-16 md:-mb-0">
				<div className="w-full max-w-3xl mx-auto text-center flex flex-col justify-between">
					{/* <div className="w-1/2 min-w-2xl text-left flex flex-col justify-between"> */}
					<SplitText
						text="The Rambots"
						className="text-6xl md:text-8xl font-semibold text-special"
						delay={10}
						duration={2}
						ease="elastic.out(1, 0.3)"
						splitType="words, chars"
						threshold={0.1}
						rootMargin="-100px"
						// textAlign="left"
						textAlign="center"
					/>
					<h2 className="text-2xl md:text-4xl text-muted-foreground w-full mx-auto">
						<TextAnimate animation="blurInUp" by="word" once>
							{siteConfig.description}
						</TextAnimate>
					</h2>
				</div>
			</div>
			<div className="mt-8">
				<MCSMBanner />
			</div>
			<Sponsors />
		</div>
	);
}
