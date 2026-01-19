import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const navigation = [
  { name: "الرئيسية", nameEn: "Home", href: "/" },
  { name: "من نحن", nameEn: "About Us", href: "/about" },
  { name: "مشاريعنا", nameEn: "Projects", href: "/projects" },
  { name: "الأخبار", nameEn: "News", href: "/news" },
  { name: "المعرض", nameEn: "Gallery", href: "/gallery" },
  { name: "الكتب والقصص", nameEn: "Books", href: "/books" },
  { name: "تواصل معنا", nameEn: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-heritage py-2"
          : "bg-transparent py-4"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">بت</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">بيت تراث العرب</h1>
              <p className="text-xs text-muted-foreground">Arab Heritage House</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="gold" size="lg" asChild>
              <Link to="/donate">
                <Heart className="w-4 h-4" />
                تبرع الآن
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="gold" size="lg" className="mt-2" asChild>
                <Link to="/donate">
                  <Heart className="w-4 h-4" />
                  تبرع الآن
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
