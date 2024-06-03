export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  console.log("Image error:", e.currentTarget.src);
  e.currentTarget.onerror = null; // Prevent infinite loops
  e.currentTarget.src = "/fallback-image.jpeg";
};
