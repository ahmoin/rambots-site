import { type LucideIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
				"flex flex-col border-2 shadow-md transform transition-all duration-300 hover:scale-105 rounded-none",
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
				<CardTitle className="text-2xl text-center text-black">
					{tier} Sponsor
				</CardTitle>
				<CardDescription className="text-center text-lg font-semibold">
					{amount}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow pt-6">
				<ul className="space-y-3">
					{benefits.map((benefit, index) => (
						<li key={benefit} className="flex items-start">
							<Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
							<span>{benefit}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter className="pt-2 pb-6">
				<Link href={"/sponsor-letter"} target="_blank">
					<Button
						className={cn(
							"w-full cursor-pointer",
							buttonColor ? `${buttonColor} ${buttonHoverColor}` : "",
						)}
					>
						Become a {tier} Sponsor
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
