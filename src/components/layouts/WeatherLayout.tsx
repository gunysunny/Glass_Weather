import { ReactNode } from "react";
import { getBackgroundClass } from "@/utils/getBackgroundClass";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function WeatherLayout({
  title,
  condition,
  data,              
  children,
}: {
  title?: string;
  condition?: string;
  data?: any;        
  children: ReactNode;
}) {
  const isDark = useDarkMode();

  // 지역 시간 기반 낮/밤 계산
  const hour = data ? new Date(data.location?.localtime ?? Date.now()).getHours() : new Date().getHours();
  const isNight = hour < 6 || hour >= 18;

  // 밤 여부 반영해서 배경 클래스 결정
  const weatherBg = getBackgroundClass(condition, isNight);

  const bgStyle = {
    // 다크모드 토글은 오버레이로 공존 
    backgroundImage: isDark
      ? `linear-gradient(to bottom right, rgba(20,20,30,0.85), rgba(40,30,60,0.8)), var(--tw-gradient-stops)`
      : undefined,
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center text-white transition-all duration-700 bg-gradient-to-br overflow-visible ${weatherBg}`}
      style={bgStyle}
    >
      <div className="glass p-8 w-[650px] text-center rounded-3xl bg-glassLight dark:bg-glassDark shadow-lg transition-all duration-500">
        {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
        {children}
      </div>
    </main>
  );
}