import { useEffect, useState } from "react";
import useWeather from "../hooks/useWeather";
import { WeatherEntry } from "../types/interfaces";
import LoadingSpinner from "./LoadingSpinner";
import TemperatureGraph from "./TemperatureGraph";
import TemperaturePanel from "./TemperaturePanel";

const WeatherForecast = () => {
  const { weather, loading, error } = useWeather();
  const [weatherEntries, setWeatherEntries] = useState<WeatherEntry[]>([]);
  const [city, setCity] = useState<string>();
  const [minTemp, setMinTemp] = useState<number>();
  const [maxTemp, setMaxTemp] = useState<number>();
  const [medianTemp, setMedianTemp] = useState<number>();
  const [meanTemp, setMeanTemp] = useState<number>();

  useEffect(() => {
    setCity(weather?.city.name);
    setWeatherEntries(weather?.list ?? []);

    if (weatherEntries.length > 0) {
      const setMedian = () => {
        const temps = weatherEntries.map((we) => we.main.temp).sort();
        let medianTemp;
        if (temps.length % 2 === 0) {
          const temp1 = temps.at(weatherEntries.length / 2 - 1);
          const temp2 = temps.at(weatherEntries.length / 2);

          if (!temp1 || !temp2) {
            throw new Error("temperatures should exist");
          }

          medianTemp = (temp1 + temp2) / 2;
        } else {
          medianTemp = temps.at((weatherEntries.length + 1) / 2 - 1);
        }

        if (!medianTemp) {
          throw new Error("median number should be defined");
        }

        setMedianTemp(+medianTemp.toFixed(2));
      };

      const setMean = () => {
        let temp = 0;
        weatherEntries.forEach((we) => {
          temp += we.main.temp;
        });

        setMeanTemp(+(temp / weatherEntries.length).toFixed(2));
      };

      setMaxTemp(
        +Math.max(...weatherEntries.map((we) => we.main.temp_max)).toFixed(2)
      );
      setMinTemp(
        +Math.min(...weatherEntries.map((we) => we.main.temp_min)).toFixed(2)
      );
      setMedian();
      setMean();
    }
  }, [weather, weatherEntries]);

  return (
    <>
      <h1 className="m-5 text-success">{city}</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {loading && <LoadingSpinner fullPage={true} />}
            {error && <div>{error}</div>}
            {!loading && minTemp && maxTemp && medianTemp && meanTemp && (
              <>
                <TemperaturePanel
                  min={minTemp}
                  max={maxTemp}
                  median={medianTemp}
                  mean={meanTemp}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {!loading && minTemp && maxTemp && (
        <TemperatureGraph
          min={minTemp}
          max={maxTemp}
          weatherEntries={weatherEntries}
        />
      )}
    </>
  );
};

export default WeatherForecast;
