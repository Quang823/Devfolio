import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExploreSection from "../components/ExploreSection";

const MainRoute = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <ContactSection />
      <footer className="py-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground font-body">
          © 2026 Do Minh Quang. Tất cả quyền được bảo lưu.
        </p>
      </footer>
    </div>
  );
};

export default MainRoute;
