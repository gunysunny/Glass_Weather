import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateDarkState = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    // 초기값 설정
    updateDarkState();

    // dark 클래스 변경 감지
    const observer = new MutationObserver(updateDarkState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}