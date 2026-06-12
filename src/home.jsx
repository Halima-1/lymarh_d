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
  SiTypescript,
  SiFramer
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
  Foundry: { label: "Foundry", icon: FoundryMark, color: "#A855F7" },
  "Framer Motion": { label: "Framer Motion", icon: SiFramer, color: "#0055FF" }
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
    project: "n-NGN",
    demo: "https://n-ngn.vercel.app/",
    repo: "https://github.com/thegreatfeez/nNGN",
    Image: "/nngn.jpeg",
    description:
      "A decentralized, over-collateralized stablecoin pegged 1:1 to the Nigerian Naira, built on Arbitrum. Every nNGN is backed by real ETH locked in a transparent smart contract.",
    technology: ["React.js", "Typescript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    project: "Aegis Protocol",
    demo: "https://aegis-protocol-xi.vercel.app/",
    repo: "https://github.com/thegreatfeez/Aegis",
    Image: "/Aegis.jpeg",
    description:
      "Aegis is an on-chain AI portfolio advisory protocol built on Mantle. It reads a user's live USDY and mETH balances directly from the blockchain, fetches real-time yield rates, and feeds the complete picture into a large language model calibrated to the user's personal risk profile.",
    technology: ["React.js", "Typescript", "Tailwind CSS"]
  },
  {
    id: 3,
    project: "Pulse AI",
    demo: "https://pulse-ai-green-ten.vercel.app/",
    repo: "https://github.com/Halima-1/pulse-ai.git",
    Image: "/pulse.png",
    description: "AI-guided, wallet-native risk management protocol for Solana with real-time portfolio and token risk analysis in the frontend",
    technology: ["React.js", "Tailwind", "Supabase", "CSS"]
  },
  {
    id: 4,
    project: "Stash",
    demo: "https://stashh-mvp.vercel.app",
    repo: "https://github.com/Halima-1/stash.git",
    Image: "/stashh.png",
    description:
      "Non-custodial savings for inflation-heavy economies. A smart-contract neobank that lets you save USDC in a flexible or time-locked vault and send peer-to-peer, all from your own wallet.",
    technology: ["Next.js", "Typescript", "Tailwind", "SCSS", "Solidity"]
  },
  // {
  //   id: 4,
  //   project: "Propsphere",
  //   demo: "https://prop-sphere.vercel.app",
  //   repo: "https://github.com/Halima-1/prop-sphere.git",
  //   Image: "/props.png",
  //   description:
  //     "A property management dApp built on Lisk sepolia testnet. User can upload images of their property and list for buyers.",
  //   technology: ["React.js", "Typescript", "SCSS"]
  // },
  {
    id: 5,
    project: "Planify",
    demo: "https://planiffyy.netlify.app/",
    repo: "https://github.com/Halima-1/Planify.git",
    Image: "/planiffy.png",
    description:
      "Planify is a web-based event management platform built with React, Firebase, and Google Maps API, designed to help users easily create, view, and manage events.",
    technology: ["React.js", "Firebase", "SASS"]
  }

];

const rolesData = [
  { text: "Frontend Developer", link: null },
  { text: "Blockchain Fullstack Developer", link: null },
  { text: "Web3 Technical Writer", link: null }
];

const educationData = [
  {
    id: 1,
    category: "Degree",
    school: "Federal University of Technology, Minna",
    location: "Minna, Nigeria",
    program: "Industrial Chemistry",
    summary:
      "Graduated with a strong Second Class Upper (2:1), building a rigorous foundation in research, analysis, and structured problem solving."
  },
  {
    id: 2,
    category: "Professional Training",
    school: "Web3Bridge",
    location: "Nigeria",
    program: "Advanced Web2 Development and Blockchain Development",
    summary:
      "Deepened my engineering skills across modern frontend architecture, product thinking, and blockchain development workflows."
  },
  {
    id: 3,
    category: "Specialized Training",
    school: "OIC Hub Coding School",
    location: "Osogbo, Nigeria",
    program: "Frontend Development",
    summary:
      "Strengthened my UI implementation skills with hands-on training in responsive layouts, accessibility, and polished user experiences."
  }
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || isSending) {
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_5pxa3vh",
        "template_5vnrqzb",
        formRef.current,
        "h71E_TPgzzVw2_ker"
      );

      formRef.current.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setIsSending(false);
    }
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
              and robust web applications, while also growing as a blockchain developer
              building on EVM with a strong interest in DeFi and crafting beautiful,
              user-friendly UIs for dApps.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeInUp}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="https://github.com/Halima-1"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Github
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
                I am a frontend developer who loves turning ideas into polished,
                responsive, and user-friendly products. I also build as a blockchain
                developer on EVM, with a growing interest in DeFi and seamless dApp
                experiences. Here is a brief look at my primary roles:
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
                I enjoy working at the intersection of product design and engineering,
                making sure the interfaces I build are not just functional, but intuitive
                and visually thoughtful. I&apos;m constantly learning, exploring smart
                contracts, and refining how great Web2 and Web3 experiences should feel.
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
                    if (!tech) return null;
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

        <section id="education" className="section container education-section">
          <motion.div
            className="education-shell"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            <motion.div className="education-heading" variants={fadeInUp}>
              <span className="education-kicker">Education</span>
              <h2 className="section-title education-title">Learning Journey</h2>
              <p>
                My path blends science, product-minded web development, and blockchain
                training, giving me a thoughtful approach to building digital experiences.
              </p>
            </motion.div>

            <motion.div className="education-timeline" variants={staggerContainer}>
              {educationData.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="education-card"
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="education-orb" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="education-card-content">
                    <div className="education-meta">
                      <span className="education-tag">{item.category}</span>
                      <span className="education-location">{item.location}</span>
                    </div>

                    <h3>{item.school}</h3>
                    <h4>{item.program}</h4>
                    <p>{item.summary}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="projects" className="section container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Some recent projects
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
                      if (!techItem) return null;
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
