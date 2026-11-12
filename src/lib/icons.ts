import {
  Briefcase,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  LifeBuoy,
  Link,
  MessageSquare,
  Palette,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Explicit map of the icons referenced by name in src/lib data files.
 * Never use `import * as LucideIcons` — it bundles the entire icon library (~660 KB).
 * When you add a new `icon` / `iconName` value to the data, add it here too.
 */
const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  LifeBuoy,
  Link,
  MessageSquare,
  Palette,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  Zap,
};

export function getIcon(name: string, fallback: LucideIcon = Globe): LucideIcon {
  return iconMap[name] ?? fallback;
}
