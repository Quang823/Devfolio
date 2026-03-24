import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    label: "Project Management",
    desc: "Create, edit, and manage your projects with a simple and intuitive interface.",
  },
  {
    icon: Palette,
    label: "Portfolio Builder",
    desc: "Build a clean and modern portfolio to showcase your work professionally.",
  },
  {
    icon: Rocket,
    label: "Share & Deploy",
    desc: "Share your portfolio with a public link and use it directly in your CV.",
  },
  {
    icon: Zap,
    label: "Modern Experience",
    desc: "Smooth animations and responsive design for the best user experience.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            About DevFolio
          </p>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight">
            A platform to <span className="text-gradient">build, manage</span>{" "}
            and <span className="text-gradient">showcase</span> your work
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            DevFolio is a modern portfolio platform designed for developers and
            designers. It allows users to create and manage projects, build a
            personal portfolio, and share it بسهولة through a public link —
            making it perfect for showcasing skills in CVs and job applications.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="glass rounded-xl p-6 group hover:glow-box transition-all duration-500"
              >
                <div className="mb-4 relative">
                  <div className="absolute inset-0 blur-lg bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition" />
                  <item.icon className="relative w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.label}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
