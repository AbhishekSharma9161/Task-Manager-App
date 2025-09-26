import { Button } from "@/components/ui/button";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full py-4 bg-secondary text-secondary-foreground">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/60" />
          <span className="font-extrabold tracking-tight text-lg md:text-xl">
            <span className="bg-background px-1.5 rounded">Task Manager App</span>
          </span>
        </div>
        {mounted && (
          <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="gap-2 rounded-[10px]"
          >
            {theme === "dark" ? <SunMedium /> : <Moon />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
          </Button>
        )}
      </div>
    </header>
  );
}
