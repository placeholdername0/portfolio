import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import gameproj from "./assets/gameproj.png";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


{/*details to make this easy to add more to in the future*/}
const projects = [
  {
    title: "3D game being developed for my thesis",
    image: gameproj,
    description:
      "A game built for my thesis project. I use C# for Unity, Blender for 3D modelling, and shader work."
  },
  {
    title: "Poster Sample",
    image: proj1,
    description: "Previous sample graphic design project from a couple years ago for my digital design class."
  },
  {
    title: "Photo Edit Sample",
    image: proj2,
    description: "Previous sample graphic design project from a couple years ago for my digital design class."
  },
  {
    title: "Promotional Sample Piece",
    image: proj3,
    description: "Previous sample graphic design project from a couple years ago for my digital design class."
  }
];

const skills = [
              "Graphic Design",
              "Test-Driven Development",
              "Python",
              "C",
              "C#",
              "Lua",
              "Java",
              "HTML",
              "React",
              "TypeScript",
              "SQL",
              "PHP",
              "Docker",
              "Next.js",
              "Visual Studio",
              "Notepad++",
              "Github Version Control",
              "Microsoft Office",
              "Blender",
              "Krita",
              "Microsoft Excel",
              "React",
              "Next.js",
              "Scikit-learn",
              "Distributed Systems",
              "Data Modelling",
              "Feature Engineering",
              "Agile/Scrum",
              "Data Structures",
              "Digital Art",
              "3D Animation",
              "Computer Science tutoring",
              "Texturing",
              "UV Mapping",
              "Rendering",
              "Compositing",
              "Image editing",
              "Photoshop",
              "Game Modding",
              "Audio Engineering",
              "DaVinci Resolve",
]

function SkillList({ items }) {
  return (
    <ul className="list-unstyled row">
      {items.map((skill, i) => (
        <li key={i} className="col-6 col-md-4 col-lg-3 mb-2">
          <div className="bg-secondary text-light rounded-pill px-3 py-2 text-center">
            {skill}
          </div>
        </li>
      ))}
    </ul>
  );
}


{/*condensed to just wrap the section*/}
function Skills() {
  return (
    <div className="container mt-5">
      <div className="p-4 bg-dark rounded-4 shadow text-light">
        <h1>Skills</h1>
        <SkillList items={skills} />
      </div>
    </div>
  );
}

{/*Component to split things up and make projects more reusable*/}
function ProjectCard({ project, isOpen, onClick }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className="p-3 bg-secondary rounded-4 h-100 project-card"
        onClick={onClick}
      >

        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-3 project-img"
        />

        <h5>{project.title}</h5>

        <div className={`project-desc ${isOpen ? "open" : ""}`}>
          <p className="mt-2 mb-0">{project.description}</p>
        </div>

      </div>
    </div>
  );
}

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <div className="p-4 bg-dark rounded-4 shadow text-light">
        <h1>Projects</h1>

        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}


function AboutMe() {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="p-4 bg-dark rounded-4 shadow text-light mb-4">
            <h2>About Me</h2>
            <p>
              General curious software developer aiming to make things that are either entertaining or useful. 
              Using as many skills as I have to time to get or learn, I'm always interested in learning more.
              I am available for freelance work and plan to work on music eventually as well.
            </p>
          </div>

          {/* Fun Facts Section */}
          <div className="p-4 bg-dark rounded-4 shadow text-light">

            <h2 className="mb-3">Fun Facts</h2>

            <div className="row text-center">

              <div className="col-md-4 mb-3">
                <div className="display-6 fw-bold">🎮</div>
                <div className="fs-5">Game Dev</div>
                <div className="text">Currently building a game for my thesis in Unity</div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="display-6 fw-bold">🎨</div>
                <div className="fs-5">Artist</div>
                <div className="text">I do 2D + 3D design work</div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="display-6 fw-bold">⚙️</div>
                <div className="fs-5">Engineer</div>
                <div className="">I've dabbled in a lot of systems & backend logic</div>
              </div>

                {/* Key Highlights Section */}
                <div className="p-4 bg-dark rounded-4 shadow text-light mt-4">

                  <h2 className="mb-3">Key Highlights</h2>

                  <div className="fs-5">

                  <div className="p-4 bg-dark rounded-4 shadow text-light mt-4">


                  <ul className="fs-5">
                    <li className="mb-2">
                      Been programming since I was 13, starting with Lua.
                    </li>

                    <li className="mb-2">
                      I started learning programming completely on my own before going to college.
                    </li>

                    <li className="mb-2">
                      I have years of general experience working with computers, systems, and software.
                    </li>
                  </ul>

                </div>
                  </div>

                </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function Contact() {
  return (
  <div className="container-fluid mt-3">
    <div className="bg-dark text-light p-3 rounded-4 shadow d-flex justify-content-center gap-4">
      <a href="mailto:dot42mail@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/dotun-obasa/">LinkedIn</a>
      <a href="https://github.com/placeholdername0">GitHub</a>
    </div>
  </div>
  );
}

export default function Hello() {

const [theme, setTheme] = useState("dark");
const [isOpen, setIsOpen] = useState(false);
const toggleSidebar = () => setIsOpen(!isOpen);

const cycleTheme = () => {
  setTheme((prev) => {
    if (prev === "light") return "dark";
    if (prev === "dark") return "black";
    return "light";
  });
};

  return (
    <div className={`app theme-${theme}`}>
        {/*Navigation setup, stickied topbar*/}
          <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3 sticky-top"> {/*sticky top to make it 
          stay at the top as you scroll*/}
            <span className="navbar-brand">My Portfolio</span>
            <div className="d-flex gap-3 align-items-center">
              <Link className="text-light text-decoration-none" to="/">About</Link>
              <Link className="text-light text-decoration-none" to="/skills">Skills</Link>
              <Link className="text-light text-decoration-none" to="/projects">Projects</Link>

              {/*Hamburger menu*/}
              <button className="btn btn-outline-light" onClick={toggleSidebar}>
                <FaBars />
              </button>
            </div>
          </nav>

          {/* Expandable menu */}
          <div className={`sidebar ${isOpen ? "active" : ""}`}>
            <div className="p-3 text-light">
              <h5>Menu</h5>

              <button className="btn btn-primary w-100 mt-3" onClick={cycleTheme}>
                Change Theme
              </button>

              <button className="btn btn-secondary w-100 mt-2" onClick={toggleSidebar}>
                Close
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className={`sidebar-overlay ${isOpen ? "active" : ""}`}
            onClick={toggleSidebar}
          ></div>


          {/*Routing*/}
          <div style={{ paddingTop: "30px" }}>

            {/* Contact section moved above so it's always in middle */}
            <div className="container mt-3">
              <Contact />
            </div>

            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              
            </Routes>
            </div>
    </div>
    );
}


