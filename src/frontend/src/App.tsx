import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ResourcesSection } from "@/components/ResourcesSection";
import { TipsSection } from "@/components/TipsSection";
import { TopicsSection } from "@/components/TopicsSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background antialiased">
        <Navbar />
        <main>
          <HeroSection />
          <TopicsSection />
          <BenefitsSection />
          <TipsSection />
          <ResourcesSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
