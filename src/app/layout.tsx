// app/layout.tsx
import "./globals.css"; // Tailwind + global styles
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrolltotop";

export const metadata = {
  title: "ByKevo Photography Portfolio",
  description: "A portfolio showcasing ByKevo photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
        {/* Ensures scroll resets on route change */}
        <ScrollToTop />

        {/* Navbar always visible */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer always visible */}
        <Footer />
      </body>
    </html>
  );
}
