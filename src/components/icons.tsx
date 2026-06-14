import {
  BookOpen,
  BriefcaseBusiness,
  Coins,
  Compass,
  HeartPulse,
  Home,
  KeyRound,
  MapPinned,
  Search,
  Shield,
  ShoppingBasket,
  TrainFront,
  type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  portal: Compass,
  key: KeyRound,
  rail: TrainFront,
  coin: Coins,
  shield: Shield,
  bread: ShoppingBasket,
  scroll: BookOpen,
  torch: MapPinned,
  house: Home,
  work: BriefcaseBusiness,
  health: HeartPulse,
  search: Search
};

export function PixelIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? BookOpen;
  return <Icon className={className} aria-hidden="true" strokeWidth={2.2} />;
}
