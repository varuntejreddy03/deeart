import { Clock, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

const items = [
  { icon: MapPin, label: "Visit Us", value: site.address },
  { icon: Mail, label: "Email Us", value: site.email },
  { icon: Clock, label: "Open Daily", value: "10 AM to 7 PM, Monday to Sunday" }
];

export function ContactStrip() {
  return (
    <section className="border-y border-primary/15 bg-[#0F0E0C] py-8">
      <div className="contact-strip-grid container-lux grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="contact-strip-item glass-card flex gap-4 rounded-lg p-5" data-reveal>
              <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[.16em] text-primary">{item.label}</p>
                <p className="mt-1 text-base leading-6 text-[#F5F0E8]">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
