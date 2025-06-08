import React, { useRef, useState, useEffect } from "react";
import abcVideo from "../images/fyp.mp4";

const Images = () => {
  const sectionRef = useRef(null);
  const footerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isSectionVisible = entries.some(
          (entry) => entry.target === sectionRef.current && entry.isIntersecting
        );
        const isFooterVisible = entries.some(
          (entry) => entry.target === footerRef.current && entry.isIntersecting
        );

        if (!isSectionVisible || isFooterVisible) {
          setShowVideo(false);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="bg-[#0f1319] flex flex-col justify-center items-center h-screen space-y- px-4"
      >
        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md bg-blue-600 hover:bg-blue-700 transition duration-300 animate-bounce"
          >
            Click here for view FYP
          </button>
        ) : (
          <>
            <p className="text-white text-sm md:text-2xl lg:text-4xl font-bold">
              FYP
            </p>
            <video
              src={abcVideo}
              controls
              autoPlay
              loop
              muted
              className="w-[600px] h-[480px] rounded-lg"
            />
          </>
        )}
      </div>

      <div ref={footerRef} className="h-[100px] bg-transparent w-full" />
    </>
  );
};

export default Images;
