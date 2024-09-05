/**
 * Divides the number x by the number y
 *
 * @param {number} x meter
 * @param {number} y denominator
 * @throws {Error} if denominator is 0
 * @returns {number} The value of  division
 *
 * @example
 * const a = 10
 * const b = 2
 * const result = divide(a, b)
 * console.log(result)
 * // Logs: 5
 *
 * @author Jakub Szrama 5D
 */
const divide = (x, y) => {
  if (y == 0) throw new Error("Mianownik nie moze być zero");
  return x / y;
};
