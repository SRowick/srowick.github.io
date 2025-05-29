import { useState, useEffect } from "react";
import { preload } from "react-dom";

export const useImagePreloader = (imageUrls: string[]): boolean => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setAllImagesLoaded(true);
      return;
    }

    const imagePromises: Promise<void>[] = [];

    imageUrls.forEach((url) => {
      // Use preload to start fetching the image early
      preload(url, { as: "image" });

      // Create a Promise for each image to track its actual load
      const image = new Image();
      image.src = url;

      const promise = new Promise<void>((resolve) => {
        image.onload = () => {
          resolve(); // Resolve the promise when the image loads
        };
        image.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          resolve(); // Resolve even on error, so the page still loads (can be adjusted)
        };
      });
      imagePromises.push(promise);
    });

    // Wait for all image loading promises to resolve
    Promise.all(imagePromises)
      .then(() => {
        setAllImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
        // If there's an error in Promise.all (e.g., if any promise rejected),
        // we still want to eventually show the page, so set it to true.
        // You might want more sophisticated error handling here.
        setAllImagesLoaded(true);
      });
  }, [imageUrls]); // Dependency array: re-run if imageUrls change

  return allImagesLoaded;
};
