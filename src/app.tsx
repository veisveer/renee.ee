import React from "react";
import {ImageList, ImageListItem, useMediaQuery} from "@mui/material";

const itemData = [
	{
		img: 'https://r2.renee.ee/sun.jpeg',
		title: 'sun',
	},
	{
		img: 'https://r2.renee.ee/bird.jpeg',
		title: 'bird',
	},
	{
		img: 'https://r2.renee.ee/breach.jpeg',
		title: 'beach',
	},
	{
		img: 'https://r2.renee.ee/bridge.jpeg',
		title: 'bridge',
	},
	{
		img: 'https://r2.renee.ee/blender.jpeg',
		title: 'blender',
	},
	{
		img: 'https://r2.renee.ee/deer.jpeg',
		title: 'deer',
	},
	{
		img: 'https://r2.renee.ee/discgolf.jpeg',
		title: 'discgolf',
	},
	{
		img: 'https://r2.renee.ee/discgolf_form.jpeg',
		title: 'discgolf form',
	},
	{
		img: 'https://r2.renee.ee/lake_dog.jpeg',
		title: 'lake dog',
	},
	{
		img: 'https://r2.renee.ee/mask.jpeg',
		title: 'mask',
	},
	{
		img: 'https://r2.renee.ee/military.jpeg',
		title: 'military',
	},
	{
		img: 'https://r2.renee.ee/norwegian_discgolf.jpeg',
		title: 'norwegian discgolf',
	},
	{
		img: 'https://r2.renee.ee/queen.jpeg',
		title: 'queen',
	},
	{
		img: 'https://r2.renee.ee/raccoon_dog.jpeg',
		title: 'raccoon dog',
	},
	{
		img: 'https://r2.renee.ee/rock.jpeg',
		title: 'rock',
	},
	{
		img: 'https://r2.renee.ee/running.jpeg',
		title: 'running',
	},
	{
		img: 'https://r2.renee.ee/skiing.jpeg',
		title: 'skiing',
	},
	{
		img: 'https://r2.renee.ee/star.png',
		title: 'star',
	},
	{
		img: 'https://r2.renee.ee/tallinn.jpeg',
		title: 'tallinn',
	},
	{
		img: 'https://r2.renee.ee/trees.jpeg',
		title: 'trees',
	},
	{
		img: 'https://r2.renee.ee/winter.jpeg',
		title: 'winter',
	},
	{
		img: 'https://r2.renee.ee/car.jpeg',
		title: 'car',
	},
];

const App = () => {
	const isSmallMobile = useMediaQuery("(max-width: 480px)");
	const isMobile = useMediaQuery("(max-width: 768px)");
	const cols = isSmallMobile ? 3 : isMobile ? 4 : 5;

	return (
		<div
			style={{
				width: "150vw",
				height: "200vh",
				margin: "16px",
			}}
		>
			<ImageList variant="masonry" cols={cols} gap={16}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.img}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
							draggable={false}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};

export default App;