import {
  Bed,
  Building2,
  CheckCircle2,
  ChefHat,
  Grid2X2,
  Lightbulb,
  Monitor,
  Sofa,
  Wifi
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/services";

const icons = {
  kitchen: ChefHat,
  storage: Grid2X2,
  living: Sofa,
  bedroom: Bed,
  lighting: Lightbulb,
  tv: Monitor,
  office: Building2,
  turnkey: CheckCircle2,
  automation: Wifi
};

type ServiceIconProps = {
  icon: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
