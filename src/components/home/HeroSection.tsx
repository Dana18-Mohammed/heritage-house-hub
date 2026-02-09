import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: "10,000+", labelAr: "مستفيد", labelEn: "Beneficiaries" },
    { value: "15+", labelAr: "مشروع", labelEn: "Projects" },
    { value: "50+", labelAr: "متطوع", labelEn: "Volunteers" },
    { value: "5", labelAr: "سنوات خدمة", labelEn: "Years" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t("مشروع فرن الخير", "Bread of Goodness Project")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-heritage-gold/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-up">
            <span className="w-2 h-2 bg-heritage-gold rounded-full animate-pulse" />
            <span className="text-heritage-gold text-sm font-medium">
              {t("مؤسسة ثقافية وإنسانية", "Cultural & Humanitarian Foundation")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-200">
            {t("معاً نبني", "Together We Build")}{" "}
            <span className="text-heritage-gold">{t("مستقبلاً", "a Better")}</span>
            <br />
            {t("أفضل للجميع", "Future for All")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
            {t(
              "نسعى في بيت الثقافة العربية لتقديم يد العون للمحتاجين والأيتام من خلال مشاريع إنسانية مستدامة تحقق الأثر الإيجابي في المجتمع",
              "At Arab Cultural House, we strive to extend a helping hand to those in need and orphans through sustainable humanitarian projects that create a positive impact in the community"
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/donate">
                <Heart className="w-5 h-5" />
                {t("تبرع الآن", "Donate Now")}
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/projects">
                <Play className="w-5 h-5" />
                {t("استكشف مشاريعنا", "Explore Our Projects")}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 animate-fade-up animation-delay-600">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-heritage-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">
                  {t(stat.labelAr, stat.labelEn)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-heritage-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
