type Procedure = (...args: unknown[]) => void;

export const debounce = (func: Procedure, time: number): Procedure => {
  let timeout: number;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = window?.setTimeout(() => func(...args), time);
  };
};

// Debounce like function that relies on requestAnimationFrame
export const debounceWithRequestAnimationFrame = (
  func: Procedure
): Procedure => {
  let animationFrame: number;
  return (...args: unknown[]) => {
    cancelAnimationFrame(animationFrame);
    animationFrame = window?.requestAnimationFrame(() => func(...args));
  };
};
