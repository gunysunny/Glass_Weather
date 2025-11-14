import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { ForecastDay } from "@/types"; 

export default function ForecastChart({
  forecast,
}: {
  forecast: ForecastDay[];
}) {
  // 5일치 평균 데이터를 준비
  const chartData = forecast.map((day) => ({
    date: new Date(day.date).toLocaleDateString("ko-KR", { weekday: "short" }),
    max: Math.round(day.day.maxtemp_c),
    min: Math.round(day.day.mintemp_c),
  }));

  return (
    <div className="mt-8 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-3 text-center">📈 5일 예보</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="#fff" tick={{ fill: "#fff", fontSize: 12 }} />
          <YAxis stroke="#fff" tick={{ fill: "#fff", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              color: "#fff",
              backdropFilter: "blur(6px)",
            }}
            labelStyle={{ color: "#FFD166", fontWeight: 600 }}
          />
          

          {/* 🔺 최고기온 (max) - 좀 더 진하고 선명하게 */}
          <Line
            type="monotone"
            dataKey="max"
            name="최고기온"
            stroke="#FF7A3D"        // 🔥 코랄+붉은 오렌지 — 눈에 확 띔
            strokeWidth={3}
            dot={{ r: 3, fill: "#FFD080", stroke: "#fff", strokeWidth: 1 }}
            activeDot={{ r: 6, fill: "#FFD080", strokeWidth: 2, stroke: "#fff" }}
          />

          {/* 🔹 최저기온 (min) - 부드럽지만 대비 유지 */}
          <Line
            type="monotone"
            dataKey="min"
            name="최저기온"
            stroke="#7BDFF2"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#C9F6FF", stroke: "#fff", strokeWidth: 1 }}
            activeDot={{ r: 6, fill: "#C9F6FF", strokeWidth: 2, stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}