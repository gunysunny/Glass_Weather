import axios from "axios";

export const getWeather = async (city: string) => {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  if (!key) throw new Error("❌ Missing VITE_WEATHER_API_KEY");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&lang=ko`;

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