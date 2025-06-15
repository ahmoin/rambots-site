"use client";

import { MCSMMap } from "@/components/map-component";
import { MCSMBanner } from "@/components/mcsm-banner";
import { Sponsors } from "@/components/sponsors";
import { TextAnimate } from "@/components/text-animate";
import { WordReveal } from "@/components/word-reveal";
import { siteConfig } from "@/lib/config";

const _title = "FRC Team 4571 - The Rambots";
const _description =
	"The Rambots is a FIRST FRC robotics team, representing Manhattan Center for Science and Mathematics, located in East Harlem, our team shares the vision and wants to build a world where the future generation of STEM/STEAM students can thrive.";

export default function IndexPage() {
	return (
		<div className="@container/page flex flex-1 flex-col gap-8 p-6">
			<MCSMMap />
			<div className="flex flex-row gap-8 mt-16 -mb-16 md:-mb-0">
				<div className="w-full max-w-3xl mx-auto text-center flex flex-col justify-between">
					{/* <div className="w-1/2 min-w-2xl text-left flex flex-col justify-between"> */}
					<WordReveal
						text="The Rambots"
						className="text-6xl md:text-8xl font-semibold text-special"
					/>
					<h2 className="text-2xl md:text-4xl text-foreground text-shadow-lg w-full mx-auto">
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
