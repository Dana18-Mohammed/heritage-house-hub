import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import projectBakery from "@/assets/project-bakery.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectOrphans from "@/assets/project-orphans.jpg";

const galleryImages = [
  { src: projectBakery, alt: "فرن الخير", category: "مشاريع" },
  { src: projectKitchen, alt: "تكية الطعام", category: "نشاطات" },
  { src: projectEducation, alt: "التعليم", category: "تعليم" },
  { src: projectOrphans, alt: "كفالة الأيتام", category: "أيتام" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="inline-block px-4 py-1.5 bg-heritage-gold/10 text-heritage-gold text-sm font-semibold rounded-full">
              معرض الصور
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              لحظات من <span className="text-heritage-gold">العطاء</span>
            </h2>
          </div>
          <Button variant="heritage-outline" asChild>
            <Link to="/gallery">
              عرض المعرض كاملاً
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-heritage-gold text-foreground text-xs font-semibold rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-primary-foreground font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
