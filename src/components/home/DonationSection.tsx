import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DonationSection() {
  const [copiedIban, setCopiedIban] = useState(false);
  const { t, isRTL } = useLanguage();
  
  const ibanNumber = "SA00 0000 0000 0000 0000 0000";
  
  const copyIban = () => {
    navigator.clipboard.writeText(ibanNumber.replace(/\s/g, ""));
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heart Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-heritage-gold/20 animate-float">
            <Heart className="w-10 h-10 text-heritage-gold" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("ساهم معنا في", "Join Us in")}{" "}
            <span className="text-heritage-gold">{t("صنع الفرق", "Making a Difference")}</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t(
              "تبرعك يساهم في إطعام الجائعين وكفالة الأيتام ودعم التعليم. كل ريال يصنع فرقاً في حياة المحتاجين.",
              "Your donation helps feed the hungry, sponsor orphans, and support education. Every riyal makes a difference in the lives of those in need."
            )}
          </p>

          {/* Donation Methods */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* IBAN */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <h3 className="font-bold text-lg mb-3">{t("التحويل البنكي", "Bank Transfer")}</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">{t("رقم الآيبان", "IBAN Number")}</p>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg p-3">
                <code className="flex-1 text-sm font-mono" dir="ltr">
                  {ibanNumber}
                </code>
                <button
                  onClick={copyIban}
                  className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  aria-label={t("نسخ رقم الآيبان", "Copy IBAN")}
                >
                  {copiedIban ? (
                    <Check className="w-4 h-4 text-heritage-gold" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Pay */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <h3 className="font-bold text-lg mb-3">{t("الدفع السريع", "Quick Pay")}</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">{t("عبر تطبيق كليك", "Via Click App")}</p>
              <Button variant="gold" size="lg" className="w-full" asChild>
                <Link to="/donate">
                  {t("تبرع الآن", "Donate Now")}
                  <Heart className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-primary-foreground/60 max-w-xl mx-auto">
            {t(
              "نلتزم بالشفافية الكاملة في استخدام التبرعات. يمكنك متابعة أثر تبرعك من خلال تقاريرنا الدورية.",
              "We are committed to full transparency in using donations. You can track the impact of your donation through our periodic reports."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
