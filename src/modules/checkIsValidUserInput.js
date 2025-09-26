'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const isNumber = Number.isFinite(+userInput);
  const hasFourUniqueDigits = new Set(userInput).size === 4;
  const notStartWithZero = userInput.split('')[0] !== '0';

  if (isNumber && hasFourUniqueDigits && notStartWithZero) {
    return true;
  }

  return false;
}

module.exports = {
  checkIsValidUserInput,
};
