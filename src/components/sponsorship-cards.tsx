import { Award, Shield, Trophy } from "lucide-react";
import { SponsorCard } from "@/components/sponsor-card";

const sponsorshipTiers = [
	{
		tier: "Platinum",
		amount: "$5000+",
		icon: Trophy,
		benefits: [
			"Mentioned and thanked during alliance selection at competitions",
			"Large logo displayed on our yearly robot",
			"Large logo displayed on our banner at events",
			"Large logo displayed on the back of team apparel",
			"Thank-you bag with signed letter and team apparel",
		],
		borderColor: "border-amber-300",
		gradientFrom: "amber-100",
		gradientTo: "amber-200",
		iconColor: "text-amber-600",
		buttonColor: "bg-amber-500",
		buttonHoverColor: "hover:bg-amber-600",
		featured: true,
	},
	{
		tier: "Gold",
		amount: "$2000-$4,999",
		icon: Award,
		benefits: [
			"Medium-sized logo displayed on our yearly robot",
			"Medium-sized logo displayed on our banner at events",
			"Medium-sized logo displayed on the back of team apparel",
			"Thank-you bag with signed letter and team apparel",
		],
		borderColor: "border-yellow-200",
		gradientFrom: "yellow-50",
		gradientTo: "yellow-100",
		iconColor: "text-yellow-600",
		buttonColor: "bg-yellow-500",
		buttonHoverColor: "hover:bg-yellow-600",
	},
	{
		tier: "Silver",
		amount: "$500-$1,999",
		icon: Shield,
		benefits: [
			"Small-sized logo displayed on our yearly robot",
			"Small-sized logo displayed on the back of team apparel",
			"Thank-you bag with signed letter and team apparel",
		],
		borderColor: "border-gray-200",
		gradientFrom: "gray-50",
		gradientTo: "gray-100",
		iconColor: "text-gray-500",
	},
	{
		tier: "Bronze",
		amount: "Up to $499",
		icon: Award,
		benefits: ["Signed thank-you letter from the team"],
		borderColor: "border-orange-100",
		gradientFrom: "orange-50",
		gradientTo: "orange-100",
		iconColor: "text-orange-400",
		buttonColor: "bg-orange-400",
		buttonHoverColor: "hover:bg-orange-500",
	},
];

export default function SponsorshipCards() {
	return (
		<div className="container mx-auto py-12 px-4">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-4">
					Support the Rambots FRC Team
				</h1>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Your sponsorship helps our team build robots, compete in tournaments,
					and develop STEM skills.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{sponsorshipTiers.map((tier) => (
					<SponsorCard
						key={tier.tier}
						tier={tier.tier}
						amount={tier.amount}
						icon={tier.icon}
						benefits={tier.benefits}
						borderColor={tier.borderColor}
						gradientFrom={tier.gradientFrom}
						gradientTo={tier.gradientTo}
						iconColor={tier.iconColor}
						buttonColor={tier.buttonColor}
						buttonHoverColor={tier.buttonHoverColor}
						featured={tier.featured}
					/>
				))}
			</div>
		</div>
	);
}
