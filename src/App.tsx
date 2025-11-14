import WeatherLayout from "@/components/layouts/WeatherLayout";
import SearchForm from "@/components/SearchForm";
import WeatherCard from "@/components/WeatherCard";
import ForecastList from "@/components/ForecastList";
import { useWeather } from "@/hooks/useWeather";

export default function App() {
  const { city, setCity, data, loading, error, handleSearch } = useWeather();
  const condition = data?.current?.condition?.text || "";

  return (
    <WeatherLayout title="🌤 Glass Weather UI" condition={condition}>
      <SearchForm city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <p className="animate-pulse mt-4">🌧 데이터를 불러오는 중...</p>}
      {error && <p className="mt-4 text-red-200">{error}</p>}
      {data && data.current && !loading && (
        <>
          <WeatherCard data={data} />
          <ForecastList forecast={data.forecast.forecastday} />
        </>
      )}
    </WeatherLayout>
  );
}