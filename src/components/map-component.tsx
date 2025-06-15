"use client";

import maplibregl from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

export function MCSMMap() {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<maplibregl.Map | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		try {
			map.current = new maplibregl.Map({
				container: mapContainer.current,
				style: {
					version: 8,
					sources: {
						osm: {
							type: "raster",
							tiles: [
								"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
								"https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
								"https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
							],
							tileSize: 256,
						},
					},
					layers: [
						{
							id: "background",
							type: "background",
							paint: {
								"background-color": "#1a1a1a",
							},
						},
						{
							id: "osm-tiles",
							type: "raster",
							source: "osm",
							paint: {
								"raster-brightness-min": 0.1,
								"raster-brightness-max": 0.3,
								"raster-contrast": 0.8,
								"raster-saturation": -0.8,
							},
						},
					],
				},
				center: [0, 20],
				zoom: 1.5,
				pitch: 0,
				bearing: 0,
			});

			map.current.on("error", (e) => {
				console.error("Map error:", e);
				setError("Failed to load map");
			});
			map.current.on("load", () => {
				setTimeout(() => {
					if (map.current) {
						map.current.flyTo({
							center: [-73.9333, 40.79428], // Manhattan Center for Science and Mathematics coordinates
							zoom: 18, // Zoomed in to building level
							pitch: 45, // Add some tilt for a more dynamic view
							bearing: -17.6, // Slight rotation
							duration: 3000, // 3 second animation
							essential: true,
						});
					}
				}, 1000);
			});

			map.current.scrollZoom.disable();

			map.current.addControl(new maplibregl.NavigationControl(), "top-right");
		} catch (err) {
			console.error("Failed to initialize map:", err);
			setError("Failed to initialize map");
		}

		return () => {
			if (map.current) {
				map.current.remove();
			}
		};
	}, []);

	if (error) {
		return null;
	}

	return (
		<div className="w-screen h-screen absolute inset-x-0">
			<div
				ref={mapContainer}
				className="w-full h-full"
				style={{ background: "#1a1a1a" }}
			/>
		</div>
	);
}
