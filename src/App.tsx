import WeatherLayout from "@/components/layouts/WeatherLayout";
import SearchForm from "@/components/SearchForm";
import WeatherCard from "@/components/WeatherCard";
import ForecastList from "@/components/ForecastList";
import ForecastChart from "@/components/Forecastday";
import { useWeather } from "@/hooks/useWeather";
import ThemeToggle from "@/components/ThemeToggle";
import HourlyForecastChart from "@/components/HourlyForecastChart";
import WeatherSkeleton from "@/components/WeatherSkeleton";
import ErrorCard from "@/components/ErrorCard";




export default function App() {
  const {
  city,
  setCity,
  data,
  loading,
  error,
  suggestions,
  recentCities,
  handleSearch,
  handleSelectSuggestion,
  handleSelectRecent,
} = useWeather();
  const condition = data?.current?.condition?.text || "";

  return (
    <WeatherLayout title="🌤 Glass Weather UI" condition={condition} data={data}>
      {/* 다크모드 토글 버튼 */}
      <ThemeToggle />

      <SearchForm
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        suggestions={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
        recentCities={recentCities}
        onSelectRecent={handleSelectRecent}
      />

      {loading &&(
        <div className="mt-4">
          <WeatherSkeleton />
        </div>)
      }
      {error && !loading && (
        <ErrorCard
          message={error}
          onRetry={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)}
        />
      )}
      {data && data.current && !loading && (
        <>
          <WeatherCard data={data} />
          <ForecastList forecast={data.forecast.forecastday} />
          <ForecastChart forecast={data.forecast.forecastday} />
          <HourlyForecastChart data={data} /> {/* 추가 */}
        </>
      )}
    </WeatherLayout>
  );
}