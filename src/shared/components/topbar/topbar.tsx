import ThemeSwitcher from "@/shared/components/theme-switcher/theme-switcher";
import Logo from "@/shared/ui/logo/logo";

export default function Topbar() {
  return (
    <nav className="rounded-10 bg-primary border-border-card flex items-center justify-between border px-3 py-2 shadow-[0px_2px_3px_0px_#D9E5F4] dark:border-transparent dark:shadow-none">
      <Logo />
      <ThemeSwitcher />
    </nav>
  );
}
