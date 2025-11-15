import React, { useState,useEffect } from "react";
import "./styles/index.scss";
// import "./styles/animation.scss";
import { BiCross, BiHeart } from "react-icons/bi";
import useIntersection from "./component/useIntersection";
import {
  BsArrowUpRight,
  BsFacebook,
  BsFillEmojiNeutralFill,
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsMenuButton,
  BsStar,
} from "react-icons/bs";
import { HiHandRaised } from "react-icons/hi2";
import { GrClose, GrUserFemale } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import Form from "./component/form";
import Footer from "./component/footer";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [menubar, setMenubar] = useState(false);
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });
console.log(isVisible)

const menu =()=>{
  setMenubar(!menubar)
}
useEffect(() => {
  if (!menubar) {
    setMenubar(false);
  }
}, [location.pathname,setMenubar]);

 // project lists
 const projects =[
  {project: 'Planify', demo:'https://planiffyy.netlify.app/', repo:'https://github.com/Halima-1/Planify.git' ,
  Image:"/planiffy.png", id:1, 
  description:"Planify is a web-based event management platform built with React, Firebase, and Google Maps API, designed to help users easily create, view, and manage events. Users can RSVP to events,view event locations on a map, and manage their own created events with edit and delete options.",
  technology:['React.js', "Firebase",'SASS','Git & github','Netlify']}, 
  {project: 'AuraMart', demo:'https://aura-mart.netlify.app/', repo:'' ,
  Image:"/mart.png", id:2, 
  description:"Auramart is a stylish and modern e-commerce web application designed for a fun shopping experience. It allows users to browse, search, and shop from various product categories — including furniture, fragrances, groceries, and beauty accessories — all from one sleek interface.",
  technology:['React.js', "Firebase",'SASS','Git & github','Netlify']},
  {project: 'Task pad', demo:'https://lymarh-taskpad.netlify.app/', repo:'https://github.com/Halima-1/auraMart.git' ,
  Image:"/taskpad image.png", id:3, 
  description:"A simple, intuitive, and efficient to-do app designed to help you stay organized and productive every day.",
  technology:['React.js','SASS','Git & github','Netlify']},
  {project: 'Multi step form',
  demo:'https://multii-form.netlify.app/', repo:'' ,
  Image:"/multi-form.png", 
  id:4, 
  description:"A sleek and interactive multi-step form built to enhance user experience with step-by-step navigation, add-ons selection, and dynamic form validation.", 
  technology:['React.js','SASS','Git & github','Netlify']},
  {project: 'Trivia twist',
  demo:'https://trivia-twist.netlify.app/',repo:'' ,
   Image:"/trivia.png", id:5, 
   description:"A fun, interactive quiz app designed to challenge users with multiple-choice questions across various topics. It features a timer,  and scoring system,",
   technology:['HTML5','CSS3', 'Git & github', 'Netlify']},
  {project: 'Product page',
  demo:'https://halima-1.github.io/web3Bridge_product_details/', repo:'' ,
  Image:"/product-details.png",  id:6, 
  description:"A Products Page that displays available products with price and details. Users can add items to cart, and navigate to the cart page.",
  technology:['React.js','SASS','Git & github','Github']},
  // {project: 'ProNet',
  // demo:'https://pro-net.onrender.com/', repo:'' ,
  // Image:"/pronet.png",  id:7, 
  // description:"A LinkedIn-inspired social networking platform built with React, designed to mimic the core features of LinkedIn.",
  // technology:['React.js','SASS','Git & github','Render']},
  // {project: 'Ticket generator',
  // demo:'https://ticket-generator-5aug.onrender.com/',repo:'' , 
  // Image:"/ticket-generator.png",  
  // id:6, description:"This is a linkedIn clone", 
  // technology:['React.js','SASS','Git & github','Render']}
  // {project: 'Color game',
  // demo:'https://colorgame-05k0.onrender.com', repo:'' ,
  // Image:"/color-game.png",  id:7,
  // description:"A fun and interactive color guessing game! The player must click the correct button that matches the displayed color. This game helps improve quick thinking and color recognition skills.", 
  // technology:['React.js','SASS','Git & github','Render']}
]
// localStorage.removeItem('activeProject')
// setting a clicked project to local storage to display it details
// const [activeItems, setActiveItems] = useState(0);
// if(localStorage.getItem('activeProject')
// ){null}
// else{localStorage.setItem('activeProject', JSON.stringify(projects[0]))
// }
// localStorage.setItem('projects', JSON.stringify(projects))
// // project displaying a project is clicked
//   const project = (id) => {
//     if(JSON.parse(localStorage.getItem('activeProject')).id ===id){
//       setHoverProject(!hoverProject)
//     }
//     console.log(id)
//     const activeProject =projects.find(item => item.id ===id)
//     //  projectClick =<p>hello</p>
//      localStorage.setItem('activeProject', JSON.stringify(activeProject))
//     // console.log(projectClick)
//     console.log(activeProject)
//   };
//   // to close project display
//   const closeIcon =()=>{
//     setHoverProject(!hoverProject)

//   }
//   const atvProjectDisplay =JSON.parse(localStorage.getItem('activeProject'))
  return (
    <>
      <header>
        <div>
          <h1>
            <BsStar />
            <BsStar />
            <BsStar />
            {/* <BsStar />
            <BsStar /> */}
             Halima Dahunsi
          </h1>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        {!menubar? <BsMenuButton className="menuIcon" onClick={menu}/> :
        <GrClose className="menuIcon"  onClick={menu}/>}
        <aside style={!menubar? {display: "none"} :{display: "flex"}}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
      </aside>
      </header>
      
      <section className="main">
        <section className="intro" id="about">
          {/* <h1>Welcome!</h1> */}
          <p>
            I am a<b> Frontend Developer</b> skilled in JavaScript, Reactjs,
             and modern CSS frameworks. I specialize in building responsive websites, 
            dynamic interfaces, and interactive applications that bring ideas to life.
             Looking for someone who can turn designs into real, working products? I’d love to help.
            </p>
<div>            <a href="mailto:dahunsiolajumoke18@gmail.com">
            {" "}
            <BsFillEnvelopeFill />
          </a>
          <a href="https://github.com/Halima-1">
            {" "}
            <BsGithub />
          </a>
          <a href="">
            {" "}
            <BsLinkedin />
          </a>
          <a
            className="btn"
            href="https://docs.google.com/document/d/1VEmdD9m2WNQHkEEZldhDPXPwOlGJtoxiwr0hVwucgSM/edit?usp=sharing"
          >
            {" "}
            RESUME
          </a></div>
          {/* <div className="resume">
            <h2>Education/Certification</h2>
            <b>Federal Univaersity</b>
          </div> */}
          <h2 className="skillsH1">Skills</h2>

          <div className="skills">
          <button>React.js</button>
          <button>Javascript</button>
            <button>Nodejs</button>
          <button>Firebase</button>
            <button>HTML5</button>
            <button>CSS3</button>
            <button>Boostrap</button>
            <button>CLI</button>
            <button>Git&Github</button>
          </div>
        </section>
        <section className="project-display" id="project">
          <h1>Recent projects</h1>
                        { projects.map(item =>(

          <div key={item.id}  ref={ref} className={`project bounce-up`}>
            <div className="itemDisplay" >
              <img src={item.Image} alt={item.project} />
             </div>
             <div className="project-text">
             <h2 style={{margin:0}}>{item.project}</h2>
             <p>
              {item.description}
             </p>
             <a href={item.demo} >Live demo <BsArrowUpRight/></a>
             <a href={item.repo}>Repo</a>
             <div className="technology">
                { item.technology.map((item,index) =>(
                               <span key={index}>{item}</span>
                   ))} 
             </div>
           </div>
          </div>
           ))}
        </section>
      </section>
      <h2 className="contactt">Contact</h2>
      <Form />
      <Footer />
    </>
  );
}


export default Home;
