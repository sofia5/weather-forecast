import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { WeatherEntry } from "../types/interfaces";

const TemperatureGraph = ({
  min,
  max,
  weatherEntries,
}: {
  min: number;
  max: number;
  weatherEntries: WeatherEntry[];
}) => {
  const [data, setData] = useState<any[]>();
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    const tempData: (string | Date | number)[][] = [["Date", "Temperature"]];

    weatherEntries.forEach((we) => {
      const date = new Date(we.dt * 1000);
      tempData.push([date, we.main.temp]);
    });

    setData(tempData);

    setOptions({
      hAxis: {
        title: "Date",
        titleTextStyle: {
          color: "white",
        },
        gridlines: {
          color: "none",
          units: {
            days: { format: "d MMM" },
          },
        },
        minorGridlines: {
          units: {
            hours: { format: "" },
          },
        },
      },
      vAxis: {
        format: {
          suffix: "°C",
        },
        title: "Temperature",
        titleTextStyle: {
          color: "white",
        },
        minValue: min,
        maxValue: max,
        gridlines: { color: "none" },
      },
      backgroundColor: "transparent",
      border: "transparent",
      legend: {
        textStyle: {
          color: "white",
        },
      },
    });
  }, [min, max, weatherEntries]);

  return (
    <Chart
      className="mt-5"
      chartType="LineChart"
      width="100%"
      height="800px"
      data={data}
      options={options}
    />
  );
};

export default TemperatureGraph;
