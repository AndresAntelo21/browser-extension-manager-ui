import ExtensionsList from "@/features/extensions/components/extensions-list";
import Topbar from "@/shared/components/topbar/topbar";
// import { useTheme } from "@/shared/hooks/use-theme";

export default function App() {
  // const { changeTheme, theme } = useTheme();
  return (
    <>
      <div className="flex min-h-screen flex-col gap-10 px-4 pt-5">
        <header className="">
          <Topbar />
        </header>
        <main>
          <ExtensionsList />
        </main>
      </div>
    </>
  );
}
2;
