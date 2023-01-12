const detectPalindrome = (string) => {
  if (typeof string !== "string") return "debebe ser un String";
  if (string.includes(" ")) return "no debe ser un espacio";
  if (!string.length) return "no debe estar vacio";
  const stringRex = string.toLocaleLowerCase().split("");
  const reverseString = [...stringRex].reverse().join("");
  return reverseString === stringRex.join("");
}
