import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "إطلاق حملة رمضان الخير 2024",
    excerpt: "تستعد المؤسسة لإطلاق حملتها السنوية لشهر رمضان المبارك والتي تستهدف توزيع 10,000 سلة غذائية على الأسر المحتاجة في مختلف المناطق.",
    content: "تفاصيل الحملة...",
    date: "2024-02-15",
    category: "حملات",
  },
  {
    id: 2,
    title: "افتتاح فرن الخير الثاني",
    excerpt: "بفضل الله ثم بدعمكم الكريم، تم افتتاح الفرن الثاني ضمن مشروع فرن الخير لخدمة المزيد من الأسر المحتاجة وتوسيع نطاق الخدمة.",
    content: "تفاصيل الافتتاح...",
    date: "2024-01-20",
    category: "مشاريع",
  },
  {
    id: 3,
    title: "توقيع اتفاقية شراكة استراتيجية",
    excerpt: "وقعت المؤسسة اتفاقية شراكة استراتيجية مع إحدى الجهات الحكومية لتوسيع نطاق خدماتها والوصول إلى شريحة أكبر من المستفيدين.",
    content: "تفاصيل الاتفاقية...",
    date: "2024-01-10",
    category: "شراكات",
  },
  {
    id: 4,
    title: "تكريم المتطوعين المتميزين",
    excerpt: "أقامت المؤسسة حفل تكريم للمتطوعين المتميزين الذين ساهموا بجهودهم في إنجاح مشاريع المؤسسة خلال العام الماضي.",
    content: "تفاصيل التكريم...",
    date: "2023-12-25",
    category: "فعاليات",
  },
  {
    id: 5,
    title: "إصدار التقرير السنوي 2023",
    excerpt: "أصدرت المؤسسة تقريرها السنوي الذي يوثق جميع الأنشطة والمشاريع والإنجازات التي تحققت خلال عام 2023.",
    content: "تفاصيل التقرير...",
    date: "2023-12-15",
    category: "تقارير",
  },
];

export default function NewsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/20 text-heritage-gold text-sm font-semibold rounded-full mb-6">
            الأخبار
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            آخر <span className="text-heritage-gold">المستجدات</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            تابع أحدث أخبار ونشاطات المؤسسة
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map((item) => (
              <Card key={item.id} variant="elevated" className="overflow-hidden hover:shadow-heritage transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-heritage-gold/10 text-heritage-gold text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString("ar-SA")}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 hover:text-heritage-emerald transition-colors cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
