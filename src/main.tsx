import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./style.css";

const RootPan = () => {
	const panRef = React.useRef<HTMLDivElement | null>(null);
	const dragRef = React.useRef({
		active: false,
		startX: 0,
		startY: 0,
		startScrollLeft: 0,
		startScrollTop: 0,
	});
	const [dragging, setDragging] = React.useState(false);

	const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.button !== 0) return;
		const el = panRef.current;
		if (!el) return;

		dragRef.current.active = true;
		dragRef.current.startX = e.clientX;
		dragRef.current.startY = e.clientY;
		dragRef.current.startScrollLeft = el.scrollLeft;
		dragRef.current.startScrollTop = el.scrollTop;
		setDragging(true);
		el.setPointerCapture(e.pointerId);
	};

	const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		const el = panRef.current;
		if (!el || !dragRef.current.active) return;

		const dx = e.clientX - dragRef.current.startX;
		const dy = e.clientY - dragRef.current.startY;
		el.scrollLeft = dragRef.current.startScrollLeft - dx;
		el.scrollTop = dragRef.current.startScrollTop - dy;
	};

	const stopDrag = () => {
		dragRef.current.active = false;
		setDragging(false);
	};

	return (
		<div
			ref={panRef}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={stopDrag}
			onPointerCancel={stopDrag}
			onPointerLeave={stopDrag}
			style={{
				width: "100vw",
				height: "100vh",
				overflow: "auto",
				cursor: dragging ? "grabbing" : "grab",
				userSelect: "none",
			}}
		>
			<App />
		</div>
	);
};

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
	<React.StrictMode>
		<RootPan />
	</React.StrictMode>
);