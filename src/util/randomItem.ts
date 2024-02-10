export default function randomItem<T extends string | number>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
