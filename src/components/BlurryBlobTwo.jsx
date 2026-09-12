"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BlurryBlobTwo({
  className,
  firstBlobColor,
  secondBlobColor,
}) {
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlob(true); // Show the blobs after 0 seconds (can be adjusted)
    }, 0);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-0">
      {/* Make the container fixed */}
      <div className="absolute inset-0">
        {showBlob && (
          <>
            {/* First Blob */}
            <div
              className={cn(
                "absolute h-40 w-40 right-10 top-24 sm:right-20 sm:top-14 lg:right-32 dark:lg:right-56 lg:top-60 lg:h-72 lg:w-72 rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity duration-1500 animate-move-blobs",
                className,
                firstBlobColor
              )}
            ></div>

            {/* Second Blob */}
            <div
              className={cn(
                "absolute h-28 w-28 left-10 top-72 sm:left-20 sm:top-48 lg:left-20 dark:lg:left-20 lg:top-32 dark:lg:top-32 dark:lg:h-72 dark:lg:w-72 lg:h-52 lg:w-52 rounded-sm p-8 mix-blend-multiply blur-3xl filter transition-opacity duration-2000 animate-move-blobs",
                className,
                secondBlobColor
              )}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
