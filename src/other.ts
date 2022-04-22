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

export function memoize(cb: any) {
  const cache = new Map();
  return (...args: any) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = cb(...args);
    cache.set(key, result);
    return result;
  };
}