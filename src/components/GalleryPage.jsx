import { useState } from "react";
import { Link } from "react-router-dom";
import { galleryPhotos } from "../data/galleryPhotos";
import "../styles/GalleryPage.css";

export default function GalleryPage() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  return (
    <section className="gallery-page">
      <Link to="/gallery" className="back-link gallery-page-back">
        ← Back to Gallery
      </Link>

      <span className="section-tag">Gallery</span>
      <h1 className="section-title">Roatan in Every Frame</h1>

      <div className="gallery-page-grid">
        {galleryPhotos.map((photo, index) => (
          <div
            key={index}
            className="gallery-page-item"
            onClick={() => setLightboxPhoto(index)}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

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
                (lightboxPhoto - 1 + galleryPhotos.length) %
                  galleryPhotos.length,
              );
            }}
          >
            ‹
          </button>

          <img
            src={galleryPhotos[lightboxPhoto].src}
            alt={galleryPhotos[lightboxPhoto].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxPhoto((lightboxPhoto + 1) % galleryPhotos.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
