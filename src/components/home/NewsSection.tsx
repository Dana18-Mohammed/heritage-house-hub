import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

const news = [
  {
    id: 1,
    title: "إطلاق حملة رمضان الخير 2024",
    excerpt: "تستعد المؤسسة لإطلاق حملتها السنوية لشهر رمضان المبارك والتي تستهدف توزيع 10,000 سلة غذائية.",
    date: "2024-02-15",
    category: "حملات",
  },
  {
    id: 2,
    title: "افتتاح فرن الخير الثاني",
    excerpt: "بفضل الله تم افتتاح الفرن الثاني ضمن مشروع فرن الخير لخدمة المزيد من الأسر المحتاجة.",
    date: "2024-01-20",
    category: "مشاريع",
  },
  {
    id: 3,
    title: "توقيع اتفاقية شراكة جديدة",
    excerpt: "وقعت المؤسسة اتفاقية شراكة استراتيجية مع إحدى الجهات الحكومية لتوسيع نطاق خدماتها.",
    date: "2024-01-10",
    category: "شراكات",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              آخر الأخبار
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              مستجدات <span className="text-heritage-gold">المؤسسة</span>
            </h2>
          </div>
          <Button variant="heritage-outline" asChild>
            <Link to="/news">
              جميع الأخبار
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card
              key={item.id}
              variant="elevated"
              className="group overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-heritage-gold/10 text-heritage-gold text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString("ar-SA")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-heritage-emerald transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-heritage-gold text-sm font-semibold hover:gap-3 transition-all"
                >
                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
