export function getBackgroundClass(conditionText?: string): string {
  if (!conditionText) return "from-sky-300 via-indigo-400 to-purple-500";

  const text = conditionText.toLowerCase();

  if (text.includes("rain") || text.includes("비")) return "from-blue-800 via-sky-700 to-gray-700"; // 비
  if (text.includes("cloud") || text.includes("구름")) return "from-gray-500 via-slate-600 to-sky-700"; // 구름
  if (text.includes("snow") || text.includes("눈")) return "from-indigo-500 via-sky-400 to-blue-200";
  if (text.includes("sun") || text.includes("clear") || text.includes("맑음")) return "from-yellow-300 via-orange-400 to-pink-500"; // 맑음
  if (text.includes("storm") || text.includes("thunder") || text.includes("천둥")) return "from-gray-800 via-purple-800 to-black"; // 폭풍

  return "from-sky-300 via-indigo-400 to-purple-500";
}