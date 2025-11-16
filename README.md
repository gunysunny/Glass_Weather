# Glass Weather UI

## 🌟 한 줄 소개  
| 날짜 | 프로젝트명 | 핵심 |
|------|------------|------|
| 2025-11 | Glass Weather UI | React + TS + Tailwind로 구현한 유리형(Glassmorphism) 날씨 앱 |

## 📌 주요 기능  
- 검색 자동완성 + 최근 검색 저장 (localStorage)  
- 현재 날씨 + 5일 예보 + 시간별 예보 그래프  
- 날씨 상태에 따라 배경 변화 (맑음/비/눈/구름)  
- 다크모드 지원 + 낮/밤 테마 자동 전환  
- Glassmorphism 디자인 + Lottie 애니메이션 적용  
- React Query로 비동기/캐싱 처리 및 에러/로딩 상태 UI 반영  

## 🛠 기술 스택  
- React 18 (Vite)  
- TypeScript  
- Tailwind CSS + custom utilities  
- Axios, React Query  
- Lottie (애니메이션)  
- WeatherAPI (날씨 데이터)  
- Vercel (배포)  

## 🎬 스크린샷  
<img width="498" height="902" alt="스크린샷 2025-11-16 222320" src="https://github.com/user-attachments/assets/5f5fbb12-5d57-46f9-b2a2-70688a4aaeeb" />
<img width="1192" height="888" alt="스크린샷 2025-11-16 222300" src="https://github.com/user-attachments/assets/01f5a030-9e3f-4100-a5aa-6f715b52ce31" />


🚀 배포 URL
https://glass-weather.vercel.app

🔍 설치 및 실행 방법
```
git clone https://github.com/your-username/Glass_Weather.git  
cd Glass_Weather  
npm install  
npm run dev
```

.env 파일 설정
```
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

🧩 구조 설명
```
/src  
  /api — 날씨 API 처리  
  /components — UI 컴포넌트  
  /hooks — 커스텀 훅 (useWeather 등)  
  /utils — 유틸 함수 (weather 배경 매핑 등)  
  /types — TypeScript 공용 타입 선언
```


✅ 주요 개선 포인트

폴더 구조 명확히 분리 (기능/뷰/유틸)
React Query로 데이터 상태 관리
Glassmorphism 스타일 구현 + 애니메이션
낮/밤 테마 자동 전환으로 부담 없는 UX
자동완성, 최근 검색 추가로 사용자 경험 강화


🧠 다음 개선 예정

위치 기반 자동 검색(Geolocation)
PWA 적용(오프라인 지원)
시간대별 애니메이션 세분화 (비/눈/천둥 등)

📝 라이선스
MIT License
