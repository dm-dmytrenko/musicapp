/**
 * Transforms raw second counter dimensions into clean MM:SS layout formats.
 * @param {number} time - Number of seconds
 * @returns {string} Clean formatted time string
 */
export const formatTime = (time) => {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

/**
 * Procedurally generates structural bar heights for mock audio rendering blocks.
 * @returns {number[]} Array of bar heights
 */
export const generateMockWaveformHeights = () => {
  const bars = [];
  for (let i = 0; i < 60; i++) {
    bars.push(Math.floor(Math.random() * 75) + 15);
  }
  return bars;
};