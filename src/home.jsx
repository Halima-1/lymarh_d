import React, { useState } from "react";
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
  const [hoverProject1, setHoverProject1] = useState(false);
  const [hoverProject2, setHoverProject2] = useState(false);
  const [hoverProject3, setHoverProject3] = useState(false);
  const [hoverProject4, setHoverProject4] = useState(false);

  const project1 = () => {
    setHoverProject1(!hoverProject1);
    console.log(hoverProject1);
  };
  const project2 = () => {
    setHoverProject2(!hoverProject2);
    console.log(hoverProject2);
  };
  const project3 = () => {
    setHoverProject3(!hoverProject3);
    console.log(hoverProject3);
  };
  const project4 = () => {
    setHoverProject4(!hoverProject4);
    console.log(hoverProject4);
  };
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
      <main>
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
          <div className="shape"></div>
          <div className="project">
            <div>
              <p onClick={project1}>Shelta</p>
              {hoverProject1 ? (
                <div>
                  <AiOutlineClose onClick={project1} />
                  <a href="https://shelta.onrender.com/">
                    <img src="src\assets\shelta.png" alt="" />
                  </a>{" "}
                  <p>
                    Shelta is a web app built to help users rent apartments
                    online with ease and connect agents, landlords an d tenants
                    from their comfort zones. <br /> <br />
                    Technologies used: Javascript, React.js, SASS for styling,
                    Git & Github for version control, deployed on render
                  </p>
                </div>
              ) : null}
            </div>
            <div>
              <p onClick={project2}>FabricCity</p>
              {hoverProject2 ? (
                <div>
                  <AiOutlineClose onClick={project2} />
                  <a href="https://shelta.onrender.com/">
                    <img src="src\assets\shelta.png" alt="" />
                  </a>{" "}
                  <p>
                    FabricCity is an online shopping web app built to help users
                    purchase varieties of fabrics with ease, with a very nice &
                    friendly user interface <br /> <br />
                    Technologies used: Javascript, React.js, SASS for styling,
                    Git & Github for version control, deployed on render
                  </p>
                </div>
              ) : null}{" "}
            </div>
            <div>
              <p onClick={project3}>E-Library</p>
              {hoverProject3 ? (
                <div>
                  <AiOutlineClose onClick={project3} />
                  <a href="https://shelta.onrender.com/">
                    <img src="src\assets\shelta.png" alt="" />
                  </a>{" "}
                  <p>
                    This web app was built just as a prototype to test how
                    e-library works, any books can be deleted or added to the
                    list of books <br /> <br />
                    Technologies used:HTML, CSS, Javascript,Browser Local
                    storage Git & Github for version control, deployed on Github
                  </p>
                </div>
              ) : null}{" "}
            </div>
            <div>
              <p onClick={project4}>Lottery</p>
              {hoverProject4 ? (
                <div>
                  <AiOutlineClose onClick={project4} />
                  <a href="https://halima-1.github.io/lottery/">
                    <img src="src\assets\shelta.png" alt="" />
                  </a>{" "}
                  <p>
                    This web app is a lottery game built for fun and for testing
                    array datas manipulation skill, through comparing user's
                    entries with the random numbers generated at every click.{" "}
                    <br /> <br />
                    Technologies used:HTML, CSS, Javascript, Git & Github for
                    version control, deployed on Github.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
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
