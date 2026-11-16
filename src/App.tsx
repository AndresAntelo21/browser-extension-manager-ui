import Topbar from "@/shared/components/topbar/topbar";
// import { useTheme } from "@/shared/hooks/use-theme";

export default function App() {
  // const { changeTheme, theme } = useTheme();
  return (
    <>
      <div className="min-h-screen">
        <header className="px-4 pt-5">
          <Topbar />
        </header>
        <main></main>
      </div>
    </>
  );
}
2;
