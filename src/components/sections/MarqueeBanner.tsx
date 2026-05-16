import { serviceNames } from "@/data/services";

export function MarqueeBanner() {
  const items = [...serviceNames, ...serviceNames];
  return (
    <div className="marquee-banner overflow-hidden bg-primary py-4 text-[#0F0E0C]" aria-hidden="true">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item font-serif text-2xl italic">
            {item} <span className="mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
