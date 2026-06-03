"use client";

import Script from "next/script";

const PLAYER_ID = "69cc2d96a987917cc95e93c3";
const OID = "b5e8472d-3421-4675-a219-1ae1b636b21f";
const THUMBNAIL = `https://images.converteai.net/${OID}/players/${PLAYER_ID}/thumbnail.jpg`;
const EMBED_SCRIPT = `https://scripts.converteai.net/${OID}/players/${PLAYER_ID}/player.js`;

export const DiabetesVideoPlayer = () => {
  return (
    <div className="box-border caret-transparent block max-w-full outline-[3px] w-full z-[1] mx-auto md:max-w-[400px]">
      <div
        id={`vid_${PLAYER_ID}`}
        style={{ position: "relative", width: "100%", padding: "125% 0 0" }}
      >
        <img
          id={`thumb_${PLAYER_ID}`}
          src={THUMBNAIL}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          alt="Video thumbnail"
        />
        <div
          id={`backdrop_${PLAYER_ID}`}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        />
      </div>
      <Script src={EMBED_SCRIPT} strategy="afterInteractive" />
    </div>
  );
};
