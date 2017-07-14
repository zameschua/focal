import {  preloadWallpaperSuccess  } from '../backendActions';

const WALLPAPER_ID_COLLECTION = ["ibyRjqQ3BjA", "5d2ETacuSgw", "yEKFixUQydo", "p-I9wV811qk"]

const preloadAndDispatchWallpaper = (store) => {
	const randomIndex = Math.floor(Math.random() * WALLPAPER_ID_COLLECTION.length);
	const randomWallpaperId = WALLPAPER_ID_COLLECTION[randomIndex];
	const imageUrl = `https://source.unsplash.com/${randomWallpaperId}/1600x900`;
	
	// Preload image
	const image = new Image();
	image.src = imageUrl;

	// Add image to our image queue
	image.onload = () => {
		store.dispatch(preloadWallpaperSuccess(imageUrl));
	}

}

export default preloadAndDispatchWallpaper;