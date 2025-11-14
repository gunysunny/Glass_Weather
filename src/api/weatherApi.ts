import axios from "axios";
import { WEATHER_BASE_URL, WEATHER_API_KEY } from "@/constants/api";

if (!WEATHER_API_KEY) throw new Error("❌ Missing VITE_WEATHER_API_KEY");

// 날씨 정보 (5일 예보 포함)
export const getWeather = async (city: string) => {
  const url = `${WEATHER_BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=5&lang=ko`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data?.error?.message || "API 요청 실패 (Axios)";
      throw new Error(message);
    } else {
      throw new Error("❌ Unknown error occurred");
    }
  }
};

// 자동완성 도시 검색
export const getCitySuggestions = async (query: string) => {
  if (!query.trim()) return [];

  try {
    const res = await axios.get(`/api/search.json`, {
      params: { key: WEATHER_API_KEY, q: query },
    });
    return res.data;
  } catch {
    return [];
  }
};