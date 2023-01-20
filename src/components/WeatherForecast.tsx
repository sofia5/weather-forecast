import { useEffect, useState } from "react";
import useWeather from "../hooks/useWeather";
import { WeatherEntry } from "../types/interfaces";
import LoadingSpinner from "./LoadingSpinner";
import TempDashboard from "./TempDashboard";

const WeatherForecast = () => {
  const { weather, loading, error } = useWeather();
  const [weatherEntries, setWeatherEntries] = useState<WeatherEntry[]>();
  const [minTemp, setMinTemp] = useState<number>();
  const [maxTemp, setMaxTemp] = useState<number>();
  const [medianTemp, setMedianTemp] = useState<number>();
  const [meanTemp, setMeanTemp] = useState<number>();

  useEffect(() => {
    setWeatherEntries(weather?.list);

    if (weatherEntries) {
      const setMedian = () => {
        const temps = weatherEntries.map((we) => we.main.temp).sort();
        const medianTemp = temps.at(Math.floor(weatherEntries.length / 2));

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
    <div className="row">
      <div className="col-12">
        {loading && <LoadingSpinner fullPage={true} />}
        {error && <div>{error}</div>}
        {!loading && minTemp && maxTemp && medianTemp && meanTemp && (
          <TempDashboard
            min={minTemp}
            max={maxTemp}
            median={medianTemp}
            mean={meanTemp}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
