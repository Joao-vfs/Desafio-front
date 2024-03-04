"use client";

import React, { useState, useEffect, useCallback } from "react";

function useMobile(customWidth = 768) {
  const [mobileDetection, setMobileDetection] = useState(false);

  const checkIsMobile = useCallback(() => {
    setMobileDetection(window.innerWidth < customWidth);
  }, [customWidth]);

  useEffect(() => {
    const handleResize = () => {
      checkIsMobile();
    };

    if (typeof window !== "undefined") {
      checkIsMobile();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [checkIsMobile]);

  return mobileDetection;
}

export default useMobile;
