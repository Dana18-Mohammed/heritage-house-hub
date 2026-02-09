import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const quickLinks = [
  { name: "الرئيسية", nameEn: "Home", href: "/" },
  { name: "من نحن", nameEn: "About Us", href: "/about" },
  { name: "مشاريعنا", nameEn: "Projects", href: "/projects" },
  { name: "تبرع الآن", nameEn: "Donate Now", href: "/donate" },
];

const projectLinks = [
  { name: "فرن الخير", nameEn: "Bread of Goodness", href: "/projects#bakery" },
  { name: "تكية الطعام", nameEn: "Community Kitchen", href: "/projects#kitchen" },
  { name: "كفالة الأيتام", nameEn: "Orphan Sponsorship", href: "/projects#orphans" },
  { name: "المنح الدراسية", nameEn: "Scholarships", href: "/projects#education" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  const { t, language, isRTL } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground" dir={isRTL ? "rtl" : "ltr"}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt={t("بيت الثقافة العربية", "Arab Cultural House")}
                className="h-14 w-auto object-contain bg-white/90 rounded-lg p-1"
              />
              <div>
                <h3 className="text-lg font-bold">{t("بيت الثقافة العربية", "Arab Cultural House")}</h3>
                <p className="text-xs text-primary-foreground/70">Maison de la culture arabe</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t(
                "مؤسسة ثقافية وإنسانية تسعى لخدمة المجتمع من خلال مشاريع خيرية متنوعة تلبي احتياجات الأسر المحتاجة والأيتام.",
                "A cultural and humanitarian organization striving to serve the community through various charitable projects that meet the needs of families in need and orphans."
              )}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-heritage-gold hover:text-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">{t("روابط سريعة", "Quick Links")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameEn}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                  >
                    {language === "ar" ? link.name : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">{t("مشاريعنا", "Our Projects")}</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.nameEn}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                  >
                    {language === "ar" ? link.name : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">{t("تواصل معنا", "Contact Us")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-heritage-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {t("المملكة العربية السعودية", "Saudi Arabia")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <a
                  href="tel:+966500000000"
                  className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                  dir="ltr"
                >
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-heritage-gold flex-shrink-0" />
                <a
                  href="mailto:info@arabheritage.org"
                  className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                >
                  info@arabheritage.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} {t("بيت الثقافة العربية. جميع الحقوق محفوظة.", "Arab Cultural House. All rights reserved.")}
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>{t("صُنع بـ", "Made with")}</span>
              <Heart className="w-4 h-4 text-heritage-gold fill-current" />
              <span>{t("لخدمة المجتمع", "to serve the community")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
