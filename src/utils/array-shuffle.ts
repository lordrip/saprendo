export const arrayShuffle = (array: unknown[]) => {
  let currentIndex = array.length;
  let temp: unknown = 0;
  let index = 0;

  while (0 !== currentIndex) {
    index = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[index];
    array[index] = temp;
  }

  return array;
};
