export const alphaToHexacolor = (
  baseColor: "red" | "green" | "blue",
  alpha: number
) => {
  const rescaleAlpha = 255 - (alpha / 100) * 255;
  const hexaPart = Math.round(rescaleAlpha).toString(16);
  const hexaPartFormat = hexaPart.padStart(2, "0");
  if (baseColor === "red") {
    return `#ff${hexaPartFormat}${hexaPartFormat}`;
  } else if (baseColor === "green") {
    return `#ff${hexaPart}ff`;
  } else if (baseColor === "blue") {
    return `#ffff${hexaPart}`;
  }
  return baseColor;
};
