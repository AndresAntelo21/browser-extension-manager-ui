import { useTheme } from "@/shared/hooks/use-theme";

export default function App() {
  const { changeTheme, theme } = useTheme();
  return (
    <>
      <div className="">
        <h1 className="*: ani text-2xl text-black hover:bg-amber-800">
          Hola Mundo!!
        </h1>
        <button
          onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Modo Blanco" : "Modo Oscuro"}
        </button>
      </div>
    </>
  );
}
