// pages/article2.tsx
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageFiles = [
  "/images/4039/000040390001.jpg",
  "/images/4039/000040390002.jpg",
  "/images/4039/000040390003.jpg",
  "/images/4039/000040400004.jpg",
  "/images/4039/000040400005.jpg",
  "/images/4039/000040400006.jpg",
  "/images/4039/000040400007.jpg",
  "/images/4039/000040400008.jpg",
  "/images/4039/000040400009.jpg",
  "/images/4039/000040400010.jpg",
  "/images/4039/000040400011.jpg",
  "/images/4039/000040400012.jpg",
  "/images/4039/000040400013.jpg",
  "/images/4039/000040400014.jpg",
  "/images/4039/000040400015.jpg",
  "/images/4039/000040400016.jpg",
  "/images/4039/000040400017.jpg",
  "/images/4039/000040400018.jpg",
  "/images/4039/000040400019.jpg",
  "/images/4039/000040400020.jpg",
  "/images/4039/000040400021.jpg",
  "/images/4039/000040400022.jpg",
  "/images/4039/000040400023.jpg",
  "/images/4039/000040400024.jpg",
  "/images/4039/000040400025.jpg",
  "/images/4039/000040400026.jpg",
  "/images/4039/000040400027.jpg",
  "/images/4039/000040400028.jpg",
  "/images/4039/000040400029.jpg",
  "/images/4039/000040400030.jpg",
  "/images/4039/000040400031.jpg",
  "/images/4039/000040400032.jpg",
  "/images/4039/000040400033.jpg",
  "/images/4039/000040400035.jpg",
  "/images/4039/000040400036.jpg",
  "/images/4039/000040400037.jpg",
  "/images/4039/000040400038.jpg"
  // Add all image paths here in order
];

export default function Article2() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="article-container">
        <div className="article-text article-text-start">
          <h2>Lebanese Summer Vibes</h2>
          <p>
            Capturing the essence of Lebanon through film photography, the
            summer of 2024 brought friends, sun, and adventures worth
            documenting.
          </p>
        </div>

        {imageFiles.map((src, index) => (
          <div key={index} className="article-image-container">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={1200}
              height={800}
              className="article-image"
              onClick={() => openLightbox(index)}
            />
            {/* Add paragraph separations if needed, e.g., after certain photos */}
            {index === 10 && (
              <div className="article-text article-text-middle">
                <h2>Evening Reflections</h2>
                <p>
                  As the sun set, the streets came alive. Film captures more
                  than just light—it captures life.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imageFiles[photoIndex]}
          nextSrc={imageFiles[(photoIndex + 1) % imageFiles.length]}
          prevSrc={imageFiles[(photoIndex + imageFiles.length - 1) % imageFiles.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageFiles.length - 1) % imageFiles.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageFiles.length)
          }
          imageTitle={<a href={imageFiles[photoIndex]} download>Download</a>}
        />
      )}

      <Footer />
    </>
  );
}
