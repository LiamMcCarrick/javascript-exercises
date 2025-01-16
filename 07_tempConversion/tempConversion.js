const convertToCelsius = function(fTemp) {
  const celsiusTemp = +((fTemp - 32) * (5/9)).toFixed(1);
  return celsiusTemp;
};

const convertToFahrenheit = function(cTemp) {
  const farenTemp = +(cTemp * (9/5) + 32).toFixed(1);
  return farenTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
