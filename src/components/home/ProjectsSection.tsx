import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectOrphans from "@/assets/project-orphans.jpg";

const projects = [
  {
    id: "bakery",
    title: "فرن الخير",
    titleEn: "Bread of Goodness",
    description: "توفير الخبز الطازج يومياً للأسر المحتاجة في المناطق الأكثر احتياجاً",
    image: projectBakery,
    beneficiaries: "2,000+ أسرة",
  },
  {
    id: "kitchen",
    title: "تكية الطعام",
    titleEn: "Community Kitchen",
    description: "وجبات ساخنة يومية للعائلات والأفراد المحتاجين",
    image: projectKitchen,
    beneficiaries: "500+ وجبة يومياً",
  },
  {
    id: "orphans",
    title: "كفالة الأيتام",
    titleEn: "Orphan Sponsorship",
    description: "برنامج شامل لرعاية الأيتام يشمل التعليم والصحة والاحتياجات الأساسية",
    image: projectOrphans,
    beneficiaries: "300+ يتيم",
  },
  {
    id: "education",
    title: "المنح الدراسية",
    titleEn: "Scholarships",
    description: "دعم الطلاب المتفوقين من الأسر المحتاجة لإكمال تعليمهم",
    image: projectEducation,
    beneficiaries: "150+ طالب",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full">
            مشاريعنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            مشاريع تصنع <span className="text-heritage-gold">الفرق</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            نعمل على تنفيذ مشاريع إنسانية مستدامة تلبي احتياجات المجتمع وتحقق أثراً إيجابياً ملموساً
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
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-heritage-gold rounded-full text-xs font-semibold text-foreground">
                  {project.beneficiaries}
                </div>
              </div>
              <CardContent className="p-5 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-heritage-emerald transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.titleEn}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heritage-outline" size="lg" asChild>
            <Link to="/projects">
              عرض جميع المشاريع
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
