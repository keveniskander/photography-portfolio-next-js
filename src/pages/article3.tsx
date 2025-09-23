// pages/article3.tsx
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/dist/styles.css";

const imageFiles = [
  "/images/02501083/00002501083001.jpg",
  "/images/02501083/00002501083002.jpg",
  "/images/02501083/00002501083003.jpg",
  "/images/02501083/00002501083004.jpg",
  "/images/02501083/00002501083005.jpg",
  "/images/02501083/00002501083006.jpg",
  "/images/02501083/00002501083007.jpg",
  "/images/02501083/00002501083008.jpg",
  "/images/02501083/00002501083009.jpg",
  "/images/02501083/00002501083010.jpg",
  "/images/02501083/00002501083011.jpg",
  "/images/02501083/00002501083012.jpg",
  "/images/02501083/00002501083013.jpg",
  "/images/02501083/00002501083014.jpg",
  "/images/02501083/00002501083015.jpg",
  "/images/02501083/00002501083016.jpg",
  "/images/02501083/00002501083017.jpg",
  "/images/02501083/00002501083018.jpg",
  "/images/02501083/00002501083019.jpg",
  "/images/02501083/00002501083020.jpg",
  "/images/02501083/00002501083021.jpg",
  "/images/02501083/00002501083022.jpg",
  "/images/02501083/00002501083023.jpg",
  "/images/02501083/00002501083024.jpg",
  "/images/02501083/00002501083025.jpg",
  "/images/02501083/00002501083026.jpg",
  "/images/02501083/00002501083027.jpg",
  "/images/02501083/00002501083028.jpg",
  "/images/02501083/00002501083029.jpg",
  "/images/02501083/00002501083030.jpg",
  "/images/02501083/00002501083031.jpg",
  "/images/02501083/00002501083032.jpg",
  "/images/02501083/00002501083033.jpg",
  "/images/02501083/00002501083034.jpg",
  "/images/02501083/00002501083035.jpg",
  "/images/02501083/00002501083036.jpg"
  // Add all images sequentially up to the last
];

export default function Article3() {
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
          <h2>Lebanese Urban Exploration</h2>
          <p>
            A journey through the urban corners and hidden alleys, captured
            through the timeless lens of film photography.
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

            {/* Paragraph separations after photo 11, 21, and at the end */}
            {index === 10 && (
              <div className="article-text article-text-middle">
                <h2>Midway Pause</h2>
                <p>
                  Pausing to reflect, these images mark the heart of the
                  exploration—capturing fleeting moments of everyday life.
                </p>
              </div>
            )}
            {index === 20 && (
              <div className="article-text article-text-middle">
                <h2>Late Afternoon Streets</h2>
                <p>
                  Streets bathed in golden light, where shadows dance with the
                  textures of the city, captured in every frame.
                </p>
              </div>
            )}
          </div>
        ))}

        <div className="article-text article-text-middle">
          <h2>Final Thoughts</h2>
          <p>
            As the journey ends, these photographs tell a story of culture,
            life, and the undying Lebanese spirit.
          </p>
        </div>
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
