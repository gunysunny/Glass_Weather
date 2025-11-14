export default function WeatherSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 text-white/80">
      {/* 도시명 */}
      <div className="h-6 w-32 rounded-xl bg-white/20" />

      {/* 날씨 아이콘 */}
      <div className="h-20 w-20 rounded-full bg-white/10" />

      {/* 온도 */}
      <div className="h-8 w-24 rounded-xl bg-white/25" />

      {/* 세부 정보 */}
      <div className="flex gap-4 mt-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="h-4 w-10 rounded bg-white/15" />
            <div className="h-3 w-8 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}