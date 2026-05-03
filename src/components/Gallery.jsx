import "../styles/Gallery.css";

export default function Gallery() {
  const photos = [
    {
      src: "/images/roatan-beach.jpg",
      alt: "Roatan crystal beach",
    },
    {
      src: "/images/roatan-aerial.jpg",
      alt: "Roatan aerial view",
    },
    {
      src: "/images/roatan-paddle.jpg",
      alt: "Paddle boarding Roatan",
    },
    {
      src: "/images/sloth-1.png",
      alt: "Sloth at sanctuary",
    },
    {
      src: "/images/sloth-2.png",
      alt: "Smiling sloth",
    },
    {
      src: "/images/monkey-1.png",
      alt: "Monkeys at the sanctuary",
    },
    {
      src: "/images/monkey-2.png",
      alt: "Monkeys at the sanctuary",
    },
    {
      src: "/images/monkey-3.png",
      alt: "Capuchin monkey",
    },
    {
      src: "/images/i-love-roatan.png",
      alt: "I love Roatan beach",
    },
    {
      src: "/images/roatan-sign.jpg",
      alt: "Roatan sign blue sky",
    },
    {
      src: "/images/roatan-sign2.jpg",
      alt: "Roatan waterfront",
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <span className="section-tag">Gallery</span>
      <h2 className="section-title">Roatan in Every Frame</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div
            className={`gallery-item ${index === 0 ? "gallery-item--large" : ""}`}
            key={index}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
