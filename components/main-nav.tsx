"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link
				href="/"
				className="mr-4 flex items-center gap-2 lg:mr-6 text-special"
			>
				<Icons.logo className="size-14" />
				<span className="hidden font-bold text-2xl lg:inline-block">
					{siteConfig.name.toUpperCase()}
				</span>
			</Link>
			<nav className="flex items-center gap-4 text-sm xl:gap-6">
				<Link
					href="/robots"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/robots")
							? "text-foreground"
							: "text-foreground/80",
					)}
				>
					Robots
				</Link>
				<Link
					href="/team"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/team")
							? "text-foreground"
							: "text-foreground/80",
					)}
				>
					Team
				</Link>
				<Link
					href="/outreach"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/outreach")
							? "text-foreground"
							: "text-foreground/80",
					)}
				>
					Outreach
				</Link>
				<Link
					href="/media"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/media")
							? "text-foreground"
							: "text-foreground/80",
					)}
				>
					Media
				</Link>
				<Link
					href="/sponsors"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/sponsors")
							? "text-foreground"
							: "text-foreground/80",
					)}
				>
					Sponsors
				</Link>
			</nav>
		</div>
	);
}
