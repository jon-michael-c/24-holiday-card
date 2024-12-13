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
      } else {
        audio.play();
      }
    });
  }, [muted]);
  return (
    <div className="fixed top-6 right-6 rounded-full overflow-hidden z-[9999]">
      <button onClick={toggleMute} className="hover:cursor-pointer relative">
        <img
          src="/svgs/sound.svg"
          alt="sound"
          className="w-[50px] h-auto aspect-square"
        />
      </button>
    </div>
  );
}

export default Sound;
