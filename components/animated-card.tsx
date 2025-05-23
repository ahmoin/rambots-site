"use client";

import type { ReactNode } from "react";
import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/lib/utils";

export const AnimatedCard = ({
	circleSize = 400,
	className,
	children,
}: {
	circleSize?: number;
	children?: ReactNode;
	className?: string;
}) => {
	const [mouse, parentRef] = useMouse();

	return (
		<div
			className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90"
			ref={parentRef}
		>
			<div
				className={cn(
					"absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
					mouse.elementX === null || mouse.elementY === null
						? "opacity-0"
						: "opacity-100",
				)}
				style={{
					maskImage: `radial-gradient(${
						circleSize / 2
					}px circle at center, white, transparent)`,
					width: `${circleSize}px`,
					height: `${circleSize}px`,
					left: `${mouse.elementX}px`,
					top: `${mouse.elementY}px`,
					background:
						"linear-gradient(135deg, #3BF2EC, #6994F9,#7A69F9,#853FF5)",
				}}
			/>
			<div className="absolute inset-px rounded-[19px] bg-slate-200/80 dark:bg-card/80" />
			{children && (
				<div
					className={cn(
						"relative h-40 place-content-center overflow-hidden rounded-[15px]",
						className,
					)}
				>
					{children}
				</div>
			)}
		</div>
	);
};
