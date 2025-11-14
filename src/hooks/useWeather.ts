import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather, getCitySuggestions } from "@/api/weatherApi";
import { cityMap } from "@/utils/cityMap";

export function useWeather() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [recentCities, setRecentCities] = useState<string[]>([]);

  const query = cityMap[city.trim()] || city.trim();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["weather", query],
    queryFn: () => getWeather(query),
    enabled: false,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  // 최근 검색 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("recentCities");
    if (saved) setRecentCities(JSON.parse(saved));
  }, []);

  // 최근 검색 저장
  const saveRecentCity = (name: string) => {
    setRecentCities((prev) => {
      const updated = [name, ...prev.filter((c) => c !== name)].slice(0, 5);
      localStorage.setItem("recentCities", JSON.stringify(updated));
      return updated;
    });
  };

  // 자동완성 (debounce)
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (city.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await getCitySuggestions(city);
        setSuggestions(res);
      } catch {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [city]);

  // 검색 실행
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    refetch();
    setSuggestions([]);
    saveRecentCity(city);
  };

  // 자동완성 선택
  const handleSelectSuggestion = (name: string) => {
    setCity(name);
    setSuggestions([]);
    refetch();
    saveRecentCity(name);
  };

  // 최근 검색 선택
  const handleSelectRecent = (name: string) => {
    setCity(name);
    refetch();
  };

  return {
    city,
    setCity,
    data,
    loading: isLoading,
    error: error ? "❌ 도시를 찾을 수 없습니다." : "",
    suggestions,
    recentCities,
    handleSearch,
    handleSelectSuggestion,
    handleSelectRecent,
  };
}