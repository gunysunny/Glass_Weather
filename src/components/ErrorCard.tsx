export default function ErrorCard({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="glass mt-6 p-6 rounded-2xl text-center text-white/90 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-3">⚠️ 오류 발생</h2>
      <p className="mb-4 opacity-90">{message}</p>

      <button
        onClick={onRetry}
        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all"
      >
        다시 시도하기 🔄
      </button>
    </div>
  );
}