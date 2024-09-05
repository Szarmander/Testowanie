/**
 * check if user is adult
 * @param {number} age age of user
 * @throws {Error} if age of user is lower than 0
 * @returns {boolean} true if user is adult, false if not
 * @author Jakub Szrama 5D
 */

const isAdult = (age) => {
  if (age <= 0) throw new Error("age must be > 0");
  else if (age >= 18) return true;
  return false;
};
