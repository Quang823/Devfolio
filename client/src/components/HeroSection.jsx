import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Layers,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import { useState, useEffect, use } from "react";
// Floating icons data
const floatingIcons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0, duration: 4 },
  { Icon: Palette, x: "85%", y: "15%", delay: 0.5, duration: 5 },
  { Icon: Rocket, x: "75%", y: "70%", delay: 1, duration: 4.5 },
  { Icon: Sparkles, x: "15%", y: "75%", delay: 1.5, duration: 5.5 },
  { Icon: Layers, x: "90%", y: "45%", delay: 2, duration: 4 },
  { Icon: Globe, x: "5%", y: "50%", delay: 0.8, duration: 5 },
  { Icon: Zap, x: "70%", y: "25%", delay: 1.2, duration: 4.2 },
  { Icon: Star, x: "25%", y: "85%", delay: 0.3, duration: 5.2 },
];

// Floating icon component
const FloatingIcon = ({ Icon, x, y, delay, duration }) => (
  <motion.div
    className="absolute text-primary/20 pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      delay,
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12" />
  </motion.div>
);

// Glowing orbs
const GlowingOrb = ({ size, x, y, color, delay }) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
    }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>
      {/* Glowing orbs background */}
      <GlowingOrb
        size="400px"
        x="10%"
        y="20%"
        color="hsl(36 95% 55% / 0.15)"
        delay={0}
      />
      <GlowingOrb
        size="300px"
        x="70%"
        y="60%"
        color="hsl(36 95% 55% / 0.1)"
        delay={1}
      />
      <GlowingOrb
        size="250px"
        x="50%"
        y="10%"
        color="hsl(280 95% 55% / 0.08)"
        delay={2}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-heading text-sm tracking-wide">
              Modern Portfolio Platform
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="block text-foreground"
            >
              Build & Share
            </motion.span>

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="block"
            >
              <span className="text-gradient">Portfolio</span>
              <span className="text-foreground"> của bạn</span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 font-body leading-relaxed"
          >
            A place where{" "}
            <span className="text-foreground font-semibold">developers</span>{" "}
            and <span className="text-foreground font-semibold">designer</span>{" "}
            create,{" "}
            <span className="text-primary font-semibold">
              impressive portfolios,{" "}
            </span>
            manage personal projects and{" "}
            <span className="text-foreground font-semibold">connect</span> with
            the creative community.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { value: "100+", label: "Developers" },
              { value: "500+", label: "Projects" },
              { value: "99%", label: "Hài lòng" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary Button */}
            {user ? (
              <motion.a
                href="/dashboard"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Go to Dashboard
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            ) : (
              <motion.a
                href="/auth"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start for Free
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            )}

            {/* Secondary Button */}
            <motion.a
              href="#explore"
              className="group px-8 py-4 border border-border text-foreground font-heading font-semibold rounded-xl hover:bg-secondary/50 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe className="w-5 h-5" />
              Explore Portfolios
            </motion.a>
          </motion.div>
          {/* Search hint */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mt-8 text-sm text-muted-foreground"
          >
            🔍 Tìm kiếm developer theo <span className="text-primary">tên</span>{" "}
            hoặc <span className="text-primary">email</span> ngay trên thanh
            điều hướng
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-27 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 1.8 },
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground tracking-wider">
              SCROLL
            </span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
