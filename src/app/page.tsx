"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Scrollbar from "@/components/Scrollbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SkillBadge from "@/components/SkillBadge";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const projectsRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const skillsRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const contactRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const img = new Image();
    img.src = "/profile.jpg";
    img.onload = () => setImageLoaded(true);
    img.crossOrigin = "anonymous";
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Vendora : E-commerce Website Builder",
      description:
        "A full-stack e-commerce platform builder in one click.",
      image: "",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Curex : Smart Health Monitoring System",
      description:
        "Symptom checker and health monitoring system.",
      image: "",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      link: "#",
    },
    {
      title: "Chess : Online Chess Game",
      description:
        "Chess  with real-time multiplayer functionality.",
      image: "",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      link: "#",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <Scrollbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative flex-1 flex items-center justify-center px-4 py-2 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-3/4 space-y-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold font-montserrat"
                >
                  Sushil Regmi
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-muted-foreground"
                >
                  Full Stack developer lead at{" "}
                  <span className="font-bold cursor-pointer hover:text-primary transition-colors">
                    .......
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6 space-y-4"
                >
                  <p className="text-justify text-muted-foreground leading-relaxed">
                    I am a passionate developer with a strong interest in modern
                    web technologies. I enjoy building clean, efficient, and
                    user-friendly applications, always eager to learn and
                    improve my skills. I like working with React and Next.js,
                    and I focus on creating seamless user experiences with
                    attention to detail.
                  </p>

                  <div className="pt-4 flex gap-4">
                    <Button
                      variant="link"
                      size="default"
                      className="underline hover:cursor-pointer hover:bg-purple-500/50 hover:text-white  rounded-full"
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      View My Work
                    </Button>
                    <Button
                      size="default"
                      className="hover:cursor-pointer hover:bg-purple-500/50 hover:text-white rounded-full"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Contact Me
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: imageLoaded ? 1 : 0,
                  scale: imageLoaded ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  {imageLoaded ? (
                    <img
                      src="/profile.jpg"
                      alt="Sushil Regmi"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted animate-pulse"></div>
                  )}
                </div>

                <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="text-xs md:text-sm font-bold">3+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection(aboutRef)}
              aria-label="Scroll down"
              className="hover:cursor-pointer rounded-full bg-primary/10 hover:bg-primary/20"
            >
              <ArrowDown className="h-14 w-14" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-center">My Journey</h3>
                <p className="text-justify min-w-full mb-4">
                  My journey in web development began 4 years ago. Since then,
                  I’ve gained experience in both front-end and back-end
                  development, building practical web applications. Currently, I
                  work at Ghar, where I contribute to projects and help support
                  junior developers. I focus on writing clean code and
                  continuously learning. Outside of work, I enjoy exploring new
                  technologies and sharing knowledge with the community.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                ref={skillsRef}
              >
                <h3 className="text-2xl font-bold mb-4 text-center">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-2">My Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Here are some of the projects I've worked on and some i am working on. Each project
                represents different skills and technologies I've mastered.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss a potential
                collaboration? Feel free to reach out!
              </p>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
