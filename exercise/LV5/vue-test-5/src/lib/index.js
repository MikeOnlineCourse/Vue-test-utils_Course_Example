export const secondsFormat = (second) => {
  const seconds = +second;
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = (seconds % 3600) % 60;
  if (h < 10) h = `0${h}`;
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;
  return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
};
