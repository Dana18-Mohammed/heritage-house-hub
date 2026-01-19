import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import projectBakery from "@/assets/project-bakery.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectOrphans from "@/assets/project-orphans.jpg";

const projects = [
  {
    id: "bakery",
    title: "فرن الخير",
    titleEn: "Bread of Goodness",
    description: "مشروع فرن الخير يهدف إلى توفير الخبز الطازج يومياً للأسر المحتاجة. نقوم بإنتاج وتوزيع آلاف الأرغفة يومياً للعائلات في المناطق الأكثر احتياجاً.",
    image: projectBakery,
    stats: [
      { label: "أسرة مستفيدة", value: "2,000+" },
      { label: "رغيف يومياً", value: "5,000" },
      { label: "منطقة", value: "10" },
    ],
  },
  {
    id: "kitchen",
    title: "تكية الطعام",
    titleEn: "Community Kitchen",
    description: "تكية الطعام توفر وجبات ساخنة ومغذية يومياً للعائلات والأفراد المحتاجين. نحرص على تقديم وجبات متوازنة تلبي الاحتياجات الغذائية.",
    image: projectKitchen,
    stats: [
      { label: "وجبة يومياً", value: "500+" },
      { label: "متطوع", value: "30" },
      { label: "سنوات خدمة", value: "3" },
    ],
  },
  {
    id: "orphans",
    title: "كفالة الأيتام",
    titleEn: "Orphan Sponsorship",
    description: "برنامج شامل لرعاية الأيتام يشمل الدعم المادي والتعليمي والصحي والنفسي. نسعى لتوفير بيئة آمنة ومستقرة للأيتام.",
    image: projectOrphans,
    stats: [
      { label: "يتيم مكفول", value: "300+" },
      { label: "كفيل", value: "200" },
      { label: "برنامج", value: "5" },
    ],
  },
  {
    id: "education",
    title: "المنح الدراسية",
    titleEn: "Scholarships",
    description: "نقدم منحاً دراسية للطلاب المتفوقين من الأسر المحتاجة لمساعدتهم على إكمال تعليمهم الجامعي وتحقيق أحلامهم.",
    image: projectEducation,
    stats: [
      { label: "طالب", value: "150+" },
      { label: "جامعة", value: "8" },
      { label: "تخصص", value: "20+" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/20 text-heritage-gold text-sm font-semibold rounded-full mb-6">
            مشاريعنا
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            مشاريع تصنع <span className="text-heritage-gold">الفرق</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            نعمل على تنفيذ مشاريع إنسانية مستدامة تلبي احتياجات المجتمع
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                id={project.id}
                variant="heritage"
                className="overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm text-heritage-gold">{project.titleEn}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="text-center p-4 bg-muted rounded-xl">
                            <div className="text-2xl font-bold text-heritage-gold">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
