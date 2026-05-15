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
    }
    fill(startRow, startCol);
    return result;

}
