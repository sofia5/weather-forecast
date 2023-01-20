import { useState, useEffect } from "react";
import { Weather } from "../types/interfaces";
import useFetch from "./useFetch";

const useWeather = () => {
  const apiKey = "455e474c7a45ebc57b1f8e284eb7ef43";
  const lat = "57.7072";
  const lon = "11.9668";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const { data, loading, error } = useFetch<Weather>(url, "GET");
  const [weather, setWeather] = useState<Weather>();
  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data]);

  return { weather, loading, error };
};

export default useWeather;
