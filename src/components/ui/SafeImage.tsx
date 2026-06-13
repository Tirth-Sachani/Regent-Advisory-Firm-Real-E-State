"use client";

import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackText = "Image Unavailable",
  className = "",
  containerClassName = "",
  ...props
}: SafeImageProps) {
  const [isError, setIsError] = useState(false);

  if (isError || !src) {
    return (
      <div
        className={`w-full h-full bg-[#0A192F] border border-tertiary/20 flex flex-col items-center justify-center p-3 text-center transition-all ${containerClassName}`}
      >
        <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-tertiary">
          {fallbackText}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setIsError(true)}
      {...props}
    />
  );
}
