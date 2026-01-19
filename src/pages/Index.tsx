import { Layout } from "@/components/layout";
import {
  HeroSection,
  ProjectsSection,
  DonationSection,
  ImpactSection,
  TestimonialsSection,
  NewsSection,
  GalleryPreview,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactSection />
      <ProjectsSection />
      <DonationSection />
      <TestimonialsSection />
      <GalleryPreview />
      <NewsSection />
    </Layout>
  );
};

export default Index;
