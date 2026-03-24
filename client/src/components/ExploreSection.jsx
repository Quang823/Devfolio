import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Users,
  TrendingUp,
  Star,
  ExternalLink,
  Code2,
  Briefcase,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";

// Mock data - sau này sẽ fetch từ API
const featuredDevelopers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Full-stack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    projects: 12,
    skills: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    projects: 8,
    skills: ["Figma", "Adobe XD", "Tailwind"],
    featured: true,
  },
  {
    id: 3,
    name: "Lê Minh C",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
    projects: 15,
    skills: ["Vue.js", "TypeScript", "SCSS"],
    featured: false,
  },
  {
    id: 4,
    name: "Phạm Đức D",
    role: "Backend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Duke",
    projects: 20,
    skills: ["Python", "Django", "PostgreSQL"],
    featured: true,
  },
  {
    id: 5,
    name: "Hoàng Thị E",
    role: "Mobile Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    projects: 6,
    skills: ["React Native", "Flutter", "Firebase"],
    featured: false,
  },
  {
    id: 6,
    name: "Vũ Quang F",
    role: "DevOps Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
    projects: 10,
    skills: ["Docker", "AWS", "Kubernetes"],
    featured: false,
  },
];

const categories = [
  { id: "all", label: "Tất cả", icon: Users },
  { id: "featured", label: "Nổi bật", icon: Star },
  { id: "trending", label: "Xu hướng", icon: TrendingUp },
  { id: "new", label: "Mới nhất", icon: Sparkles },
];

// Developer Card Component
const DeveloperCard = ({ developer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="group relative glass rounded-2xl p-6 hover:glow-box transition-all duration-500 cursor-pointer"
  >
    {/* Featured badge */}
    {developer.featured && (
      <div className="absolute -top-2 -right-2 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
        <Star className="w-3 h-3" />
        Featured
      </div>
    )}

    {/* Avatar & Info */}
    <div className="flex items-start gap-4 mb-4">
      <motion.div className="relative" whileHover={{ scale: 1.05 }}>
        <img
          src={developer.avatar}
          alt={developer.name}
          className="w-16 h-16 rounded-xl bg-secondary"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
      </motion.div>

      <div className="flex-1">
        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
          {developer.name}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          <Briefcase className="w-3 h-3" />
          {developer.role}
        </p>
        <p className="text-xs text-primary mt-1 flex items-center gap-1">
          <Code2 className="w-3 h-3" />
          {developer.projects} dự án
        </p>
      </div>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 mb-4">
      {developer.skills.map((skill) => (
        <span
          key={skill}
          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* View button */}
    <motion.div
      className="flex items-center justify-between pt-4 border-t border-border/50"
      initial={{ opacity: 0.7 }}
      whileHover={{ opacity: 1 }}
    >
      <span className="text-sm text-muted-foreground">Xem portfolio</span>
      <motion.div
        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
        whileHover={{ x: 3 }}
      >
        <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
      </motion.div>
    </motion.div>
  </motion.div>
);

const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevelopers = featuredDevelopers.filter((dev) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "featured" && dev.featured) ||
      activeCategory === "trending" ||
      activeCategory === "new";

    const matchesSearch =
      dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="explore" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-heading text-sm tracking-wide">
              Cộng đồng sáng tạo
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Khám phá <span className="text-gradient">Developers</span> tài năng
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Tìm kiếm và kết nối với hàng ngàn{" "}
            <span className="text-foreground font-semibold">developers</span>,{" "}
            <span className="text-foreground font-semibold">designers</span>{" "}
            trong cộng đồng. Khám phá những portfolio{" "}
            <span className="text-primary font-semibold">ấn tượng</span> nhất.
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tìm theo tên, vai trò hoặc kỹ năng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Lọc
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Developers grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDevelopers.map((dev, index) => (
              <DeveloperCard key={dev.id} developer={dev} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredDevelopers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Không tìm thấy developer nào phù hợp
            </p>
          </motion.div>
        )}

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-heading font-semibold rounded-xl hover:bg-secondary/50 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Xem tất cả Developers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass rounded-2xl p-8 md:p-12 glow-box"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,234", label: "Developers", icon: Users },
              { value: "5,678", label: "Projects", icon: Code2 },
              { value: "890", label: "Featured", icon: Star },
              { value: "99%", label: "Hài lòng", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreSection;
