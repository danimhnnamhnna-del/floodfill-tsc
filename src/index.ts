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

  return result;
}
