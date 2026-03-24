import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend Dev", desc: "React, TypeScript, Next.js" },
  { icon: Palette, label: "UI/UX Design", desc: "Figma, Adobe Creative Suite" },
  { icon: Rocket, label: "Performance", desc: "Tối ưu tốc độ & SEO" },
  { icon: Zap, label: "Animation", desc: "Framer Motion, GSAP" },
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
          className="max-w-4xl mx-auto"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Về tôi
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
            Đam mê tạo ra những{" "}
            <span className="text-gradient">trải nghiệm số</span> tuyệt vời
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-16">
            Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển web và thiết kế,
            tôi đã làm việc với nhiều khách hàng từ startup đến doanh nghiệp
            lớn. Tôi tin rằng thiết kế tốt không chỉ đẹp mà còn phải giải quyết
            được vấn đề thực tế.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 group hover:glow-box transition-shadow duration-500"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {skill.label}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
