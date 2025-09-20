import React, { useState,useEffect } from "react";
import "./styles/index.scss";
import { BiCross, BiHeart } from "react-icons/bi";
import {
  BsFacebook,
  BsFillEmojiNeutralFill,
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsStar,
} from "react-icons/bs";
import { HiHandRaised } from "react-icons/hi2";
import { GrUserFemale } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

function Home() {
  const [hoverProject, setHoverProject] = useState(false);
 // project lists
 const projects =[
  {project: 'Task pad', demo:'https://lymarh-taskpad.netlify.app/', repo:'' ,
  Image:"/taskpad image.png", id:1, 
  description:"A simple, intuitive, and efficient to-do app designed to help you stay organized and productive every day.",
  technology:['React.js','SASS','Git & github','Netlify']},
  {project: 'Multi step form',
  demo:'https://multii-form.netlify.app/', repo:'' ,
  Image:"/multi-form.png", 
  id:2, 
  description:"A sleek and interactive multi-step form built to enhance user experience with step-by-step navigation, add-ons selection, and dynamic form validation.", 
  technology:['React.js','SASS','Git & github','Netlify']},
  {project: 'Quiz app',
  demo:'https://trivia-twist.netlify.app/',repo:'' ,
   Image:"/trivia.png", id:3, 
   description:"A fun, interactive quiz app designed to challenge users with multiple-choice questions across various topics. It features a timer,  and scoring system,",
   technology:['HTML5','CSS3', 'Git & github', 'Netlify']},
  {project: 'Product page',
  demo:'https://halima-1.github.io/web3Bridge_product_details/', repo:'' ,
  Image:"/product-details.png",  id:4, 
  description:"A Products Page that displays available products with price and details. Users can add items to cart, and navigate to the cart page.",
  technology:['React.js','SASS','Git & github','Github']},
  {project: 'ProNet',
  demo:'https://pro-net.onrender.com/', repo:'' ,
  Image:"/pronet.png",  id:5, 
  description:"A LinkedIn-inspired social networking platform built with React, designed to mimic the core features of LinkedIn.",
  technology:['React.js','SASS','Git & github','Render']},
  {project: 'Ticket generator',
  demo:'https://ticket-generator-5aug.onrender.com/',repo:'' , 
  Image:"/ticket-generator.png",  
  id:6, description:"This is a linkedIn clone", 
  technology:['React.js','SASS','Git & github','Render']},
  {project: 'Color game',
  demo:'https://colorgame-05k0.onrender.com', repo:'' ,
  Image:"/color-game.png",  id:7,
  description:"A fun and interactive color guessing game! The player must click the correct button that matches the displayed color. This game helps improve quick thinking and color recognition skills.", 
  technology:['React.js','SASS','Git & github','Render']}
]
// localStorage.removeItem('activeProject')
// setting a clicked project to local storage to display it details
const [activeItems, setActiveItems] = useState(0);
if(localStorage.getItem('activeProject')
){null}
else{localStorage.setItem('activeProject', JSON.stringify(projects[0]))
}
localStorage.setItem('projects', JSON.stringify(projects))
// project displaying a project is clicked
  const project = (id) => {
    if(JSON.parse(localStorage.getItem('activeProject')).id ===id){
      setHoverProject(!hoverProject)
    }
    console.log(id)
    const activeProject =projects.find(item => item.id ===id)
    //  projectClick =<p>hello</p>
     localStorage.setItem('activeProject', JSON.stringify(activeProject))
    // console.log(projectClick)
    console.log(activeProject)
  };
  // to close project display
  const closeIcon =()=>{
    setHoverProject(!hoverProject)

  }
  const atvProjectDisplay =JSON.parse(localStorage.getItem('activeProject'))
  return (
    <>
      <header>
        <div>
          <h1>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />

          </h1>
        </div>
        <nav>
          <a href="mailto:dahunsiolajumoke18@gmail.com">
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
        </nav>
      </header>
      <section className="main">
        <section className="intro">
          {/* <h1>Welcome!</h1> */}
          <p>
            Hi, I am  Halima Dahunsi, Frontend Developer skilled in JavaScript, React,
             and modern CSS frameworks. I specialize in building responsive websites, 
            dynamic interfaces, and interactive applications that bring ideas to life.
            For me, frontend development is more than code — it’s about creating meaningful
             digital experiences.
             Looking for someone who can turn designs into real, working products? I’d love to help.
            </p>
          <a
            className="btn"
            href="https://docs.google.com/document/d/1VEmdD9m2WNQHkEEZldhDPXPwOlGJtoxiwr0hVwucgSM/edit?usp=sharing"
          >
            {" "}
            RESUME
          </a>
        </section>
        <section className="project-display">
          <h1>My recent projects</h1>
                        { projects.map(item =>(

          <div className="project">
            <div className="itemDisplay" >
            {/* <AiOutlineClose onClick={closeIcon}/> */}
            {/* <a href={item.link}> */}
              <img src={item.Image} alt={item.project} />
             {/* </a>{" "} */}
             </div>
             <div className="project-text">
             <h2>{item.project}</h2>
             <p>
              {item.description}
             </p>
             <a href={item.demo}>Live demo</a>
             <a href={item.repo}>Repo</a>

             <div >
                { item.technology.map(item =>(
                               <span>{item}</span>
                   ))} 
             </div>
           </div>
          </div>
           ))}

        </section>
      </section>
      {/* <footer>
        <nav></nav>
        <div>
        <h1>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />

          </h1>
        </div>
      </footer> */}
    </>
  );
}

export default Home;
