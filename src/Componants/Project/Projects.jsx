import React from "react";
// import employeeMSImage from "../assets/employee-ms.png";
import mycalculator from "../../assets/cal.jpg";
import RoyalAirplanes from "../../assets/royal.jpg";
import GYM from "../../assets/gym.jpg";
import crud from "../../assets/CRUD.jpg";
import cars from "../../assets/cars.jpg";
import opodmusic from "../../assets/opodmusic.png";
// import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "WebSite GYM",
    technologies: "Html,Css,Js",
    image: GYM,
    github: "https://mohamedfirasalfarra.github.io/GyM/",
  },
  {
    id: 2,
    name: "WebSite RoyalAirplanes",
    technologies: "Html,Css,Js,Php,Sql",
    image: RoyalAirplanes,
    github: "https://mohamedfirasalfarra.github.io/Royal_Airplanes/",
  },
  {
    id: 3,
    name: "CRUD",
    technologies: "Html,Css,Js",
    image: crud,
    github: "https://mohamedfirasalfarra.github.io/C_R_U_D/",
  },
  {
    id: 4,
    name: "My Calculator",
    technologies: "React.js",
    image: mycalculator,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 5,
    name: "My Calculator",
    technologies: "Html,Css,Js",
    image: mycalculator,
    github: "https://mohamedfirasalfarra.github.io/MyCalculator/",
  },
  {
    id: 6,
    name: "WebSite RoyalDriving",
    technologies: "Html,Css,Js,Bootstrap",
    image: cars,
    github: "https://mohamedfirasalfarra.github.io/Royal_Driving/",
  },
  {
    id: 6,
    name: "WebSite OpodMusic",
    technologies: "Html,Css,Js",
    image: opodmusic,
    github: "https://mohamedfirasalfarra.github.io/OpodMusic/",
  },

];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className=" container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text
         bg-gradient-to-r from-green-400 to-blue-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
