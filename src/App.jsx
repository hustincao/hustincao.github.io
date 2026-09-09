import { useEffect } from "react";
import {
  education,
  experience,
  navigation,
  profile,
  projects,
  strengths,
  toolkit,
} from "./data/portfolio";

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 5v14m-6-6 6 6 6-6" />
    </svg>
  );
}

function SectionIntro({ id, number, eyebrow, title, note }) {
  return (
    <div className="section-intro" data-reveal>
      <p className="section-number">{number}</p>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {note && <p className="section-note">{note}</p>}
      </div>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = document.querySelectorAll("[data-reveal]");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Hustin Cao, home">
        HC<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Let’s talk
        <ArrowUpRight />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-meta hero-meta-top" data-reveal>
        <p>Full-stack engineer</p>
        <p>Portfolio / 2026</p>
      </div>

      <div className="hero-title-wrap">
        <h1 id="hero-title">
          <span>Hustin</span>
          <span className="hero-last-name">
            Cao<span className="accent-dot">.</span>
          </span>
        </h1>
        <div className="hero-stamp" aria-hidden="true">
          <span>Craft</span>
          <span>Logic</span>
          <span>Curiosity</span>
        </div>
      </div>

      <div className="hero-bottom" data-reveal>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Building thoughtful things at Initium.AI
        </div>
        <a className="scroll-cue" href="#work">
          Scroll to explore
          <ArrowDown />
        </a>
      </div>

      <div className="registration-mark registration-mark-one" aria-hidden="true" />
      <div className="registration-mark registration-mark-two" aria-hidden="true" />
    </section>
  );
}

function ProjectArt({ type }) {
  if (type === "riftbound") {
    return (
      <div className="project-art project-art-riftbound" aria-hidden="true">
        <div className="inventory-window">
          <div className="inventory-toolbar">
            <span />
            <span />
            <span />
            <strong>CARDS / SHOPS</strong>
          </div>
          <div className="inventory-search">
            <span>⌕</span>
            <i />
          </div>
          <div className="inventory-results">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="riftbound-marker">
          <strong>MI</strong>
          <span>IN STOCK</span>
        </div>
        <p>SEARCH / COMPARE / SHOP LOCAL</p>
      </div>
    );
  }

  if (type === "compiler") {
    return (
      <div className="project-art project-art-compiler" aria-hidden="true">
        <div className="graph-line graph-line-one" />
        <div className="graph-line graph-line-two" />
        <div className="graph-line graph-line-three" />
        <span className="graph-node graph-node-one">A</span>
        <span className="graph-node graph-node-two">B</span>
        <span className="graph-node graph-node-three">C</span>
        <span className="graph-node graph-node-four">D</span>
        <p>IR → OPT → CODE</p>
      </div>
    );
  }

  return (
    <div className="project-art project-art-nonogram" aria-hidden="true">
      <div className="nonogram-grid">
        {Array.from({ length: 49 }, (_, index) => (
          <span
            className={[2, 4, 8, 9, 11, 16, 17, 18, 22, 24, 26, 30, 32, 36, 37, 38, 39, 40, 44, 46].includes(index) ? "filled" : ""}
            key={index}
          />
        ))}
      </div>
      <p>7 × 7 / PARALLEL SOLVE</p>
    </div>
  );
}

function Work() {
  return (
    <section className="page-section work" id="work" aria-labelledby="work-title">
      <SectionIntro
        id="work-title"
        number="01"
        eyebrow="Selected work"
        title="Experiments with a purpose."
        note="Independent products, open-source builds, and research explorations."
      />

      <div className="section-content project-grid">
        {projects.map((project) => (
          <article className={`project-card project-card-${project.art}`} key={project.title} data-reveal>
            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              <div className="project-meta">
                <p>{project.number}</p>
                <p>{project.category}</p>
                <ArrowUpRight />
              </div>
              <ProjectArt type={project.art} />
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <div className="toolkit" aria-label="Tools and technologies">
      <p className="toolkit-label">Tools I reach for</p>
      <ul>
        {toolkit.map((tool) => (
          <li key={tool}>
            <span aria-hidden="true">✦</span>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <section className="page-section about" id="about" aria-labelledby="about-title">
      <SectionIntro
        id="about-title"
        number="02"
        eyebrow="About"
        title="Making the complex feel natural."
        note="From first sketch to shipped feature."
      />

      <div className="section-content">
        <div className="about-copy" data-reveal>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="strengths">
          {strengths.map((strength) => (
            <article className="strength" key={strength.number} data-reveal>
              <p className="strength-number">{strength.number}</p>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      className="page-section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionIntro
        id="experience-title"
        number="03"
        eyebrow="Experience"
        title="A path shaped by shipping."
        note="Learning by making, from QA to full-stack product work."
      />

      <div className="section-content experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.company} data-reveal>
            <div className="experience-heading">
              <p className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3>{item.company}</h3>
              <p className="experience-period">{item.period}</p>
            </div>

            <div className="experience-body">
              <p className="experience-summary">{item.summary}</p>
              <div className="role-list">
                {item.roles.map((role) => (
                  <div className="role" key={`${item.company}-${role.title}`}>
                    <p>{role.title}</p>
                    <p>{role.period}</p>
                  </div>
                ))}
              </div>
              {item.highlights && (
                <ul className="highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      className="page-section education"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionIntro
        id="education-title"
        number="04"
        eyebrow="Education"
        title="Always a student."
        note="Computer science, twice over, at Michigan."
      />

      <div className="section-content education-list">
        {education.map((item, index) => (
          <article className="education-card" key={item.degree} data-reveal>
            <div className="education-card-top">
              <p>{String(index + 1).padStart(2, "0")}</p>
              <p>{item.period}</p>
            </div>
            <div className="block-m" aria-hidden="true">
              M
            </div>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-top" data-reveal>
        <p className="eyebrow">05 / Contact</p>
        <p className="contact-note">Have a useful idea in mind?</p>
      </div>
      <div className="contact-title-row" data-reveal>
        <h2 id="contact-title">
          Let’s make
          <em> something good.</em>
        </h2>
        <a
          className="contact-action"
          href={profile.links[0].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Hustin Cao on GitHub"
        >
          <ArrowUpRight />
        </a>
      </div>
      <div className="contact-footer">
        <p>Open to thoughtful products and good conversations.</p>
        <div className="contact-links">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Toolkit />
        <Work />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Hustin Cao</p>
        <p>Designed with intent. Built with React.</p>
      </footer>
    </>
  );
}

export default App;
