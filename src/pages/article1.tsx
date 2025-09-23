// pages/article1.tsx
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/dist/styles.css";

//import imagesImport from "../public/images/4040"; // We'll use dynamic import below

const imageFiles = [
  "/images/4040/000040400001.jpg",
  "/images/4040/000040400002.jpg",
  "/images/4040/000040400003.jpg",
  "/images/4040/000040400004.jpg",
  "/images/4040/000040400005.jpg",
  "/images/4040/000040400006.jpg",
  "/images/4040/000040400007.jpg",
  "/images/4040/000040400008.jpg",
  "/images/4040/000040400009.jpg",
  "/images/4040/000040400010.jpg",
  "/images/4040/000040400011.jpg",
  "/images/4040/000040400012.jpg",
  "/images/4040/000040400013.jpg",
  "/images/4040/000040400014.jpg",
  "/images/4040/000040400015.jpg",
  "/images/4040/000040400016.jpg",
  "/images/4040/000040400017.jpg",
  "/images/4040/000040400018.jpg",
  "/images/4040/000040400019.jpg",
  "/images/4040/000040400020.jpg",
  "/images/4040/000040400021.jpg",
  "/images/4040/000040400022.jpg",
  "/images/4040/000040400023.jpg",
  "/images/4040/000040400024.jpg",
  "/images/4040/000040400025.jpg"
  // Add all image paths here in order
];

export default function Article1() {
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
          <h2>Mont-Sainte-Anne</h2>
          <p>
            March 2024 marked a rusty return to the film photography game. A
            fantastic day on the slopes was met with mediocre shooting results,
            but my mind was pre-occupied with more important matters.
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
            {index === 13 && (
              <div className="article-text article-text-middle">
                <h2>Summer-Squad</h2>
                <p>
                  Keven makes a fool of himself, Lina gets her citizenship &
                  Marie takes us on another journey through the great outdoors.
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
