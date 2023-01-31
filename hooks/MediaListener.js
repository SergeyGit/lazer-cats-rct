import { useState, useEffect } from "react";

export const useMediaListener = (query) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleMedia = () => {
      setIsMatch(media.matches);
    };

    if (media.matches !== isMatch) {
      setIsMatch(media.matches);
    }

    window.addEventListener("resize", handleMedia);

    return () => {
      window.removeEventListener("resize", handleMedia);
    };
  }, [isMatch, query]);

  return isMatch;
};
