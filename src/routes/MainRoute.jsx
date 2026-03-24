import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const MainRoute = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground font-body">
          © 2026 Nguyen Van A. Tất cả quyền được bảo lưu.
        </p>
      </footer>
    </div>
  );
};

export default MainRoute;
