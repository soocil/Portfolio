"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Scrollbar from "@/components/Scrollbar";
import ProjectCard from "@/components/ProjectCard";
import SocialContact from "@/components/SocialContact";
import SkillBadge from "@/components/SkillBadge";
import Footer from "@/components/Footer";
import { ArrowDown, Dot, SquareChartGantt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiTauri,
  SiAndroidstudio,
  SiMysql,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSketch,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import ResumeButtons from "@/components/ResumeButtons";
import { useTextScrambler } from "@/hooks/useTextScrambler"; // Adjust path as needed

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
    img.src = "/Profile/profile2.jpg";
    img.onload = () => setImageLoaded(true);
    img.crossOrigin = "anonymous";
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projects = [
    {
      title: "Curex : Smart Health Monitoring System",
      description: "Symptom checker with consult and booking system.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/sooocil/Curex",
      isPrivate: true,
    },
    {
      title: "Vendora : E-commerce Website Builder",
      description: "No-code drag and drop e-commerce builder.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "https://github.com/sooocil/Vendora",
      isPrivate: true,
    },
    {
      title: "Baas : Hotel Room Booking System",
      description: "Hotel booking system for easy reservations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/sooocil/Baas",
      isPrivate: false,
    },
    {
      title: "Lumo : Screen Dimming Tool",
      description: "Custom brightness controller beyond system limits.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Tauri", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/sooocil/Lumo",
      isPrivate: true,
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 size={28} className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 size={28} className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={28} className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={28} className="text-blue-500" />,
    },
    {
      name: "React",
      icon: <SiReact size={28} className="text-cyan-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={28} className="text-black dark:text-white" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs size={28} className="text-green-600" />,
    },
    {
      name: "ExpressJs",
      icon: (
        <SiExpress size={28} className="text-gray-700 dark:text-gray-200" />
      ),
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={28} className="text-green-700" />,
    },
    {
      name: "Git",
      icon: <SiGit size={28} className="text-orange-200" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={28} className="text-sky-400" />,
    },
    {
      name: "shadcn/ui",
      icon: <SiShadcnui size={28} className="text-violet-500" />,
    },
    {
      name: "Tauri",
      icon: <SiTauri size={28} className="text-orange-400" />,
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio size={28} className="text-green-500" />,
    },
    {
      name: "Figma",
      icon: <LuFigma size={28} className="text-pink-500" />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop size={28} className="text-blue-400" />,
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator size={28} className="text-orange-600" />,
    },
   
  ];

  // useEffect for updating name from random char animating to "Sushil Regmi"
  const originalName = "Sushil Regmi";
  const [displayed, setDisplayed] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    let frame = 0;
    const revealDelay = 4; // number of flickers per character
    const speed = 25;

    const interval = setInterval(() => {
      const progress = Math.floor(frame / revealDelay);

      if (progress >= originalName.length) {
        setDisplayed(originalName);
        clearInterval(interval);
        return;
      }

      const correctPart = originalName.slice(0, progress);
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const nextChar =
        frame % revealDelay === revealDelay - 1
          ? originalName[progress]
          : randomChar;

      setDisplayed(correctPart + nextChar);
      frame++;
    }, speed);

    return () => clearInterval(interval);
  }, []);

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
              <div className="w-full lg:w-3/4 ">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold font-montserrat tracking-tight relative inline-block"
                >
                  <span className="font-extrabold text-white tracking-tight cursor-default relative overflow-hidden inline-block">
                    {displayed}
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-muted-foreground font-raleway mt-2"
                >
                  Full Stack Developer
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6 space-y-4"
                >
                  <p className="text-justify text-muted-foreground leading-relaxed ">
                    I am a passionate full-stack developer with a focus on
                    building efficient and scalable web applications. I enjoy
                    working with modern technologies and continuously improving
                    my skills to deliver high-quality software solutions.
                  </p>

                  <div className="pt-4 flex gap-4">
                    <Button
                      variant="outline"
                      size="default"
                      className=" hover:cursor-pointer hover:bg-zinc-800 font-inter rounded-full text-zinc-200 hover:text-accent  transition-colors duration-200"
                      onClick={() => scrollToSection(projectsRef)}
                    >
                      <SquareChartGantt />
                      View My Work
                    </Button>

                    <ResumeButtons />
                    <Button
                      size="default"
                      className="hover:cursor-pointer font-inter hover:bg-zinc-900 text-zinc-900 border border-zinc-700 bg-zinc-100 hover:text-white hover:border-zinc-300 rounded-full"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Contact Me
                    </Button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{
                  opacity: imageLoaded ? 1 : 0,
                  scale: imageLoaded ? 1 : 0.8,
                }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div
                  className="w-28 h-32 md:w-40 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/20 hover:scale-105 
                            transition-transform duration-300 ease-in-out shadow-xl"
                >
                  {imageLoaded ? (
                    <img
                      src="/Profile/profile2.jpg"
                      alt="Sushil Regmi"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted animate-pulse"></div>
                  )}
                </div>

                <div className="absolute -bottom-1 -right-1 w-10 h-10 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center ">
                  <span className="text-xs md:text-sm font-bold">
                    <Dot size={100} className="text-green-500" />
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection(aboutRef)}
              aria-label="Scroll down"
              className="hover:cursor-pointer rounded-full bg-primary/10 hover:bg-primary/20"
            >
              <ArrowDown size={32} className="h-24 w-24" />
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
              <h2 className="text-3xl font-bold mb-2 font-raleway text-shadow">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>
            <div className=" grid md:grid-cols-2 gap-12 ">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-center font-montserrat">
                  M<span className="bg-slate-100/10">y Journe</span>y
                </h3>
                <p className="text-justify align-middle min-w-20 max-w-1/2 mb-4 font-poppins font-light leading-relaxed">
                  My journey in web development began 4 years ago. Since then,
                  I've gained experience in both front-end and back-end
                  development, building practical web applications. Currently, I
                  working on my side projects. I focus on writing clean code and
                  continuously learning.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                ref={skillsRef}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-center font-montserrat">
                  My Skills
                </h3>
                <div
                  className="grid 
                grid-cols-4 sm:grid-cols-4 md:grid-cols-4  gap-4 max-w-4xl mx-auto"
                >
                  {skills.map((skill, index) => (
                    <SkillBadge
                      key={index}
                      name={skill.name}
                      icon={skill.icon}
                      index={index}
                    />
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
              <h2 className="text-3xl font-bold mb-2 font-raleway text-shadow">
                My Projects
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-poppins font-light">
                Here are some of the projects I've worked on and some I am
                working on. Each project represents different skills and
                technologies I've mastered.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
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
              <h2 className="text-3xl font-bold mb-2 font-raleway text-shadow">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-poppins font-light">
                Ready to work together? Let's connect and make something
                amazing!
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <SocialContact />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
