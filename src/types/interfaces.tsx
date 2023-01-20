export interface FetchData<T> {
  data: T;
  loading: boolean;
  error: any;
}

export interface Weather {
  city: Location;
  list: WeatherEntry[];
}

export interface WeatherEntry {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface Location {
  name: string;
  country: string;
  timezone: string;
}
