import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [copiedIban, setCopiedIban] = useState(false);
  const ibanNumber = "SA00 0000 0000 0000 0000 0000";

  const copyIban = () => {
    navigator.clipboard.writeText(ibanNumber.replace(/\s/g, ""));
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-heritage-gold/20 mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-10 h-10 text-heritage-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            ساهم في <span className="text-heritage-gold">الخير</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            تبرعك يصنع فرقاً حقيقياً في حياة المحتاجين والأيتام
          </p>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-background" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* IBAN Card */}
            <Card variant="heritage" className="p-8">
              <CardContent className="p-0 space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">التحويل البنكي</h2>
                  <p className="text-muted-foreground">يمكنك التبرع عبر التحويل المصرفي</p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">رقم الآيبان (IBAN)</p>
                  <div className="flex items-center gap-3 bg-background rounded-lg p-4">
                    <code className="flex-1 text-lg font-mono text-foreground" dir="ltr">
                      {ibanNumber}
                    </code>
                    <Button variant="outline" size="icon" onClick={copyIban}>
                      {copiedIban ? (
                        <Check className="w-4 h-4 text-heritage-gold" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    اسم الحساب: مؤسسة بيت تراث العرب
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Pay Card */}
            <Card variant="heritage" className="p-8">
              <CardContent className="p-0 space-y-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">الدفع السريع</h2>
                <p className="text-muted-foreground">يمكنك التبرع عبر تطبيق كليك</p>
                <Button variant="gold" size="xl" className="w-full max-w-sm mx-auto">
                  <Heart className="w-5 h-5" />
                  تبرع عبر كليك
                </Button>
              </CardContent>
            </Card>

            {/* Note */}
            <div className="text-center p-6 bg-heritage-gold/10 rounded-2xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">ملاحظة:</strong> بعد إتمام التبرع، يرجى إرسال إشعار التحويل عبر{" "}
                <a href="/contact" className="text-heritage-gold hover:underline">
                  نموذج التواصل
                </a>{" "}
                ليتم تسجيل تبرعكم وإرسال شهادة التقدير.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
