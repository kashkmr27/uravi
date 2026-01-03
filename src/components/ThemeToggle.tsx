import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
        <Sun size={18} className="text-muted-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-primary/30"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-accent" />
      ) : (
        <Moon size={18} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;
