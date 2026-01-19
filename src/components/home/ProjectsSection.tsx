import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectOrphans from "@/assets/project-orphans.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "bakery",
    titleAr: "فرن الخير",
    titleEn: "Bread of Goodness",
    descAr: "توفير الخبز الطازج يومياً للأسر المحتاجة في المناطق الأكثر احتياجاً",
    descEn: "Providing fresh bread daily to families in need in the most vulnerable areas",
    image: projectBakery,
    beneficiariesAr: "2,000+ أسرة",
    beneficiariesEn: "2,000+ Families",
  },
  {
    id: "kitchen",
    titleAr: "تكية الطعام",
    titleEn: "Community Kitchen",
    descAr: "وجبات ساخنة يومية للعائلات والأفراد المحتاجين",
    descEn: "Daily hot meals for families and individuals in need",
    image: projectKitchen,
    beneficiariesAr: "500+ وجبة يومياً",
    beneficiariesEn: "500+ Daily Meals",
  },
  {
    id: "orphans",
    titleAr: "كفالة الأيتام",
    titleEn: "Orphan Sponsorship",
    descAr: "برنامج شامل لرعاية الأيتام يشمل التعليم والصحة والاحتياجات الأساسية",
    descEn: "Comprehensive orphan care program including education, health, and basic needs",
    image: projectOrphans,
    beneficiariesAr: "300+ يتيم",
    beneficiariesEn: "300+ Orphans",
  },
  {
    id: "education",
    titleAr: "المنح الدراسية",
    titleEn: "Scholarships",
    descAr: "دعم الطلاب المتفوقين من الأسر المحتاجة لإكمال تعليمهم",
    descEn: "Supporting outstanding students from needy families to complete their education",
    image: projectEducation,
    beneficiariesAr: "150+ طالب",
    beneficiariesEn: "150+ Students",
  },
];

export function ProjectsSection() {
  const { t, isRTL, language } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-muted/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full">
            {t("مشاريعنا", "Our Projects")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t("مشاريع تصنع", "Projects That Make")}{" "}
            <span className="text-heritage-gold">{t("الفرق", "a Difference")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "نعمل على تنفيذ مشاريع إنسانية مستدامة تلبي احتياجات المجتمع وتحقق أثراً إيجابياً ملموساً",
              "We implement sustainable humanitarian projects that meet community needs and create tangible positive impact"
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              variant="heritage"
              className="group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={language === "ar" ? project.titleAr : project.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-heritage-gold rounded-full text-xs font-semibold text-foreground">
                  {language === "ar" ? project.beneficiariesAr : project.beneficiariesEn}
                </div>
              </div>
              <CardContent className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-heritage-emerald transition-colors">
                    {language === "ar" ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === "ar" ? project.titleEn : project.titleAr}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "ar" ? project.descAr : project.descEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heritage-outline" size="lg" asChild>
            <Link to="/projects">
              {t("عرض جميع المشاريع", "View All Projects")}
              <Arrow className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
