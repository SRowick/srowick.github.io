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
      preload(url, { as: "image" });

      const image = new Image();
      image.src = url;

      const promise = new Promise<void>((resolve) => {
        image.onload = () => {
          resolve();
        };
        image.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          resolve();
        };
      });
      imagePromises.push(promise);
    });

    // Wait for all the image loading promises to resolve
    Promise.all(imagePromises)
      .catch((error) => {
        console.error("Error preloading images:", error);
      })
      .finally(() => {
        setAllImagesLoaded(true); // Still set setAlImagesLoaded to true after an error because the user should still see the page
      });
  }, [imageUrls]);

  return allImagesLoaded;
};
