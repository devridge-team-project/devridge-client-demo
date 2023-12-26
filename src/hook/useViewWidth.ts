import { useEffect, useState } from "react";

export default function useViewWidth(): { viewWidth: number | undefined } {
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") setViewWidth(window.innerWidth);
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewWidth]);
  return { viewWidth };
}
