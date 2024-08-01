import request from "request";
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_ACCESS_KEY}&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback(`Error: ${body.error.info}`, undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        `It is ${data.weather_descriptions[0]} with a temperature of ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`
      );
    }
  });
};

export default forecast;
