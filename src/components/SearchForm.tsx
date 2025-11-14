import type { SearchFormProps } from "@/types";

export default function SearchForm({
  city,
  setCity,
  onSearch,
  suggestions,
  onSelectSuggestion,
  recentCities,
  onSelectRecent,
}: SearchFormProps) {
  return (
    <form onSubmit={onSearch} className="relative flex flex-col items-center mb-4">
      <div className="flex gap-2 justify-center w-full">
        <input
          type="text"
          placeholder="도시를 입력하세요 (서울, 부산 등)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none w-2/3"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-white/30 hover:bg-white/40 transition font-semibold cursor-pointer"
        >
          검색
        </button>
      </div>

      {/* 자동완성 리스트 */}
      {suggestions && suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 w-2/3 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 text-white shadow-lg overflow-hidden z-10">
          {suggestions.map((s) => (
            <li
              key={s.id}
              onClick={() => onSelectSuggestion(s.name)}
              className="px-4 py-2 hover:bg-white/30 cursor-pointer transition-all"
            >
              {s.name} <span className="text-sm opacity-80">({s.country})</span>
            </li>
          ))}
        </ul>
      )}

      {/* 최근 검색 리스트 */}
      {recentCities.length > 0 && (
        <div className="mt-4 text-sm text-white/90 relative z-20">
          <p className="opacity-70 mb-1">🕓 최근 검색</p>
          <div className="flex flex-wrap justify-center gap-2">
            {recentCities.map((name) => (
              <button
                key={name}
                onClick={() => onSelectRecent(name)}
                className="px-3 py-1 rounded-full bg-white/30 hover:bg-white/40 text-white shadow-md shadow-black/30 backdrop-blur-sm transition-all cursor-pointer"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}