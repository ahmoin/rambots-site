import { Check, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SponsorCardProps {
	tier: string;
	amount: string;
	icon: LucideIcon;
	benefits: string[];
	borderColor: string;
	gradientFrom: string;
	gradientTo: string;
	iconColor: string;
	buttonColor?: string;
	buttonHoverColor?: string;
	featured?: boolean;
}

export function SponsorCard({
	tier,
	amount,
	icon: Icon,
	benefits,
	borderColor,
	gradientFrom,
	gradientTo,
	iconColor,
	buttonColor,
	buttonHoverColor,
	featured = false,
}: SponsorCardProps) {
	return (
		<Card
			className={cn(
				"flex flex-col border-2 shadow-md transform transition-all duration-300 hover:scale-105",
				borderColor,
				featured ? "shadow-lg" : "shadow-md",
			)}
		>
			<CardHeader
				className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} pb-6 -mt-6 pt-6 rounded-none`}
			>
				<div className="flex justify-center mb-4">
					<Icon className={`h-12 w-12 ${iconColor}`} />
				</div>
				<CardTitle className="text-2xl text-center">{tier} Sponsor</CardTitle>
				<CardDescription className="text-center text-lg font-semibold">
					{amount}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow pt-6">
				<ul className="space-y-3">
					{benefits.map((benefit) => (
						<li key={benefit} className="flex items-start">
							<Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
							<span>{benefit}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter className="pt-2 pb-6">
				<Button
					className={cn(
						"w-full cursor-pointer",
						buttonColor ? `${buttonColor} ${buttonHoverColor}` : "",
					)}
					asChild
				>
					<Link href={"/sponsor-letter"} target="_blank">
						Become a {tier} Sponsor
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
