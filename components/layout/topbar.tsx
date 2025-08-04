import ThemeToggle from "@/components/theme-toggle";

export function Topbar() {
  return (
    <header className="flex justify-end items-center px-4 h-16 border-b">
      <ThemeToggle />
    </header>
  );
}
