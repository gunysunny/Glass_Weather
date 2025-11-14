import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

export default function HourlyForecastChart({ data }: { data: any }) {
  const hours = data?.forecast?.forecastday?.[0]?.hour || [];

  // 3시간 간격만 추출 (0, 3, 6, 9, 12, 15, 18, 21)
  const filtered = hours.filter((_: any, i: number) => i % 3 === 0);

  const chartData = filtered.map((h: any) => ({
    time: h.time.slice(11, 16), // "HH:mm"
    temp: Math.round(h.temp_c),
    feels: Math.round(h.feelslike_c),
  }));

  return (
    <div className="w-full mt-6">
      <h3 className="text-lg font-semibold mb-2 text-white/90">⏰ 시간대별 예보</h3>
      <div className="glass rounded-2xl p-4">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="time"
              tick={{ fill: "#fff", fontSize: 12 }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "8px",
                color: "#fff",
                backdropFilter: "blur(6px)",
              }}
              labelStyle={{ color: "#FFE29F", fontWeight: 600 }}
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#FF9462"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#FFD080", stroke: "#fff", strokeWidth: 1 }}
              activeDot={{ r: 6, fill: "#FFD080", strokeWidth: 2, stroke: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="feels"
              stroke="#7BDFF2"
              strokeWidth={2}
              dot={{ r: 3, fill: "#C9F6FF", stroke: "#fff", strokeWidth: 1 }}
              activeDot={{ r: 6, fill: "#C9F6FF", strokeWidth: 2, stroke: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}