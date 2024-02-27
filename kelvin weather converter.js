//Today's forecast
const kelvin = 293;

//Convert kelvin to celsius
let celsius = kelvin - 273;

//Convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Round fahrenheit with built-in math object
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");
