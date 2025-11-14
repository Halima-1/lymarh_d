import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs"

const Footer =()=>{
    return (
         <>
         <footer>
            <h3>Halima Dahunsi</h3>
            <p>All right reserved</p>
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
         
          </div>
         </footer>
         </>
    )
}

export default Footer