export function getBackgroundClass(conditionText?: string, isNight?: boolean): string {
  // 밤이면 무조건 밤 그라데이션
  if (isNight) return "from-gray-900 via-indigo-950 to-black";

  const text = (conditionText || "").toLowerCase();

  if (text.includes("rain") || text.includes("비")) {
    return "from-blue-800 via-sky-700 to-gray-700";
  }
  if (text.includes("cloud") || text.includes("구름") || text.includes("흐림") || text.includes("흐린") || text.includes("overcast")) {
    return "from-gray-500 via-slate-600 to-sky-700";
  }
  if (text.includes("snow") || text.includes("눈")) {
    return "from-cyan-300 via-blue-300 to-white";
  }
  if (text.includes("sun") || text.includes("clear") || text.includes("맑") || text.includes("화창")) {
    return "from-yellow-300 via-orange-400 to-pink-500";
  }

  // 기본
  return "from-sky-300 via-indigo-400 to-purple-500";
}