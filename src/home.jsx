import React, { useState,useEffect } from "react";
import "./styles/index.scss";
import { BiCross, BiHeart } from "react-icons/bi";
import {
  BsFacebook,
  BsFillEmojiNeutralFill,
  BsFillEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiHandRaised } from "react-icons/hi2";
import { GrUserFemale } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

function Home() {
  const [hoverProject, setHoverProject] = useState(false);
 // project()
 const projects =[
  {project: 'Task pad', id:1, description:"this is a to do app", technology:'React.js, SAAS, Git and github, deployed on Netlify'},
  {project: 'Multi step form', id:2, description:"This is a multi step form", technology:'React.js, SAAS, Git and github, deployed on Netlify'},
  {project: 'Quiz app', id:3, description:"This is a Quiz app",technology:'HTML5, CSS3, Git and github, deployed on Netlify'},
  {project: 'ProNet', id:4, description:"This is a linkedIn clone", technology:'React.js, SAAS, Git and github, deployed on Render'}
]
// localStorage.removeItem('activeProject')
const [activeItems, setActiveItems] = useState(0);
if(localStorage.getItem('activeProject')
){null}
else{localStorage.setItem('activeProject', JSON.stringify(projects[0]))
}
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
    // const style = JSON.parse(localStorage.getItem('activeProject')).id ===id? {display:""}
    // window.location.href ='/'
  };
  const closeIcon =()=>{
    setHoverProject(!hoverProject)

  }
  return (
    <>
      {/* <h1>My portfolio</h1> */}
      <header>
        <div>
          <h1>
            <HiHandRaised />
            {/* <GrUserFemale /> */}
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
          <h1>Welcome!</h1>
          <p>
            Hi, I am Dahunsi Halima Olajumoke, a frontend web developer based in
            Ibadan, Oyo State, Nigeria.
          </p>
          <p>
            I am passionate about building a responsive and fascinating web
            interface with high scalablity and facilitating great user
            experience.
          </p>

          <p>
            Do you need a capable and smart frontend developer to join your
            team? I will be glad to contribute to the growth of your team too.
          </p>

          <a
            className="btn"
            href="https://docs.google.com/document/d/1VEmdD9m2WNQHkEEZldhDPXPwOlGJtoxiwr0hVwucgSM/edit?usp=sharing"
          >
            {" "}
            RESUME
          </a>
        </section>
        <section>
          <h1>My projects</h1>
          <div className="project">
          <div className="shape"></div>
          {
            localStorage.getItem('activeProject')? <>
            <div style={hoverProject? {display:'block'} : {display:'none'}} >
            <AiOutlineClose onClick={closeIcon}/>
            <a href="https://shelta.onrender.com/">
              <img src="src\assets\shelta.png" alt="" />
             </a>{" "}
             <p>{JSON.parse(localStorage.getItem('activeProject')).project}</p>
             <p>
              {JSON.parse(localStorage.getItem('activeProject')).description}
             </p>
             <p>
              {'Technology used: ' +JSON.parse(localStorage.getItem('activeProject')).technology}
             </p>
           </div>
            </> :null
          }
          {/* <div>{projectClick}</div> */}
          <div className="projectList">
              { projects.map(item =>(
              <p data-id={item.id} key={item.id} onClick={() =>project (item.id)}>{item.project}</p>
              ))}
          </div>

             
          </div>
        </section>
      </section>
      <footer>
        <nav></nav>
        <div>
          <p>
            2024 Halima
            {/* <a href="mailto:dahunsiolajumoke18@gmail.com">
              dahunsiolajumoke18@gmail.com
            </a> */}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
