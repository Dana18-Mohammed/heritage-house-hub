import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Calendar } from "lucide-react";

const books = [
  {
    id: 1,
    title: "قصص من الأمل",
    titleEn: "Stories of Hope",
    description: "مجموعة قصص ملهمة من حياة النازحين تحكي معاناتهم وأملهم في غد أفضل",
    year: "2023",
    pages: 150,
  },
  {
    id: 2,
    title: "رحلة الصمود",
    titleEn: "Journey of Resilience",
    description: "توثيق لرحلة عائلات نازحة وكيف استطاعوا إعادة بناء حياتهم من جديد",
    year: "2022",
    pages: 200,
  },
];

const stories = [
  {
    id: 1,
    title: "حكاية أم أحمد",
    excerpt: "أم أحمد، امرأة فقدت زوجها ونزحت مع أطفالها الخمسة، لكنها لم تفقد الأمل...",
  },
  {
    id: 2,
    title: "حلم محمد الصغير",
    excerpt: "محمد طفل في الثامنة من عمره، حلمه أن يصبح طبيباً ليعالج أطفال بلده...",
  },
  {
    id: 3,
    title: "معلمة في المخيم",
    excerpt: "سارة معلمة لم تتوقف عن التدريس رغم النزوح، أنشأت فصلاً في خيمتها...",
  },
];

export default function BooksPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/20 text-heritage-gold text-sm font-semibold rounded-full mb-6">
            المكتبة
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            الكتب <span className="text-heritage-gold">والقصص</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            إصداراتنا التي توثق قصص النازحين وتجاربهم الإنسانية
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <BookOpen className="inline-block w-8 h-8 text-heritage-gold ml-2" />
            الكتب المنشورة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <Card key={book.id} variant="heritage" className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-44 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-12 h-12 text-heritage-gold" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{book.title}</h3>
                        <p className="text-sm text-heritage-gold">{book.titleEn}</p>
                      </div>
                      <p className="text-muted-foreground text-sm">{book.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {book.year}
                        </span>
                        <span>{book.pages} صفحة</span>
                      </div>
                      <Button variant="heritage-outline" size="sm">
                        <Download className="w-4 h-4" />
                        تحميل الكتاب
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            قصص <span className="text-heritage-gold">النازحين</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} variant="elevated" className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{story.excerpt}</p>
                  <Button variant="link" className="p-0 text-heritage-gold">
                    اقرأ القصة كاملة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
