import { Users, Heart, Utensils, GraduationCap, Home, Gift } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "مستفيد",
    description: "من مختلف المناطق",
  },
  {
    icon: Utensils,
    value: "500,000+",
    label: "وجبة",
    description: "تم توزيعها",
  },
  {
    icon: Heart,
    value: "300+",
    label: "يتيم مكفول",
    description: "في رعايتنا",
  },
  {
    icon: GraduationCap,
    value: "150+",
    label: "منحة دراسية",
    description: "تم تقديمها",
  },
  {
    icon: Home,
    value: "2,000+",
    label: "أسرة",
    description: "نخدمها شهرياً",
  },
  {
    icon: Gift,
    value: "15+",
    label: "مشروع",
    description: "قيد التنفيذ",
  },
];

export function ImpactSection() {
  return (
    <section className="py-24 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
            أثرنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            أرقام تحكي <span className="text-heritage-gold">قصص نجاح</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            بفضل الله ثم بدعمكم، استطعنا تحقيق هذه الإنجازات
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-heritage-gold/30 hover:shadow-heritage transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-heritage-gold/10 text-heritage-gold mb-4 group-hover:bg-heritage-gold group-hover:text-foreground transition-all duration-300">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
