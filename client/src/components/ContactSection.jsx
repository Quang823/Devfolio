import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Liên hệ
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Hãy <span className="text-gradient">kết nối</span> với tôi
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Bạn có dự án thú vị? Hãy cùng hợp tác để tạo ra điều tuyệt vời!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:hello@example.com"
              className="glass rounded-xl px-8 py-5 flex items-center gap-4 hover:glow-box transition-shadow duration-500 group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-heading font-semibold text-foreground">
                  hello@example.com
                </p>
              </div>
            </a>
            <div className="glass rounded-xl px-8 py-5 flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Vị trí</p>
                <p className="font-heading font-semibold text-foreground">
                  Hà Nội, Việt Nam
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass rounded-xl hover:glow-box transition-shadow duration-500"
              >
                <social.icon className="w-6 h-6 text-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
