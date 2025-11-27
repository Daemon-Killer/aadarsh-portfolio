import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Layout, 
  Menu, 
  X, 
  ChevronRight,
  Download,
  Award
} from 'lucide-react';

// --- Data based on Resume ---

const personalInfo = {
  name: "Aadarsh",
  role: "Frontend Engineer",
  tagline: "Building scalable and interactive web experiences.",
  email: "aadarsh.22.2003@gmail.com",
  phone: "+91 7534089801",
  location: "New Delhi, India",
  links: {
    linkedin: "https://www.linkedin.com/in/aadarsh2003/",
    github: "https://github.com/Daemon-Killer",
    leetcode: "#",
    portfolio: "https://aadarsh-frontend-developer.vercel.app/"
  },
  about: "I am a Computer Science undergraduate at IIIT Sonepat with a passion for building intuitive user interfaces. My experience ranges from developing large-scale publisher dashboards to creating responsive e-commerce platforms. I specialize in the React ecosystem and enjoy solving complex frontend challenges."
};

const experience = [
  {
    company: "Crackle",
    role: "SDE Intern",
    location: "New Delhi",
    period: "Apr 2025 - Present",
    description: "Engineered the UI revamp of a large-scale, role-based publisher dashboard.",
    achievements: [
      "Revamped UI using React and Material-UI (MUI), improving experience for publishers and admins.",
      "Visualized KPIs (revenue, eCPM) with interactive cards, sparklines, and Recharts.",
      "Built a critical 'ads.txt' validation page to prevent ad revenue losses.",
      "Implemented comprehensive documentation for Android, iOS, and Unity SDK integration."
    ]
  },
  {
    company: "Biotechtrek",
    role: "Frontend Developer",
    location: "Remote",
    period: "Dec 2024 - Mar 2025",
    description: "Developed an interactive job portal UI as part of a MERN stack application.",
    achievements: [
      "Built a responsive job portal interface using React and Tailwind CSS.",
      "Collaborated with backend teams to integrate job data APIs.",
      "Optimized user experience and design to increase engagement."
    ]
  }
];

const projects = [
  {
    title: "Wireless Audio World",
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe", "Sanity"],
    date: "June 2023",
    description: "A scalable e-commerce platform for audio devices handling 100+ products.",
    points: [
      "Integrated Stripe for secure payments (50+ test transactions).",
      "Managed content via Sanity CMS.",
      "Responsive UI with Tailwind CSS."
    ],
    link: "https://bluetooth-store.vercel.app/",
    repo: "https://github.com/RuntimeTerror6969/Bluetooth_Store"
  },
  {
    title: "Food Menu Application",
    tech: ["React", "React Router", "Tailwind", "Axios"],
    date: "Dec 2024 - Jan 2025",
    description: "Responsive food menu app with dynamic filtering and sorting.",
    points: [
      "Features dynamic food cards and modal views for meal details.",
      "Implemented pagination and skeleton loaders.",
      "Filtering by cuisine and sorting functionality."
    ],
    link: "https://aadarsh-frontend-developer.vercel.app/",
    repo: "https://github.com/RuntimeTerror6969/swiggy-clone"
  }
];

const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "C/C++", "HTML5/CSS3"],
  frameworks: ["React.js", "Next.js", "Redux", "Node.js", "Express.js", "Tailwind CSS", "Material UI"],
  tools: ["Git & GitHub", "Docker", "Google Cloud", "VS Code", "Postman"],
  databases: ["MongoDB", "MySQL"]
};

const education = [
  {
    institution: "Indian Institute of Information Technology, Sonepat",
    degree: "Bachelor of Technology in Computer Science",
    period: "Dec 2021 - May 2025"
  }
];

const achievements = [
  "Ranked 200 out of 31,000 participants in LeetCode Weekly Contest 438.",
  "Top 13.77% globally on LeetCode."
];

// --- Components ---

const Section = ({ id, className, children }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span>Aadarsh<span className="text-blue-500">.dev</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === link.href.substring(1) ? 'text-blue-500' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <Section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <p className="text-blue-500 font-medium mb-4 tracking-wide">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
              {personalInfo.name}.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
              I build things for the web.
            </h2>
            <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
              {personalInfo.tagline} Currently focusing on creating accessible, human-centered products as a 
              <span className="text-blue-400"> {personalInfo.role}</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Check out my work
              </a>
              <a 
                href={personalInfo.links.github}
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-blue-500/50 hover:bg-blue-500/5 transition-all flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Github
              </a>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" className="bg-slate-900/30">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
                <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I am currently pursuing my <strong className="text-blue-400">B.Tech in Computer Science</strong> at 
                <span className="text-slate-200"> {education[0].institution}</span>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <Award className="w-8 h-8 text-yellow-500 mb-2" />
                  <h4 className="text-slate-200 font-bold">LeetCode</h4>
                  <p className="text-sm text-slate-400">Top 13.77% Globally</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                  <Code2 className="w-8 h-8 text-blue-500 mb-2" />
                  <h4 className="text-slate-200 font-bold">Problem Solving</h4>
                  <p className="text-sm text-slate-400">Rank 200/31k in Contest 438</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Visual */}
            <div className="w-full md:w-1/3 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-800 h-full flex flex-col justify-center items-center text-center">
                 <Cpu className="w-16 h-16 text-slate-600 mb-4 group-hover:text-blue-500 transition-colors duration-300" />
                 <h3 className="text-xl font-bold text-slate-200 mb-2">Modern Stack</h3>
                 <p className="text-slate-400 text-sm">
                   Focused on building performant React applications with the latest ecosystem tools.
                 </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100">Where I've Worked</h2>
            <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-slate-800"></div>
                
                <div className="md:flex gap-12 group">
                  {/* Date & Company (Left) */}
                  <div className="md:w-[20%] md:text-right md:pr-12 relative">
                    <div className="hidden md:block absolute right-[-6px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950 group-hover:ring-blue-500/30 transition-all"></div>
                    <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
                    <p className="text-sm text-slate-500 font-mono mt-1 mb-2">{job.period}</p>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-1 rounded inline-block">
                      {job.location}
                    </span>
                  </div>

                  {/* Details (Right) */}
                  <div className="md:w-[80%] mt-4 md:mt-0 relative border-l-2 border-slate-800 pl-6 md:border-l-0 md:pl-0">
                     {/* Mobile Timeline Dot */}
                    <div className="md:hidden absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
                    
                    <h4 className="text-lg font-medium text-blue-400 mb-4">{job.role}</h4>
                    <ul className="space-y-3">
                      {job.achievements.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-base">
                          <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="bg-slate-900/30">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
            <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div className="flex gap-4 text-slate-400">
                    <a href={project.repo} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
           <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
            <div className="h-px bg-slate-700 flex-1 max-w-[200px]"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <div className="mb-4 text-blue-400"><Code2 /></div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Languages</h3>
              <ul className="space-y-2">
                {skills.languages.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="mb-4 text-blue-400"><Layout /></div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Frameworks</h3>
              <ul className="space-y-2">
                {skills.frameworks.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="mb-4 text-blue-400"><Terminal /></div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Tools</h3>
              <ul className="space-y-2">
                {skills.tools.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="mb-4 text-blue-400"><Database /></div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Databases</h3>
              <ul className="space-y-2">
                {skills.databases.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="text-center py-32 bg-gradient-to-b from-slate-950 to-slate-900">
          <p className="text-blue-500 font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
            I'm currently looking for new opportunities as a Frontend Engineer. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500/10 transition-all font-medium"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950 border-t border-slate-900">
        <div className="flex justify-center gap-6 mb-4">
          <a href={personalInfo.links.github} className="hover:text-blue-400 transition-colors"><Github className="w-5 h-5" /></a>
          <a href={personalInfo.links.linkedin} className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href={personalInfo.links.portfolio} className="hover:text-blue-400 transition-colors"><Code2 className="w-5 h-5" /></a>
        </div>
        <p>Designed & Built by {personalInfo.name}</p>
        <p className="mt-2 text-xs opacity-50">Based on Resume Data</p>
      </footer>
    </div>
  );
}