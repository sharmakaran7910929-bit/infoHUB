import { ADS_ENABLED } from "../lib/config";

export default function AdSlot() {
  if (!ADS_ENABLED) {
    return null;
  }

  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-[970px] min-h-[100px] sm:min-h-[180px] lg:min-h-[250px] border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center">
        <span className="text-sm text-slate-400">
          Advertisement
        </span>
      </div>
    </div>
  );
}