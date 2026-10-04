import { useEffect, useState } from "react";
import "./ImagePlaceholder.css";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: string;
};

export function ImagePlaceholder({
  src,
  alt,
  label = "Photo coming soon",
  className = "",
  aspect,
}: ImagePlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => {
      if (active) {
        setLoaded(true);
        setFailed(false);
      }
    };
    img.onerror = () => {
      if (active) {
        setFailed(true);
        setLoaded(false);
      }
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  const showImage = loaded && !failed;

  return (
    <div
      className={`image-placeholder ${className}`.trim()}
      style={aspect ? { aspectRatio: aspect } : undefined}
      role="img"
      aria-label={alt}
    >
      {showImage ? (
        <img src={src} alt={alt} className="image-placeholder__img" />
      ) : (
        <div className="image-placeholder__empty">
          <span className="image-placeholder__mark" aria-hidden="true" />
          <span className="image-placeholder__label">{label}</span>
        </div>
      )}
    </div>
  );
}
