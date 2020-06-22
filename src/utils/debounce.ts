type Procedure = (...args: any[]) => void;

export const debounce = (func: Procedure, time: number) => {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), time);
  };
};

// Debounce like function that relies on requestAnimationFrame
export const debounceWithRequestAnimationFrame = (func: Procedure) => {
  let animationFrame: number;
  return (...args: any[]) => {
    cancelAnimationFrame(animationFrame);
    animationFrame = window.requestAnimationFrame(() => func(...args));
  };
};