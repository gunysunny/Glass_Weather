// 현재 날씨 정보 타입
export interface CurrentWeather {
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  wind_kph: number;
  condition: {
    text: string;
    icon: string;
  };
}

// 위치 정보 타입
export interface LocationInfo {
  name: string;
  country: string;
  localtime: string;
}

// 일별 예보 타입
export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

// 전체 응답 타입
export interface WeatherData {
  location: LocationInfo;
  current: CurrentWeather;
  forecast: {
    forecastday: ForecastDay[];
  };
}

// InfoBox 타입
export interface InfoBoxProps {
  label: string;
  value: string | number;
  unit?: string;
}


export interface ForecastListProps {
  forecast: ForecastDay[];
}

export interface SearchFormProps {
  city: string;
  setCity: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export interface WeatherCardProps {
  data: WeatherData;
}