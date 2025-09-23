// pages/places.tsx
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const images = [
  "/images/places/0001.jpg",
  "/images/places/0002.jpg",
  "/images/places/0003.jpg",
  // Add all images sequentially
];

export default function Places() {
  return (
    <>
      <Navbar />
      <div className="article-container">
        <h1>Places Explored</h1>

        {images.map((src, index) => (
          <div key={index} className="article-image-container">
            <Image
              src={src}
              alt={`Place ${index + 1}`}
              width={1200}
              height={800}
              className="article-image"
            />
          </div>
        ))}

        <div className="article-text-block">
          <h2>Discovering Hidden Corners</h2>
          <p>
            From bustling streets to quiet corners, each place has a story
            captured through the lens.
          </p>
        </div>

        <div className="article-divider"></div>

        <div className="article-text-block">
          <h2>Immersive Experiences</h2>
          <p>
            Walking through these places, the textures, light, and shadows
            form a narrative of exploration and discovery.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
