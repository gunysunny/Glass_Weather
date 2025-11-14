import { ReactNode } from "react";
import { getBackgroundClass } from "@/utils/getBackgroundClass";

interface Props {
  title?: string;
  condition?: string;
  children: ReactNode;
}

export default function WeatherLayout({ title, condition, children }: Props) {
  const bgClass = getBackgroundClass(condition);

  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgClass} text-white transition-all duration-700`}
    >
      <div className="glass p-8 w-[600px] text-center">
        {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
        {children}
      </div>
    </main>
  );
}