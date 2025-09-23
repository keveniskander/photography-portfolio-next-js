// pages/index.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/dist/styles.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import background from "../public/images/ROM_copy_BW.jpg";
import places1 from "../public/images/4040/000040400021.jpg";
import places2 from "../public/images/4039/000040390012.jpg";
import places3 from "../public/images/02501083/025010830025.jpg";

const images = [places1.src, places2.src, places3.src]; // <-- use .src

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
      <section className="main-section">
        <div className="main-div">
          <Image
            src={background}
            alt="Background"
            className="background"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="h1-container">
            <h1>ByKevo</h1>
          </div>
          <div className="h2-container">
            <h2>collection</h2>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="p-container"></div>

          {/* Article 1 */}
          <div className="article">
            <Link href="/article1" passHref>
              <div className="article-content" onClick={() => openLightbox(0)}>
                <div className="article-text">
                  <h3>2024 Volume 1</h3>
                  <p>The Eastern Canadian Stretch</p>
                  <p className="learn-more">LEARN MORE</p>
                </div>
                <Image
                  src={places1}
                  alt="Article 1"
                  className="article-image"
                  width={600}
                  height={400}
                />
              </div>
            </Link>
          </div>

          <hr />

          {/* Article 2 */}
          <div className="article">
            <Link href="/article2" passHref>
              <div className="article-content" onClick={() => openLightbox(1)}>
                <div className="article-text">
                  <h3>Elie's Bachelor Banger</h3>
                  <p>An Olympian Showdown</p>
                  <p className="learn-more">LEARN MORE</p>
                </div>
                <Image
                  src={places2}
                  alt="Article 2"
                  className="article-image"
                  width={600}
                  height={400}
                />
              </div>
            </Link>
          </div>

          <hr />

          {/* Article 3 */}
          <div className="article">
            <Link href="/article3" passHref>
              <div className="article-content" onClick={() => openLightbox(2)}>
                <div className="article-text">
                  <h3>2023 Volume 1</h3>
                  <p>A Journey Back</p>
                  <p className="learn-more">LEARN MORE</p>
                </div>
                <Image
                  src={places3}
                  alt="Article 3"
                  className="article-image"
                  width={600}
                  height={400}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          slides={images.map((src) => ({ src }))} // <-- Lightbox expects objects with src
          open={isOpen}
          index={photoIndex}
          close={() => setIsOpen(false)}
        />
      )}
      <Footer />
    </>
  );
}
