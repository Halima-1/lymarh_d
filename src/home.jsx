import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsArrowUpRight,
  BsGithub,
  BsFillEnvelopeFill,
  BsMoonFill,
  BsSunFill,
  BsList
} from "react-icons/bs";
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiSolidity,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { GrClose } from "react-icons/gr";
import "./styles/index.scss";

const FoundryMark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 4H18V7.4H10V11H16.5V14.4H10V20H6V4Z" fill="currentColor" />
  </svg>
);

const techRegistry = {
  "React.js": { label: "React.js", icon: SiReact, color: "#61DAFB" },
  TypeScript: { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  Typescript: { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  "Next.js": { label: "Next.js", icon: SiNextdotjs, color: "#111111" },
  "Node.js": { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  Solidity: { label: "Solidity", icon: SiSolidity, color: "#6F7CBA" },
  Firebase: { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  Supabase: { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  "Git & GitHub": { label: "Git & GitHub", icon: SiGithub, color: "#181717" },
  SASS: { label: "SASS", icon: SiSass, color: "#CC6699" },
  SCSS: { label: "SCSS", icon: SiSass, color: "#CC6699" },
  "Tailwind CSS": { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  Tailwind: { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  CSS: { label: "CSS3", icon: SiCss3, color: "#1572B6" },
  Foundry: { label: "Foundry", icon: FoundryMark, color: "#A855F7" }
};

const skills = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Solidity",
  "Foundry",
  "Supabase",
  "Git & GitHub",
  "SASS",
  "Tailwind CSS"
];

const projects = [
  {
    id: 1,
    project: "Planify",
    demo: "https://planiffyy.netlify.app/",
    repo: "https://github.com/Halima-1/Planify.git",
    Image: "/planiffy.png",
    description:
      "Planify is a web-based event management platform built with React, Firebase, and Google Maps API, designed to help users easily create, view, and manage events.",
    technology: ["React.js", "Firebase", "SASS"]
  },
  {
    id: 2,
    project: "Stash",
    demo: "https://stashh-mvp.vercel.app",
    repo: "https://github.com/Halima-1/stash.git",
    Image: "/stash.png",
    description:
      "Non-custodial savings for inflation-heavy economies. A smart-contract neobank that lets you save USDC in a flexible or time-locked vault and send peer-to-peer, all from your own wallet.",
    technology: ["Next.js", "Typescript", "Tailwind", "SCSS", "Solidity"]
  },
  {
    id: 3,
    project: "Propsphere",
    demo: "https://prop-sphere.vercel.app",
    repo: "https://github.com/Halima-1/prop-sphere.git",
    Image: "/taskpad image.png",
    description:
      "This is a property management dApp built on Lisk sepolia testnet. User can upload images of their property and list for buyers.",
    technology: ["React.js", "Typescript", "SCSS"]
  },
  {
    id: 4,
    project: "Multi Step Form",
    demo: "https://multii-form.netlify.app/",
    repo: "",
    Image: "/multi-form.png",
    description:
      "A sleek and interactive multi-step form built to enhance user experience with step-by-step navigation, add-ons selection, and dynamic validation.",
    technology: ["React.js", "SASS"]
  },
  {
    id: 5,
    project: "Pulse AI",
    demo: "https://planiffyy.netlify.app/",
    repo: "https://github.com/Halima-1/pulse-ai.git",
    Image: "/planiffy.png",
    description: "AI-guided, wallet-native risk management protocol for Solana.",
    technology: ["React.js", "Tailwind", "Supabase", "CSS"]
  }
];

const rolesData = [
  { text: "Frontend Developer", link: null },
  { text: "Blockchain Fullstack Developer", link: null },
  { text: "Web3 Technical Writer", link: null }
];

const imagesData = ["/halima1.jpeg", "/halima2.jpeg", "/halima3.jpeg"];

const socialLinks = [
  {
    href: "mailto:dahunsiolajumoke18@gmail.com",
    label: "Email",
    icon: BsFillEnvelopeFill
  },
  {
    href: "https://github.com/Halima-1",
    label: "GitHub",
    icon: BsGithub
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesData.length);
    }, 3000);

    const imgInterval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imagesData.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(imgInterval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };


  return (
    <>
      <header>
        <div className="container header-inner">
          <div className="logo">
            <img src="/halima1.jpeg" alt="Halima Dahunsi" className="logo-avatar" />
            <div className="logo-copy">
              Halima<span className="dot">.</span>
            </div>
          </div>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
            </button>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <GrClose /> : <BsList />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp}>
              Crafting <span className="gold-text">digital experiences</span> that matter.
            </motion.h1>
            <motion.p variants={fadeInUp}>
              I am a Frontend Developer skilled in building visually stunning, responsive,
              and robust web applications. I transform ideas into seamless digital realities.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeInUp}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="https://docs.google.com/document/d/1VEmdD9m2WNQHkEEZldhDPXPwOlGJtoxiwr0hVwucgSM/edit"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                I bridge the gap between design and engineering, ensuring every application
                feels polished and performant. Here is a brief look at my primary roles:
              </motion.p>

              <div className="role-cycler-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="role-item"
                  >
                    <span className="role-bullet"></span>
                    {rolesData[roleIndex].text}
                    {rolesData[roleIndex].link && (
                      <a
                        href={rolesData[roleIndex].link}
                        target="_blank"
                        rel="noreferrer"
                        className="role-link"
                      >
                        (View Medium)
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.p variants={fadeInUp}>
                When I&apos;m not coding, I&apos;m constantly learning about new paradigms in
                web development, exploring smart contracts, and fine-tuning my design
                aesthetics.
              </motion.p>

              <motion.div className="social-links about-social-links" variants={fadeInUp}>
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={link.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </motion.div>

              <motion.div
                className="skills-wrapper"
                variants={staggerContainer}
              >
                <h3 className="toolbox-title">My Toolbox</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => {
                    const tech = techRegistry[skill];
                    const TechIcon = tech.icon;

                    return (
                      <motion.div
                        key={index}
                        className="skill-card"
                        variants={fadeInUp}
                        style={{ "--brand-color": tech.color }}
                      >
                        <div className="skill-logo" aria-hidden="true">
                          <TechIcon />
                        </div>
                        <span>{tech.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-images"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  className="image-wrapper"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img src={imagesData[imgIndex]} alt={`Portrait of Halima ${imgIndex + 1}`} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Recent Works
          </motion.h2>

          <motion.div
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.div key={project.id} className="project-card" variants={fadeInUp}>
                <img src={project.Image} alt={project.project} className="project-img" />
                <div className="project-info">
                  <h3>{project.project}</h3>
                  <div className="project-tech">
                    {project.technology.map((tech, index) => {
                      const techItem = techRegistry[tech];
                      const TechIcon = techItem.icon;

                      return (
                        <span
                          key={index}
                          className="tech-pill"
                          style={{ "--brand-color": techItem.color }}
                          title={techItem.label}
                        >
                          <TechIcon aria-hidden="true" />
                          <span>{techItem.label}</span>
                        </span>
                      );
                    })}
                  </div>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo <BsArrowUpRight />
                    </a>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Repo <BsGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="section container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>

          <div className="contact-container">
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <p>
                Looking to collaborate on a new project or just want to say hi? My inbox is
                always open. I&apos;ll get back to you as soon as possible.
              </p>

              <div className="social-links">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={link.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              ref={formRef}
              className="contact-form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              onSubmit={handleSubmit}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Halima Dahunsi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
