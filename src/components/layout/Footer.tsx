import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "تبرع الآن", href: "/donate" },
];

const projectLinks = [
  { name: "فرن الخير", href: "/projects#bakery" },
  { name: "تكية الطعام", href: "/projects#kitchen" },
  { name: "كفالة الأيتام", href: "/projects#orphans" },
  { name: "المنح الدراسية", href: "/projects#education" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-heritage-gold flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">بت</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">بيت تراث العرب</h3>
                <p className="text-xs text-primary-foreground/70">Arab Heritage House</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              مؤسسة ثقافية وإنسانية تسعى لخدمة المجتمع من خلال مشاريع خيرية متنوعة تلبي احتياجات الأسر المحتاجة والأيتام.
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
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">مشاريعنا</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-heritage-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-heritage-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  المملكة العربية السعودية
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
              © {new Date().getFullYear()} بيت تراث العرب. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-heritage-gold fill-current" />
              <span>لخدمة المجتمع</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
