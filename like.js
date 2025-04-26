export function add(a, b) {
  return a + b;
}

export function like(array) {
  if (array.length === 0) {
    return 'no one likes this';
  }
  if(array.length === 1) {
    return `${array[0]} likes this`;
  }
}
