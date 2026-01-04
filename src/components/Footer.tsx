import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/work' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/#contact' },
];

const isHashLink = (href: string) => href.includes('#');

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </div>
            <span className="font-display font-semibold text-lg text-foreground">Uravi Sharma</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map((item) => (
              isHashLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
