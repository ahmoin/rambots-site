"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";

import { useTransition, a } from "@react-spring/web";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";

interface MasonryItem {
	id: string | number;
	height: number;
	image: string;
}

interface GridItem extends MasonryItem {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface MasonryProps {
	data: MasonryItem[];
}

const Masonry: React.FC<MasonryProps> = ({ data }) => {
	const [columns, setColumns] = useState<number>(2);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	useEffect(() => {
		const updateColumns = () => {
			if (window.matchMedia("(min-width: 1500px)").matches) {
				setColumns(5);
			} else if (window.matchMedia("(min-width: 1000px)").matches) {
				setColumns(4);
			} else if (window.matchMedia("(min-width: 600px)").matches) {
				setColumns(3);
			} else {
				setColumns(1);
			}
		};

		updateColumns();

		window.addEventListener("resize", updateColumns);

		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	const ref = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				setWidth(ref.current.offsetWidth);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
		const heights = new Array(columns).fill(0);

		const gridItems = data.map((child) => {
			const column = heights.indexOf(Math.min(...heights));

			const x = (width / columns) * column;
			heights[column] += child.height / 2;
			const y = heights[column] - child.height / 2;

			return {
				...child,
				x,
				y,
				width: width / columns,
				height: child.height / 2,
			};
		});

		return [heights, gridItems];
	}, [columns, data, width]);

	const transitions = useTransition<
		GridItem,
		{ x: number; y: number; width: number; height: number; opacity: number }
	>(gridItems, {
		keys: (item) => item.id,
		from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
		enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
		update: ({ x, y, width, height }) => ({ x, y, width, height }),
		leave: { height: 0, opacity: 0 },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25,
	});

	return (
		<div
			ref={ref}
			className="relative w-full h-full"
			style={{ height: Math.max(...heights) }}
		>
			{transitions((style, item) => (
				// @ts-expect-error Type definitions missing children prop for animated div
				<a.div
					key={item.id}
					style={style}
					className="absolute will-change-transform will-change-width will-change-height will-change-opacity p-2.5"
				>
					<Dialog>
						<DialogTrigger asChild>
							<div
								className="relative bg-cover bg-center w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								onClick={() => {
									setSelectedImage(item.image);
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										setSelectedImage(item.image);
									}
								}}
								// biome-ignore lint/a11y/noNoninteractiveTabindex: intentionally adding tabindex for accessibility
								tabIndex={0}
							/>
						</DialogTrigger>
						<DialogContent className="md:min-w-[80vw]">
							{selectedImage && (
								// biome-ignore lint/nursery/noImgElement: needed for dynamic image sizes
								<img
									src={selectedImage}
									alt="Full Size"
									className="w-full h-auto object-contain"
								/>
							)}
							<DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none [&_svg]:h-4 [&_svg]:w-4">
								<XIcon className="h-4 w-4" />
								<span className="sr-only">Close</span>
							</DialogClose>
						</DialogContent>
					</Dialog>
				</a.div>
			))}
		</div>
	);
};

export default Masonry;
