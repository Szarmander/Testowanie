/**
 * Calculate circle area
 * @param {number} radius radius of circle
 * @throws {Error} if radius is lower than 0
 * @returns {number} area of circle
 * @author Jakub Szrama 5D
 */

const calculateArea = (radius) => {
  if (radius <= 0) throw new Error("r musi być większe od 0");
  return Math.PI * radius * radius;
};
