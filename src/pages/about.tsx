// pages/about.tsx
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import myPicture from "../public/images/OIG1.jpg"; // move your image to /public/images

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <div className="about-container">
          <Image
            src={myPicture}
            alt="My Picture"
            width={200}
            height={200}
            className="about-picture"
          />
          <div className="about-text">
            <h1>BYKEVO COLLECTION</h1>
            <p>
              Very rarely do we have the privilege of witnessing the rawest forms
              of human expression. Congrats! You've stumbled upon a virtual space
              created to explore an analog world. Here, you will find an amateur
              photographer who makes great use of a few used cameras and maintains
              a stubborn insistence that by shooting film and uploading the results
              to his website, he's somehow better than the average scrapbooking mom
              of three.
              <br />
              <br />
              Welcome to an experiment driven by genuine human experience:
              expression, experiment, experience. From this point on, I will refer
              to this as the triple ‘E’, or a screeching “EEE!” if you will. The
              BYKEVO collection is my take on the ideal memory: flawed yet strangely
              sexy. We're leaving out the “how do I look?” second takes and instead,
              leaving plenty of room for mediocrity.
              <br />
              <br />
              For every roll of 35mm shot, there will be a collection released with
              a quick written history surrounding the pieces being showcased. For
              every memory captured (good or bad), I will allow it to exist in this
              world the same way it was created: spontaneously. I refuse to allow
              ego or embarrassment to taint my perspective (also known as the double
              ‘E’). This is a vision without lip fillers, without gatekeeping, and
              without attention-seeking sociopathy. This is a collection of memories
              captured by Kevo: the BYKEVO collection.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
