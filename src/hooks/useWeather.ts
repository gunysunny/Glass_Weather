import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "@/api/weatherApi";
import { cityMap } from "@/utils/cityMap";

export function useWeather() {
  const [city, setCity] = useState("");

  // 변환된 검색어 (한글 → 영문)
  const query = cityMap[city.trim()] || city.trim();

  // React Query 사용
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["weather", query],
    queryFn: () => getWeather(query),
    enabled: false, // 기본 비활성화 (검색 버튼 눌러야 실행)
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
    retry: 1, // 실패 시 1번 재시도
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    refetch(); // 검색 시 API 재요청
  };

  return {
    city,
    setCity,
    data,
    loading: isLoading,
    error: error ? "❌ 도시를 찾을 수 없습니다." : "",
    handleSearch,
  };
}