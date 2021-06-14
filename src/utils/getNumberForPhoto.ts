export const getPokemonId = (noZeroNumber: string) => {
  let value;
  if (noZeroNumber.length === 1) {
    const newValue = "00" + noZeroNumber;
    value = newValue;
  } else if (noZeroNumber.length === 2) {
    const newValue = "0" + noZeroNumber;
    value = newValue;
  } else if (noZeroNumber.length === 3) {
    value = noZeroNumber;
  } else {
    null;
  }
  return value;
};
