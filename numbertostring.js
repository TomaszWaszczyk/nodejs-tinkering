function numberToString(n) {
  if (n === 0) return "0"; // Special case for zero
  
  let isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = -n; // Convert to positive for processing
  }

  let result = "";
  
  while (n > 0) {
    const digit = n % 10;       // Extract last digit (0-9)
    const char = String.fromCharCode(48 + digit); // Convert to character
    result = char + result;     // Prepend character to result
    n = Math.floor(n / 10);     // Remove last digit
  }
  
  return isNegative ? "-" + result : result;
}
// Example usage:
console.log(numberToString(12345));  // "12345"
console.log(numberToString(-6789));  // "-6789"
console.log(numberToString(0));      // "0"
console.log(numberToString(42));     // "42"
console.log(numberToString(1000000)); // "1000000"
console.log(numberToString(-1));     // "-1"