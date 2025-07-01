const buildRegisterNumber = (theLetters, theDigits) => {
  const lettersRegex = /^[A-VX-Z]{2,3}$/;
  if (!lettersRegex.test(theLetters)) {
    throw new Error('Invalid register number letters');
  }
  const digitsRegex = /^[1-9][0-9]{0,2}$/;
  if (!digitsRegex.test(theDigits)) {
    throw new Error('Invalid register number digits');
  }
  return `${theLetters}-${theDigits}`;
};

try {
  console.log(buildRegisterNumber('AX', '12'));
  console.log(buildRegisterNumber('UUI', '6'));
  console.log(buildRegisterNumber('GFS', '200'));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(buildRegisterNumber('X', '100'));
  console.log(buildRegisterNumber('YUT', '020'));
  console.log(buildRegisterNumber('WWW', '100'));
} catch (error) {
  console.error(error.message);
}
