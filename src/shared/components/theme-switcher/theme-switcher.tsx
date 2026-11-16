import { useTheme } from "@/shared/hooks/use-theme";
import Moon from "@/shared/ui/themes-icons/moon";
import Sun from "@/shared/ui/themes-icons/sun";

export default function ThemeSwitcher() {
  const { changeTheme, theme } = useTheme();
  return (
    <button
      className="rounded-12 bg-secondary flex size-12.5 items-center justify-center"
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
