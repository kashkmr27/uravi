import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/work' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/#contact' },
  ];

  const isHashLink = (href: string) => href.includes('#');
  
  const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) => {
    if (isHashLink(href)) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">U</span>
          </div>
          <span className="font-display font-semibold text-lg text-foreground">Uravi Sharma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border/50 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-300"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
