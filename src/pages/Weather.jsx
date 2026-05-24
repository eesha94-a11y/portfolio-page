import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {data && (
        <div>
          <h2>{city}</h2>
          <p>Temp: {data.current_condition[0].temp_C} °C</p>
          <p>Weather: {data.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;