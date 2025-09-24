// pages/article3.tsx
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageFiles = [
  "/images/02501083/025010830001.jpg",
  "/images/02501083/025010830002.jpg",
  "/images/02501083/025010830003.jpg",
  "/images/02501083/025010830004.jpg",
  "/images/02501083/025010830005.jpg",
  "/images/02501083/025010830006.jpg",
  "/images/02501083/025010830007.jpg",
  "/images/02501083/025010830008.jpg",
  "/images/02501083/025010830009.jpg",
  "/images/02501083/025010830010.jpg",
  "/images/02501083/025010830012.jpg",
  "/images/02501083/025010830013.jpg",
  "/images/02501083/025010830014.jpg",
  "/images/02501083/025010830015.jpg",
  "/images/02501083/025010830016.jpg",
  "/images/02501083/025010830017.jpg",
  "/images/02501083/025010830018.jpg",
  "/images/02501083/025010830019.jpg",
  "/images/02501083/025010830020.jpg",
  "/images/02501083/025010830021.jpg",
  "/images/02501083/025010830022.jpg",
  "/images/02501083/025010830023.jpg",
  "/images/02501083/025010830024.jpg",
  "/images/02501083/025010830025.jpg",
  "/images/02501083/025010830026.jpg",
  "/images/02501083/025010830027.jpg",
  "/images/02501083/025010830028.jpg",
  "/images/02501083/025010830029.jpg",
  "/images/02501083/025010830030.jpg",
  "/images/02501083/025010830031.jpg",
  "/images/02501083/025010830032.jpg",
  "/images/02501083/025010830033.jpg",
  "/images/02501083/025010830034.jpg",
  "/images/02501083/025010830035.jpg",
  "/images/02501083/025010830036.jpg"
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
          <h2>Literally All Over The Place</h2>
          <p className="article-text">
            The disorganized, scrappy mess of a roll speaks for itself. It can be succinctly described as a grouping of terribly unbalanced photos with incredibly unique perspectives. We start our journey
            in the dimly lit Parisian streets wondering what the hell optimal lighting looks like. In the end, we're left with a hot dose of nostalgia and a terrible wine hangover.
            You may ask: Was it worth it?? -- I invite you to be the judge. 
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
                <p>I have no recollection of this next grouping of photos and when I received this roll back from the lab, I had more questions than answers. My camera looks to 
                  have been hijacked at my aunt's house sometime in the late summer of 2023. Its always refreshing to catch a few frames back from the lab that weren't
                  executed by me and this is no exception.</p>
              </div>
            )}
            {index === 20 && (
              <div className="article-text article-text-middle">
                <p>Now from my aunts house we're immediately thrown into a journey that begins in the port of Athens. A few frames on, we find ourselves on a blissful voyage
                  that takes us to our final destination for this exposition: Milos. This small greek island tucked away peacefully behind the chaos tops my list (and this roll) as
                  the perfect end to a perfect summer.</p>
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
