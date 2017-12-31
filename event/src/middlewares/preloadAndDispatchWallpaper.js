import { preloadWallpaperSuccess } from "../backendActions";

const WALLPAPER_ID_COLLECTION = [
  "8zMIksrTrOQ",
  "mGYxAWITqMg",
  "MctEgCk1Dm0",
  "ed-hLWaknyk",
  "in9-n0JwgZ0",
  "daYZ8ixAn8g",
  "63DhhZq03LI"
];

const preloadAndDispatchWallpaper = (store) => {
  const randomIndex = Math.floor(
    Math.random() * WALLPAPER_ID_COLLECTION.length
  );
  const randomWallpaperId = WALLPAPER_ID_COLLECTION[randomIndex];
  const imageUrl = `https://source.unsplash.com/${randomWallpaperId}/1920x1080`;

  // Preload image
  const image = new Image();
  image.src = imageUrl;

  // Add image to our image queue
  image.onload = () => {
    store.dispatch(preloadWallpaperSuccess(imageUrl));
  };
};

export default preloadAndDispatchWallpaper;
