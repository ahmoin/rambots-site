import Masonry from "@/components/masonry";

const data = [
	{ id: 1, image: "./media/ilike1.jpg", height: 400 },
	{ id: 2, image: "./media/ilike2.jpg", height: 300 },
	{ id: 3, image: "./media/ilike3.jpg", height: 300 },
	{ id: 4, image: "./media/ilike4.jpg", height: 300 },
	{ id: 5, image: "./media/ilike5.jpg", height: 300 },
	{ id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
	{ id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
	{ id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
	{ id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
	{ id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
	{ id: 11, image: "https://picsum.photos/id/103/200/300", height: 400 },
	{ id: 12, image: "https://picsum.photos/id/10/200/300", height: 400 },
	{ id: 13, image: "https://picsum.photos/id/14/200/300", height: 300 },
	{ id: 14, image: "https://picsum.photos/id/15/200/300", height: 300 },
	{ id: 15, image: "https://picsum.photos/id/16/200/300", height: 300 },
	{ id: 16, image: "https://picsum.photos/id/17/200/300", height: 300 },
	{ id: 17, image: "https://picsum.photos/id/19/200/300", height: 300 },
	{ id: 18, image: "https://picsum.photos/id/37/200/300", height: 200 },
	{ id: 19, image: "https://picsum.photos/id/39/200/300", height: 300 },
	{ id: 20, image: "https://picsum.photos/id/85/200/300", height: 200 },
];

export default function Page() {
	return (
		<div>
			<Masonry data={data} />
		</div>
	);
}
