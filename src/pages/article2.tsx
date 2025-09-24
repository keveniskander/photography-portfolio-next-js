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
  "/images/4039/000040390004.jpg",
  "/images/4039/000040390005.jpg",
  "/images/4039/000040390006.jpg",
  "/images/4039/000040390007.jpg",
  "/images/4039/000040390008.jpg",
  "/images/4039/000040390009.jpg",
  "/images/4039/000040390010.jpg",
  "/images/4039/000040390011.jpg",
  "/images/4039/000040390012.jpg",
  "/images/4039/000040390013.jpg",
  "/images/4039/000040390014.jpg",
  "/images/4039/000040390015.jpg",
  "/images/4039/000040390016.jpg",
  "/images/4039/000040390017.jpg",
  "/images/4039/000040390018.jpg",
  "/images/4039/000040390019.jpg",
  "/images/4039/000040390020.jpg",
  "/images/4039/000040390021.jpg",
  "/images/4039/000040390022.jpg",
  "/images/4039/000040390023.jpg",
  "/images/4039/000040390024.jpg",
  "/images/4039/000040390025.jpg",
  "/images/4039/000040390026.jpg",
  "/images/4039/000040390027.jpg",
  "/images/4039/000040390028.jpg",
  "/images/4039/000040390029.jpg",
  "/images/4039/000040390030.jpg",
  "/images/4039/000040390031.jpg",
  "/images/4039/000040390032.jpg",
  "/images/4039/000040390033.jpg",
  "/images/4039/000040390035.jpg",
  "/images/4039/000040390036.jpg",
  "/images/4039/000040390037.jpg",
  "/images/4039/000040390038.jpg"
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
          <h2>2024 Closing Ceremonies</h2>
          <p className="article-text">
            Ask me anything about the 2024 Summer Olympic games and I wouldn't be able to tell you
          much. Ask me about the 2024 Summer Bachelor games, and I still wouldn't be able to recount a whole lot. Thankfully, 
          we caught some of it on film. Based on the photos that came back from the lab, I'd say we did our countries proud. 
          Cheers to the athletes that left it all on the line, and cheers to the groom. Elie & Juliana 4ever baby!
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
