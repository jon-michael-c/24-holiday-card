import React from "react";

function Glow() {
  return (
    <div className="hidden">
      <svg>
        <defs>
          <filter id="dropshadow" height="150%" width="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="35" result="blur" />
            <feOffset dx="13" dy="13" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.7" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="offsetblur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feFlood floodColor="yellow" floodOpacity="1" result="flood" />
            <feComposite
              in="flood"
              in2="SourceAlpha"
              operator="in"
              result="coloredGlow"
            />

            <feGaussianBlur
              in="coloredGlow"
              stdDeviation="20"
              result="blurredGlow"
            />

            <feMerge>
              <feMergeNode in="blurredGlow" />
              <feMergeNode in="blurredGlow" />
              <feMergeNode in="blurredGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Glow;
