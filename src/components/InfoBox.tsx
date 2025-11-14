import type { InfoBoxProps } from "@/types/weatherTypes";

export default function InfoBox({ label, value, unit }: InfoBoxProps) {
  return (
    <div className="info-box w-22">
      <p className="text-sm font-semibold">
        {value}
        {unit && <span className="opacity-80 text-xs ml-0.5">{unit}</span>}
      </p>
      <p className="text-xs opacity-80">{label}</p>
    </div>
  );
}