import { useState } from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import "../styles/Gallery.css";

export default function Gallery() {
  const photos = [
    {
      src: "/images/butterfly-sanc-1.jpg",
      alt: "Walking into the Butterfly Sanctuary",
    },
    {
      src: "/images/butterfly-sanc-6.jpg",
      alt: "Wild Roatan mural at the Butterfly Sanctuary",
    },
    {
      src: "/images/chocolate-factory-we-1.jpg",
      alt: "Entering the Chocolate Factory",
    },
    {
      src: "/images/chocolate-factory-1.jpg",
      alt: "Chocolate Factory",
    },
    {
      src: "/images/roa-beach-sign-selfie.jpeg",
      alt: "Group selfie at the Roatan beach sign",
    },
    {
      src: "/images/on-the-rocks-2.jpg",
      alt: "Group photo on the rocks",
    },
    {
      src: "/images/chocolate-factory-we-9.jpg",
      alt: "Chocolate Factory stall",
    },
    {
      src: "/images/roatan-beach.jpg",
      alt: "Turquoise water and palm trees",
    },
    {
      src: "/images/roatan-paddle.jpg",
      alt: "Paddle boarding in Roatan",
    },
    {
      src: "/images/sanctuary-sign.png",
      alt: "Monkey Sanctuary hangout sign",
    },
    {
      src: "/images/roatan-aerial.jpg",
      alt: "Aerial view of turquoise Roatan waters",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <span className="section-tag">Gallery</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        Roatan in Every Frame
      </h2>
      <div className={`gallery-slider fade-in ${inView ? "visible" : ""}`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`gallery-slide ${index === activeIndex ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setLightboxPhoto(index)}
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="slide-overlay">
              <span>{photo.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <Link to="/gallery" className="gallery-more-link">
        See More Photos →
      </Link>

      {lightboxPhoto !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxPhoto(null)}
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxPhoto(
                (lightboxPhoto - 1 + photos.length) % photos.length,
              );
            }}
          >
            ‹
          </button>

          <img
            src={photos[lightboxPhoto].src}
            alt={photos[lightboxPhoto].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxPhoto((lightboxPhoto + 1) % photos.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
