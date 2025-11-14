import type { SearchFormProps } from "@/types";

export default function SearchForm({ city, setCity, onSearch }: SearchFormProps) {
  return (
    <form onSubmit={onSearch} className="flex gap-2 justify-center mb-4">
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
    </form>
  );
}