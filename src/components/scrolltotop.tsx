// src/components/scrolltotop.tsx
"use client";
//kwi
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
