import { serviceNames } from "@/data/services";

export function MarqueeBanner() {
  return (
    <div className="bg-primary py-5 text-[#0F0E0C]">
      <div className="container-lux flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
        {serviceNames.map((item) => (
          <span key={item} className="font-serif text-2xl font-bold">
            {item} <span className="mx-2 text-[#0F0E0C]/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
