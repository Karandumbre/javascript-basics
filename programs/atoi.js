function atoi(str) {
  str = str.trim(); // Remove leading and trailing spaces
  let i = 0;
  let sign = 1;
  let result = 0;
  const maxInt = 2147483647;
  const minInt = -2147483648;

  // Determine sign
  if (i < str.length && (str[i] === "+" || str[i] === "-")) {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  // Read digits and build the integer
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    let digit = parseInt(str[i]); // Convert char to int using parseInt

    // Check for overflow
    if (result > (maxInt - digit) / 10) {
      return sign === 1 ? maxInt : minInt;
    }

    result = 10 * result + digit;
    i++;
  }

  return result * sign;
}
