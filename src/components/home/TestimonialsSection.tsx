import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    contentAr: "بفضل الله ثم بفضل مؤسسة بيت تراث العرب، استطاعت عائلتي الحصول على الطعام يومياً. نشكركم من أعماق قلوبنا.",
    contentEn: "Thanks to God and then to Arab Heritage House, my family was able to get food daily. We thank you from the bottom of our hearts.",
    nameAr: "أم محمد",
    nameEn: "Um Mohammed",
    roleAr: "مستفيدة من تكية الطعام",
    roleEn: "Community Kitchen Beneficiary",
    locationAr: "الرياض",
    locationEn: "Riyadh",
  },
  {
    id: 2,
    contentAr: "المنحة الدراسية التي حصلت عليها غيرت مسار حياتي. الآن أنا طالب جامعي وأحلم بأن أساهم في خدمة مجتمعي.",
    contentEn: "The scholarship I received changed the course of my life. Now I am a university student and dream of contributing to serving my community.",
    nameAr: "أحمد الخالد",
    nameEn: "Ahmed Al-Khaled",
    roleAr: "طالب منحة دراسية",
    roleEn: "Scholarship Student",
    locationAr: "جدة",
    locationEn: "Jeddah",
  },
  {
    id: 3,
    contentAr: "برنامج كفالة الأيتام يقدم دعماً شاملاً لأطفالنا. ليس فقط الدعم المادي، بل الاهتمام والرعاية الحقيقية.",
    contentEn: "The orphan sponsorship program provides comprehensive support for our children. Not just financial support, but genuine care and attention.",
    nameAr: "فاطمة العلي",
    nameEn: "Fatima Al-Ali",
    roleAr: "أم أيتام",
    roleEn: "Orphan's Mother",
    locationAr: "الدمام",
    locationEn: "Dammam",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, isRTL, language } = useLanguage();

  return (
    <section className="py-24 bg-muted/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full">
            {t("قصص نجاح", "Success Stories")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t("أصوات", "Voices of")}{" "}
            <span className="text-heritage-gold">{t("المستفيدين", "Beneficiaries")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "شهادات حقيقية من أشخاص استفادوا من مشاريعنا",
              "Real testimonials from people who benefited from our projects"
            )}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              variant="heritage"
              className={`p-6 cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "ring-2 ring-heritage-gold shadow-heritage-elevated"
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="w-10 h-10 text-heritage-gold/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{language === "ar" ? testimonial.contentAr : testimonial.contentEn}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">
                  {language === "ar" ? testimonial.nameAr : testimonial.nameEn}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? testimonial.roleAr : testimonial.roleEn}
                </p>
                <p className="text-xs text-heritage-gold mt-1">
                  {language === "ar" ? testimonial.locationAr : testimonial.locationEn}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
