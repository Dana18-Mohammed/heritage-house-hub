import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "بفضل الله ثم بفضل مؤسسة بيت تراث العرب، استطاعت عائلتي الحصول على الطعام يومياً. نشكركم من أعماق قلوبنا.",
    name: "أم محمد",
    role: "مستفيدة من تكية الطعام",
    location: "الرياض",
  },
  {
    id: 2,
    content: "المنحة الدراسية التي حصلت عليها غيرت مسار حياتي. الآن أنا طالب جامعي وأحلم بأن أساهم في خدمة مجتمعي.",
    name: "أحمد الخالد",
    role: "طالب منحة دراسية",
    location: "جدة",
  },
  {
    id: 3,
    content: "برنامج كفالة الأيتام يقدم دعماً شاملاً لأطفالنا. ليس فقط الدعم المادي، بل الاهتمام والرعاية الحقيقية.",
    name: "فاطمة العلي",
    role: "أم أيتام",
    location: "الدمام",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full">
            قصص نجاح
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            أصوات <span className="text-heritage-gold">المستفيدين</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            شهادات حقيقية من أشخاص استفادوا من مشاريعنا
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
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-heritage-gold mt-1">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
