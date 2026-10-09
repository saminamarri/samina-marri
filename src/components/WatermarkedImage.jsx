import React from 'react';

export default function WatermarkedImage({
  src,
  alt,
  className = "",
  imgClassName = "w-full h-full object-cover object-center",
  text = "Samina Marri ©"
}) {
  const patternId = React.useId();

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      {/* Original Artwork Image */}
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/paintings/painting-01.svg';
        }}
      />

      {/* Semi-Transparent Repeated Diagonal Watermark Layer */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-25 z-10"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={patternId}
            width="170"
            height="110"
            patternTransform="rotate(-30 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="15"
              y="55"
              fill="#FFFFFF"
              stroke="rgba(0, 0, 0, 0.7)"
              strokeWidth="0.6"
              fontSize="12"
              fontFamily="Georgia, serif"
              fontWeight="bold"
              letterSpacing="1.8"
            >
              {text}
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
