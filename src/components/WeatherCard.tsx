import Lottie from "lottie-react";
import sunny from "@/assets/lottie/sunny.json";
import rain from "@/assets/lottie/Rainy.json";
import cloud from "@/assets/lottie/Weather-storm.json";
import snow from "@/assets/lottie/Weather-snow.json";
import InfoBox from "./InfoBox";
import type { WeatherCardProps } from "@/types";  

export default function WeatherCard({ data }: WeatherCardProps) {
  const text = data.current.condition.text.toLowerCase();

  const animation =
    text.includes("rain") || text.includes("비") ? rain :
    text.includes("cloud") || text.includes("구름") || text.includes("천둥") ? cloud :
    text.includes("snow") || text.includes("눈") ? snow :
    sunny;

  return (
    <div className="mt-6 animate-fadeIn flex flex-col items-center">
      <Lottie animationData={animation} loop autoplay style={{ width: 120, height: 120 }} />

      <h2 className="text-xl font-semibold mt-2">{data.location.name}</h2>
      <p className="text-lg capitalize">{data.current.condition.text}</p>
      <p className="text-4xl font-bold mt-2">{data.current.temp_c}°C</p>

      <div className="flex gap-3 mt-4 justify-center">
        {[
          { label: "체감", value: data.current.feelslike_c, unit: "°" },
          { label: "습도", value: data.current.humidity, unit: "%" },
          { label: "풍속", value: data.current.wind_kph, unit: "km/h" },
        ].map((item) => (
          <InfoBox key={item.label} label={item.label} value={item.value} unit={item.unit} />
        ))}
      </div>
    </div>
  );
}