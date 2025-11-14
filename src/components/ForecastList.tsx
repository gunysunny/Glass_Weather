import type { ForecastListProps } from "@/types";

export default function ForecastList({ forecast }: ForecastListProps) {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
      {forecast.map((day) => (
        <div
          key={day.date}
          className="glass p-3 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-all"
        >
          <p className="text-sm text-white/90 font-semibold">
            {new Date(day.date).toLocaleDateString("ko-KR", { weekday: "short" })}
          </p>
          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="w-10 h-10 my-1"
          />
          <p className="text-xs text-white/80">{day.day.condition.text}</p>
          <p className="text-sm font-bold text-white">
            {Math.round(day.day.maxtemp_c)}° / {Math.round(day.day.mintemp_c)}°
          </p>
        </div>
      ))}
    </div>
  );
}