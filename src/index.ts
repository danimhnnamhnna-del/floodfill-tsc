function floodFill(
  image: number[][],
  startRow: number,
  startCol: number,
  newColor: number,
): number[][] {
  const rowsCount = image.length;
  const colsCount = image[0]!.length;
  const oldColor = image[startRow]![startCol];
  if (oldColor === newColor) {
    return image;
  }
  const result = image.map((row) => [...row]);
  function fill(row: number, col: number) {
    if (row < 0 || row >= rowsCount || col < 0 || col >= colsCount) {
      return;
    }
    if (result[row]![col] !== oldColor) {
      return;
      }
      result[row]![col] = newColor;
      fill(row + 1, col);
      fill(row - 1, col);
      fill(row, col + 1);
      fill(row, col - 1);
  }
  fill(startRow, startCol);
  return result;
}
const myImage = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

const updatedImage = floodFill(myImage, 1, 1, 2);

console.table(updatedImage);
