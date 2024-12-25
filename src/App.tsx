import { FiExternalLink } from "react-icons/fi";
import { experience, links, projects, socials } from "./constants";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useRef } from "react";

function App() {
  const sectionRefs = {
    about: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
  };

  const handleScrollToElement = (target: keyof typeof sectionRefs) => {
    if (sectionRefs[target] && sectionRefs[target].current) {
      sectionRefs[target].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Router>
      <div className="h-screen py-[5rem] lg:py-0 w-full px-2 sm:px-[10%] lg:px-0 lg:flex relative">
        <div className="w-full lg:w-[40%] lg:left-[5%] flex items-center lg:justify-center lg:fixed lg:h-screen">
          <div className="px-6 lg:px-0 gap-12 lg:gap-0 lg:h-screen lg:py-[7rem] max-w-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h1 className="text-5xl font-merriweather font-bold mb-3">
                  Alfath Rajif
                </h1>
                <h2 className="text-xl font-medium tracking-tight">
                  Web Developer & Fresh Graduate in&nbsp;Technology Information
                </h2>
              </div>
              <p className="leading-relaxed text-lg text-zinc-500">
                Welcome, here&apos;s a glimpse into my web development journey.
              </p>
            </div>
            <nav className="hidden text-xl lg:flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.title}
                  to={link.link}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    const target = link.link.slice(1); // Get the target section ID without the '#'
                    handleScrollToElement(target as keyof typeof sectionRefs);
                  }}
                  className="uppercase font-semibold font-merriweather w-fit px-1 hover:underline">
                  {link.title}
                </Link>
              ))}
            </nav>
            <div>
              {socials.map((social) => (
                <Link key={social.title} to={social.link}>
                  {social.icon({ className: "w-6 h-6" })}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:absolute lg:right-[5%] flex items-center justify-start">
          <div className="text-lg text-zinc-500 pb-[6rem]">
            <section
              className="w-full max-w-2xl pt-[5rem] lg:pt-[7rem] space-y-6 px-6"
              id="about"
              ref={sectionRefs.about}>
              <p className="leading-relaxed">
                I started learning coding and web development in vocational
                school in 2016. Now, I use technologies like Next.js for the
                client side and NestJS for scalable server-side work.
              </p>
              <p className="leading-relaxed">
                I enjoy building applications for business areas like finance,
                inventory, and human resources. In my free time, I like
                exploring new topics like AI and Machine Learning.
              </p>
              <p>
                When I&apos;m not coding, I usually watch movies and animations,
                read books, go for runs, or do weight training.
              </p>
            </section>
            <section
              className="w-full max-w-2xl pt-[6rem]"
              id="experience"
              ref={sectionRefs.experience}>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div
                    key={exp.title}
                    className="space-y-3.5 sm:border border-background hover:border-zinc-800 p-4 px-6 pb-6 rounded">
                    <div className="flex items-start justify-between">
                      <div className="max-w-sm font-semibold">
                        <h3 className="text-foreground mb-1">{exp.company}</h3>
                        <p className="text-base">{exp.company_location}</p>
                      </div>
                      <div className="text-sm mt-1 uppercase font-medium">
                        {exp.period}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-base">{exp.description}</p>
                    </div>
                    <div>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-foreground text-background px-2 py-1 rounded font-semibold mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section
              className="w-full max-w-2xl pt-[6rem]"
              id="projects"
              ref={sectionRefs.projects}>
              <div className="space-y-8">
                {projects.map((project) => (
                  <div
                    key={project.brand}
                    className="sm:border border-background flex items-start gap-x-5 hover:border-zinc-800 p-6 rounded">
                    <div className="max-w-[200px] relative">
                      <img
                        src={project.image}
                        alt={project.brand}
                        className="w-full rounded"
                      />
                      <Link
                        to={project.link}
                        target="_blank"
                        className="text-base flex gap-x-1.5 items-center bg-background opacity-0 hover:opacity-80 transition-all w-full h-full justify-center hover:text-foreground absolute top-0">
                        {project.domain} <FiExternalLink className="text-sm" />
                      </Link>
                    </div>
                    <div className="w-full flex items-start justify-between">
                      <div className="space-y-3.5">
                        <div className="max-w-sm font-semibold">
                          <h3 className="text-foreground mb-1">
                            {project.brand}
                          </h3>
                          <p className="text-base">{project.category}</p>
                        </div>
                        <p className="text-sm">{project.description}</p>
                        <div>
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="text-xs bg-foreground text-background px-2 py-1 rounded font-semibold mr-2">
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <footer className="w-full max-w-2xl pt-[6rem]">
              <p className="text-base">
                Coded in <strong>Visual Studio Code</strong> by myself. Build
                with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>,
                deployed with <strong>Railway</strong>. The text is with
                Merriweather and Open Sans fonts.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
