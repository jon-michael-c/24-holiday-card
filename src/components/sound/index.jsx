import React, { useState, useEffect } from "react";

function Sound() {
  const [muted, setMuted] = useState(false);
  const toggleMute = () => {
    setMuted((prev) => !prev);
    return muted;
  };
  useEffect(() => {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      if (muted) {
        audio.pause();
        audio.muted = true;
      } else {
        audio.play();
        audio.muted = false;
      }
    });
  }, [muted]);
  return (
    <div
      id="sound-btn"
      className="fixed top-2 right-2 sm:top-6 sm:right-6 rounded-full overflow-hidden z-[9999] opacity-1"
    >
      <button
        onClick={toggleMute}
        className={`hover:cursor-pointer relative bg-purple hover:bg-red transition-all p-2 sm:p-3 ${
          muted ? "bg-red muted" : "bg-purple"
        }`}
      >
        <img
          src="/svgs/sound.svg"
          alt="sound"
          className="w-[20px] sm:w-[40px] h-auto aspect-square"
        />
      </button>
    </div>
  );
}

export default Sound;
