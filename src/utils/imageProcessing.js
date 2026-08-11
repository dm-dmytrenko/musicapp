export const processImage = (url, size = 3000) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.filter = `
        contrast(108%)
        saturate(95%)
        brightness(102%)
      `;

      ctx.drawImage(
        img,
        0,
        0,
        size,
        size
      );

      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = reject;

    img.src = url;
  });
};