import React from "react";

const AboutVideo = () => {
  return (
    <div className="py-5" style={{ height: "503px" }}>
      <iframe
        // width="560"
        // height='315'
        className="w-100 h-100"
        src="https://www.youtube.com/embed/d2IZ4sE3Nso?si=K2I46Vnna5dzY58z"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default AboutVideo;
