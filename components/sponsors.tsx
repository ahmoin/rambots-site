"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/glowing-effect";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SponsorCard({
	name,
	href,
	image,
	darkImage,
}: {
	name: string;
	href: string;
	image: string;
	darkImage?: string;
}) {
	const hasDarkImage = !!darkImage;

	return (
		<Link className="aspect-square h-96 w-96" href={href}>
			<Card className="size-full relative">
				<GlowingEffect
					spread={40}
					glow={true}
					proximity={64}
					disabled={false}
					inactiveZone={0.01}
					borderWidth={2}
				/>
				<CardContent className="w-full h-48 flex items-center justify-center mt-4">
					<Image
						src={image}
						alt={name}
						className={cn(
							"object-contain size-full",
							hasDarkImage ? "dark:hidden" : "",
						)}
						width={512}
						height={512}
					/>
					{hasDarkImage && (
						<Image
							src={darkImage}
							alt={`${name} (Dark Mode)`}
							className="object-contain size-full hidden dark:block"
							width={512}
							height={512}
						/>
					)}
				</CardContent>
				<CardHeader className="text-center mt-8">
					<CardTitle className="text-2xl">{name}</CardTitle>
					<div className="text-sm text-blue-300 flex flex-row items-center justify-center gap-2">
						<p>Learn More</p> <ExternalLink className="mt-0.5" size={16} />
					</div>
				</CardHeader>
			</Card>
		</Link>
	);
}

export function Sponsors() {
	return (
		<section className="flex flex-col items-center justify-center w-full py-32">
			<div>
				<h2 className="text-6xl text-center font-bold mb-8">Our Sponsors</h2>
				<p className="text-center text-lg text-muted-foreground mb-8">
					We are grateful for the support of our sponsors, who make our
					team&apos;s success possible.
				</p>
			</div>
			<div className="flex flex-wrap justify-center gap-4 w-3/4 mx-auto">
				<SponsorCard
					name="BAE Systems"
					href="https://www.baesystems.com/"
					image="/bae-systems.svg"
				/>
				<SponsorCard
					name="Gene Haas Foundation"
					href="https://www.ghaasfoundation.org/"
					image="/gene-haas-foundation.png"
				/>
				<SponsorCard
					name="Bloomberg"
					href="https://www.bloomberg.com/"
					image="/bloomberg.svg"
					darkImage="/bloomberg-dark.svg"
				/>
				<SponsorCard
					name="NYC First"
					href="https://www.nycfirst.org/"
					image="/nyc-first.png"
					darkImage="/nyc-first-dark.png"
				/>
			</div>
		</section>
	);
}
