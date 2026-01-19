import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { language, toggleLanguage, t, isRTL } = useLanguage();

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
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">بت</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">
                {t("بيت تراث العرب", "Arab Heritage House")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("Arab Heritage House", "بيت تراث العرب")}
              </p>
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
                {language === "ar" ? item.name : item.nameEn}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label={t("تغيير اللغة", "Change language")}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              {language === "ar" ? "EN" : "ع"}
            </span>
            
            <Button variant="gold" size="lg" asChild>
              <Link to="/donate">
                <Heart className="w-4 h-4" />
                {t("تبرع الآن", "Donate Now")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label={t("تغيير اللغة", "Change language")}
            >
              <Globe className="w-5 h-5" />
            </Button>
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
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
                  {language === "ar" ? item.name : item.nameEn}
                </Link>
              ))}
              <Button variant="gold" size="lg" className="mt-2" asChild>
                <Link to="/donate">
                  <Heart className="w-4 h-4" />
                  {t("تبرع الآن", "Donate Now")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
