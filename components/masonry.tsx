"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";

import { useTransition, a } from "@react-spring/web";

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
					<div
						className="relative bg-cover bg-center w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:scale-110"
						style={{
							backgroundImage: `url(${item.image})`,
						}}
					/>
				</a.div>
			))}
		</div>
	);
};

export default Masonry;
