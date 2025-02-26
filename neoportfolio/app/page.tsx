"use client"; // Add this at the top of the file

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, User, Github, Linkedin, Mail, Phone, ExternalLink, Award, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ParticleBackground } from "@/components/particle-background";
import { useEffect, useState } from "react";

// Define the animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Mobile-Responsive Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Logo or Brand Name (Optional) */}
          <div className="text-lg font-semibold">My Portfolio</div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Overview", "Skills", "Experience", "Certifications", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-sm hover:text-purple-400 transition-colors"
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false); // Close the menu after clicking a link
                }}
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button (Visible on Mobile) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu (Visible when Menu is Open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="flex flex-col space-y-2 p-4">
              {["Overview", "Skills", "Experience", "Certifications", "Contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full text-left text-sm hover:text-purple-400 transition-colors"
                  onClick={() => {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false); // Close the menu after clicking a link
                  }}
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Section */}
        <motion.section id="overview" className="mb-12" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full" variants={fadeIn}>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20132545-ZRCl6EzB9KVYkLuLnsVnP7w1KAfG2n.png"
                alt="James Neo Culala"
                width={300}
                height={300}
                className="rounded-full animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl -z-10" />
            </div>
            <div className="flex-1 md:w-2/3">
              <motion.h1 className="text-5xl font-bold mb-4 gradient-text" variants={fadeIn}>
                James Neo Culala
              </motion.h1>
              <motion.h2 className="text-2xl text-purple-400 mb-4" variants={fadeIn}>
                Web/App Developer
              </motion.h2>
              <motion.p className="text-lg mb-6 leading-relaxed text-gray-300" variants={fadeIn}>
                Including front-end and back-end technologies. Experienced in building and maintaining websites, troubleshooting
                technical issues, and optimizing user experiences. Strong problem-solving abilities and a passion for creating
                functional and visually appealing digital solutions. Seeking an onsite or remote position to apply and expand
                my web development skills while gaining real-world experience. Dedicated to continuous learning and innovation,
                eager to contribute to impactful projects and drive success for your company.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" variants={fadeIn}>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline" className="border-purple-500 hover:bg-purple-500/10" asChild>
                  <a href="files/JamesNeoCulalaRESUME.pdf" download>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-6 flex items-center gradient-text" variants={fadeIn}>
            <Code className="mr-2" />
            Skills & Technologies
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
            {[
              {
                title: "Programming Languages",
                skills: ["Java", "Python", "C#"],
              },
              {
                title: "Web Technologies",
                skills: ["Bootstrap", "JavaScript", "PHP", "Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js"],
              },
              {
                title: "Database",
                skills: ["MySQL", "PostgreSQL"],
              },
              {
                title: "Mobile Development",
                skills: ["Android Studio", ".NET MAUI"],
              },
            ].map((category) => (
              <motion.div
                key={category.title}
                className="card-hover rounded-lg border border-purple-500/20 p-6 bg-black/20"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-6 flex items-center gradient-text" variants={fadeIn}>
            <Briefcase className="mr-2" />
            Experience
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            {[
              {
                title: "Web Developer - DOST Internship",
                period: "February 2025 – April 2025",
                details: [
                  "Developed a Project & Document Management System for DOST-PSTO",
                  "Designed and implemented management systems for CEST, SETUP, GIA, Scholarship Program, and TCT",
                  "Enabled efficient project tracking and structured document handling",
                  "Improved accessibility for program records and requirements",
                ],
              },
              {
                title: "Web-Based Application Thesis",
                period: "2023 - 2024",
                details: [
                  "Developed a web-based reservation system for Nelomax Imagery Studio",
                  "Implemented using PHP, MySQL, JavaScript, and AJAX",
                  "Integrated automated email/SMS notifications and secure user authentication",
                  "Created responsive UI and admin dashboard for business analytics",
                ],
              },
            ].map((job) => (
              <motion.div key={job.title} variants={fadeIn}>
                <Card className="card-hover border-purple-500/20 bg-black/20">
                  <CardHeader>
                    <CardTitle className="text-purple-400">{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-300 mb-4">{job.period}</p>
                    <ul className="space-y-2">
                      {job.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-6 flex items-center gradient-text" variants={fadeIn}>
            <Award className="mr-2" />
            Certifications
          </motion.h2>
          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
            {[
              { title: "Java Foundations", imagePath: "/certifications/java-foundations.jpg" },
              { title: "Foundational C# with Microsoft", imagePath: "/certifications/csharp-microsoft.jpg" },
              { title: "Technical Support Fundamentals", imagePath: "/certifications/tech-support-fundamentals.jpg" },
              { title: "Introduction to Cybersecurity", imagePath: "/certifications/intro-cybersecurity.jpg" },
              { title: "The Bits and Bytes of Computer Networking", imagePath: "/certifications/bits-bytes-net.jpg" },
            ].map((cert) => (
              <motion.div
                key={cert.title}
                className="card-hover rounded-lg border border-purple-500/20 p-4 bg-black/20"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }} // Add hover effect to the card
              >
                <motion.div
                  className="aspect-video mb-4 bg-purple-900/20 rounded-md overflow-hidden"
                  whileHover={{ scale: 1.1 }} // Add hover effect to the image container
                >
                  <Image
                    src={cert.imagePath || "/placeholder.svg"}
                    alt={cert.title}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-purple-400">{cert.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-6 flex items-center gradient-text" variants={fadeIn}>
            <User className="mr-2" />
            Get In Touch
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
            {[
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Phone",
                value: "+63915-055-0357",
                href: "tel:+63915-055-0357",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                title: "Email",
                value: "jamesneo1227@gmail.com",
                href: "mailto:jamesneo1227@gmail.com",
              },
              {
                icon: <Linkedin className="h-5 w-5" />,
                title: "LinkedIn",
                value: "james-neo-culala",
                href: "https://www.linkedin.com/in/james-neo-culala-7627a92a9/",
              },
              {
                icon: <Github className="h-5 w-5" />,
                title: "GitHub",
                value: "View Profile",
                href: "https://github.com/Neo2724",
              },
            ].map((contact) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                className="card-hover flex items-center p-4 rounded-lg border border-purple-500/20 bg-black/20 
                          hover:border-purple-500/40 transition-all"
                variants={fadeIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 mr-4">{contact.icon}</div>
                <div>
                  <h3 className="font-medium text-purple-400">{contact.title}</h3>
                  <p className="text-sm text-gray-300">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} James Neo Culala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}