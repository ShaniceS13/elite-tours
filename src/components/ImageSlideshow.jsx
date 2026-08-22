import { useState, useEffect } from "react";
import "../styles/ImageSlideshow.css";

export default function ImageSlideshow({
  images,
  altPrefix = "",
  interval = 4000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="image-slideshow">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${altPrefix} ${index + 1}`}
          className={`slideshow-img ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
