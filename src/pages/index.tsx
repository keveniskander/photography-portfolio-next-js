// pages/index.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/index.css";
import "../styles/footer.css";
import "../styles/navbar.css";
import "../styles/article.css";
import "../styles/places.css"

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Images
import background from "/public/images/ROM_copy_BW.jpg";
import places1 from "/public/images/4040/000040400021.jpg";
import places2 from "/public/images/4039/000040390012.jpg";
import places3 from "/public/images/02501083/025010830025.jpg";

const images = [places1.src, places2.src, places3.src];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="main-section">
        <div className="main-div">
          <img className="background" src={background.src} alt="Background" />
          <div className="h1-container">
            <h1>ByKevo</h1>
          </div>
          <div className="h2-container">
            <h2>collection</h2>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">

          {/* Article 1 */}
          <div className="article-container">
            <Link href="/article1" className="article-link">
              <div className="article-text-block">
                <h2>2024 Volume 1</h2>
                <p>The Eastern Canadian Stretch</p>
                <p className="learn-more">LEARN MORE</p>
              </div>
              <div className="article-image-container">
                <img
                  src={places1.src}
                  alt="Article 1"
                  className="article-image"
                  onClick={() => openLightbox(0)}
                />
              </div>
            </Link>
            <div className="article-divider"></div>
          </div>

          {/* Article 2 */}
          <div className="article-container">
            <Link href="/article2" className="article-link">
              <div className="article-text-block">
                <h2>Elie's Bachelor Banger</h2>
                <p>An Olympian Showdown</p>
                <p className="learn-more">LEARN MORE</p>
              </div>
              <div className="article-image-container">
                <img
                  src={places2.src}
                  alt="Article 2"
                  className="article-image"
                  onClick={() => openLightbox(1)}
                />
              </div>
            </Link>
            <div className="article-divider"></div>
          </div>

          {/* Article 3 */}
          <div className="article-container">
            <Link href="/article3" className="article-link">
              <div className="article-text-block">
                <h2>2023 Volume 1</h2>
                <p>A Journey Back</p>
                <p className="learn-more">LEARN MORE</p>
              </div>
              <div className="article-image-container">
                <img
                  src={places3.src}
                  alt="Article 3"
                  className="article-image"
                  onClick={() => openLightbox(2)}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={<a href={images[photoIndex]} download>Download</a>}
        />
      )}

      <Footer />
    </>
  );
}
