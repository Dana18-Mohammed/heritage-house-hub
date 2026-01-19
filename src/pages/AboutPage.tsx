import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "الإنسانية",
    description: "نؤمن بأن كل إنسان يستحق حياة كريمة ونسعى لتحقيق ذلك",
  },
  {
    icon: Target,
    title: "الشفافية",
    description: "نلتزم بالوضوح التام في جميع أعمالنا وتقاريرنا المالية",
  },
  {
    icon: Eye,
    title: "الاستدامة",
    description: "نركز على المشاريع المستدامة التي تحقق أثراً طويل المدى",
  },
  {
    icon: Users,
    title: "التعاون",
    description: "نؤمن بقوة العمل الجماعي والشراكات المجتمعية",
  },
];

const boardMembers = [
  {
    name: "د. أحمد العتيبي",
    role: "رئيس مجلس الإدارة",
    bio: "خبرة تزيد عن 20 عاماً في العمل الخيري والتنموي",
  },
  {
    name: "أ. فاطمة الشمري",
    role: "نائب الرئيس",
    bio: "متخصصة في إدارة المشاريع الإنسانية والتطوعية",
  },
  {
    name: "م. خالد المالكي",
    role: "المدير التنفيذي",
    bio: "خبير في التخطيط الاستراتيجي وإدارة المؤسسات غير الربحية",
  },
  {
    name: "د. نورة القحطاني",
    role: "مستشار",
    bio: "أكاديمية ومتخصصة في الدراسات الاجتماعية",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/20 text-heritage-gold text-sm font-semibold rounded-full mb-6">
            تعرف علينا
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            من <span className="text-heritage-gold">نحن</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            مؤسسة بيت تراث العرب هي مؤسسة ثقافية وإنسانية تسعى لخدمة المجتمع وإحياء التراث العربي
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                رسالتنا و<span className="text-heritage-gold">رؤيتنا</span>
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-muted rounded-2xl">
                  <h3 className="font-bold text-lg text-foreground mb-2">رسالتنا</h3>
                  <p className="text-muted-foreground">
                    تقديم خدمات إنسانية متميزة للمحتاجين والأيتام، والمساهمة في الحفاظ على التراث العربي الأصيل من خلال مشاريع مستدامة تحقق الأثر الإيجابي في المجتمع.
                  </p>
                </div>
                <div className="p-6 bg-heritage-gold/10 rounded-2xl">
                  <h3 className="font-bold text-lg text-foreground mb-2">رؤيتنا</h3>
                  <p className="text-muted-foreground">
                    أن نكون المؤسسة الرائدة في العمل الإنساني والثقافي، ونموذجاً يحتذى به في الشفافية والفاعلية والاستدامة.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} variant="heritage" className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 text-heritage-gold flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-muted/30" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full mb-4">
              فريقنا
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              مجلس <span className="text-heritage-gold">الإدارة</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} variant="elevated" className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <CardContent className="p-0 space-y-2">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-heritage-gold font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
