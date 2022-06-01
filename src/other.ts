// Create an array of numbers
export const nums = Array.from({ length: 10 }, (_, i) => i);

// https://youtu.be/EoUIS2PxKCs?t=490
export function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (min - max + 1) + min);
}

export function sleep(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Memoize tutorial: https://www.youtube.com/watch?v=WbwP4w6TpCk&t=0s

export function memoize(cb: (...args: any[]) => any) {
  const cache = new Map();
  return (...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = cb(...args);
    cache.set(key, result);
    return result;
  };
}

// https://stackoverflow.com/a/7228322/9448010
export function randomIntFromInteger(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// https://github.com/christopher4lis/canvas-boilerplate/blob/master/src/js/utils.js
export function randomIntFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColor(colors: string[]) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
