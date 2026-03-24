import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

const projects = [
  {
    title: "Sketchnote – Visual Note Taking App",
    description:
      "Tablet-first visual note-taking application that allows users to draw, write notes, and collaborate in real time. Implemented a Canvas-based drawing engine and integrated AI image generation via backend APIs.",
    image: project1,
    tags: ["React Native", "Canvas API", "WebSocket", "Cloudinary"],
    liveUrl: "https://expo.dev/artifacts/eas/rBmPFbkxuofyLrrNyCbiuM.apk",
    githubUrl: "https://github.com/Quang823/Capstone-Project-Sketchnote.git",
  },
  {
    title: "InterTransConnect – Translation Platform",
    description:
      "Full-stack translation marketplace connecting customers with translators. Includes booking workflow, document upload, and service tracking with a responsive UI for both customers and translators.",
    image: project2,
    tags: ["React", "Firebase", "REST API", "Cloudinary"],
    liveUrl: "https://inter-trans-connect.web.app",
    githubUrl: "https://github.com/Quang823/EXE202_InterTranConnect.git",
  },
  {
    title: "Blind Box E-commerce System",
    description:
      "E-commerce platform for selling blind box collectibles with authentication, wallet-based payment, and a lucky wheel reward system. Built responsive UI and integrated backend APIs for user and transaction management.",
    image: project3,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Dự án
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Các dự án <span className="text-gradient">nổi bật</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative group overflow-hidden rounded-2xl glow-box"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay links */}
                  <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-secondary text-secondary-foreground rounded-full hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-sm font-heading bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
