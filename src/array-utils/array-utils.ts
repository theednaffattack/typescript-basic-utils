import { randomNumberBetween } from "../other.js";

export function first(array: any[], n = 1) {
  if (n === 1) return array[0];
  return array.filter((_, index) => index < n);
}

export function last(array: any[], n = 1) {
  if (n === 1) return array[array.length - 1];
  return array.filter((_, index) => array.length - index <= n);
}

export function sample(array: any[]) {
  return array[randomNumberBetween(0, array.length - 1)];
}

export function pluck(array: any[], key: string) {
  return array.map((element) => element[key]);
}

export function groupBy(array: any[], key: string) {
  return array.reduce((group, element) => {
    const keyValue = element[key];
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
  }, {});
}
