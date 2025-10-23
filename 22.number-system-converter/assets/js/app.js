const form = document.querySelector('form');
const showResult = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const userNumber = formData.get("user-number").trim();
  const fromNumber = formData.get('from');
  const toNumber = formData.get("to");

  if (!userNumber) {
    showResult.innerText = "⚠️ Please enter a number.";
    return;
  }

  if (fromNumber === toNumber) {
    showResult.innerText = `✅ Same base selected: ${userNumber}`;
    return;
  }

  try {
    const decimal = toDecimal(userNumber, fromNumber);
    const converted = fromDecimal(decimal, toNumber);
    showResult.innerText = `${fromNumber.toUpperCase()} → ${toNumber.toUpperCase()} : ${converted}`;
  } catch (error) {
    showResult.innerText = `❌ Error: ${error.message}`;
  }
});

function toDecimal(value, baseType) {
  switch (baseType) {
    case "binary":
      return parseInt(value, 2);
    case "octal":
      return parseInt(value, 8);
    case "decimal":
      return parseInt(value, 10);
    case "hexadecimal":
      return parseInt(value, 16);
    default:
      throw new Error("Invalid base for conversion to decimal");
  }
}

function fromDecimal(value, baseType) {
  switch (baseType) {
    case "binary":
      return value.toString(2);
    case "octal":
      return value.toString(8);
    case "decimal":
      return value.toString(10);
    case "hexadecimal":
      return value.toString(16).toUpperCase();
    default:
      throw new Error("Invalid base for conversion from decimal");
  }
}
