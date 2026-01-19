import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="مشروع فرن الخير"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center" dir="rtl">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-heritage-gold/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-up">
            <span className="w-2 h-2 bg-heritage-gold rounded-full animate-pulse" />
            <span className="text-heritage-gold text-sm font-medium">مؤسسة ثقافية وإنسانية</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-200">
            معاً نبني{" "}
            <span className="text-heritage-gold">مستقبلاً</span>
            <br />
            أفضل للجميع
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
            نسعى في بيت تراث العرب لتقديم يد العون للمحتاجين والأيتام من خلال مشاريع إنسانية مستدامة تحقق الأثر الإيجابي في المجتمع
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/donate">
                <Heart className="w-5 h-5" />
                تبرع الآن
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/projects">
                <Play className="w-5 h-5" />
                استكشف مشاريعنا
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 animate-fade-up animation-delay-600">
            {[
              { value: "10,000+", label: "مستفيد" },
              { value: "15+", label: "مشروع" },
              { value: "50+", label: "متطوع" },
              { value: "5", label: "سنوات خدمة" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-heritage-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
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
