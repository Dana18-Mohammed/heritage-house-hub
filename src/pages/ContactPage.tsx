import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-heritage-gold/20 text-heritage-gold text-sm font-semibold rounded-full mb-6">
            تواصل معنا
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            نسعد <span className="text-heritage-gold">بتواصلكم</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            لأي استفسار أو اقتراح، لا تترددوا في التواصل معنا
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card variant="heritage" className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-6">أرسل رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الكامل
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="أدخل اسمك"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="h-12"
                      dir="ltr"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الرسالة
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full">
                    <Send className="w-4 h-4" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">معلومات التواصل</h2>
              <p className="text-muted-foreground">
                يمكنكم التواصل معنا عبر القنوات التالية
              </p>
              <div className="space-y-4">
                <Card variant="elevated" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 text-heritage-gold flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">العنوان</h3>
                      <p className="text-muted-foreground text-sm">
                        المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 text-heritage-gold flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">الهاتف</h3>
                      <a
                        href="tel:+966500000000"
                        className="text-muted-foreground text-sm hover:text-heritage-gold"
                        dir="ltr"
                      >
                        +966 50 000 0000
                      </a>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 text-heritage-gold flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">البريد الإلكتروني</h3>
                      <a
                        href="mailto:info@arabheritage.org"
                        className="text-muted-foreground text-sm hover:text-heritage-gold"
                      >
                        info@arabheritage.org
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
