import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import gameproj from "./assets/gameproj.png";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";


function Skills() {
  return (
    <div className="container mt-5">
      <div className="p-4 bg-dark rounded-4 shadow"> {/*to make the boxes more rounded*/}
        <div className="text-light">
          <h1>Skills: </h1>
            <ul>
              <li>Graphic Design</li>
              <li>Test-Driven Development</li>
              <li>Python</li>
              <li>C</li>
              <li>C#</li>
              <li>Lua</li>
              <li>Java</li>
              <li>HTML</li>
              <li>React</li>
              <li>Typescript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>PHP</li>
              <li>MariaDB</li>
              <li>Docker</li>
              <li>Visual Studio</li>
              <li>Notepad++</li>
              <li>Github</li>
              <li>Microsoft Office</li>
              <li>Blender</li>
              <li>Krita</li>
              <li>Microsoft Excel</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Scikit-learn</li>
              <li>Distributed Systems</li>
              <li>Data Modelling</li>
              <li>Feature Engineering</li>
              <li>Agile/Scrum</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </div>
      </div>
  )
}


function Projects() {
  return (
    <div className="container mt-5">
      <div className="p-4 bg-dark rounded-4 shadow"> {/*to make the boxes more rounded*/}
        <div className="text-light">
          <h1>Projects: </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={gameproj} className="img-fluid rounded shadow" />
            <div className="text-light"><h5>thesis game</h5></div>
          </div>
      </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={proj1} className="img-fluid rounded shadow" />
            <div className="text-light"><h5>Graphic design project</h5></div>
          </div>
      </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={proj2} className="img-fluid rounded shadow" />
            <div className="text-light"><h5></h5>Graphic design project</div>
          </div>
      </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={proj3} className="img-fluid rounded shadow" />
            <div className="text-light"><h5>Graphic design project</h5></div>
          </div>
      </div>
      </div>

  )
}


function AboutMe() {
  return ( 
    <div className="container mt-5">
      <div className="p-4 bg-dark rounded-4 shadow"> {/*to make the boxes more rounded*/}
        <div className="text-light">
          <h2>About Me</h2>
        <p>I do coding, 3D modelling, 2D art, graphic design, video editing. I am available to work for freelance stuff. I plan to work on music as well eventually

        </p>
        </div>
    </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="text-light">
      {" "}
      {/*target to open it in a new tab. No referrer for security purposes*/}
      <a href="mailto:dot42mail@gmail.com" target="_blank" rel="noreferrer">
        Email
      </a>
      {" "}
      <a href="https://www.linkedin.com/in/dotun-obasa/" target="_blank" rel="noreferrer">
        Linkedln
      </a>
      {" "}
      <a href="https://github.com/placeholdername0" target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  )
}

export default function Hello() {
  return (
    <>
      {/*Navigation setup*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
          <span className="navbar-brand">My Portfolio</span>
          <div>
            <Link to="/">AboutMe</Link> |{" "}
            <Link to="/skills">Skills</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
          </div>
        </nav>


        {/*Routing*/}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
        <div>
          <section>
            
          </section>

          <section>
            <Contact />
          </section>
          </div>
    </>
  );
}

