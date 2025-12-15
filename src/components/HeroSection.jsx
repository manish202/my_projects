import { IoLogoGithub } from "react-icons/io5";
import { FaCodepen } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
const HeroSection = () => {
    return (
        <section id="home" className="d-flex">
            <div className="d-flex container hero">
                <div className="profile-pic">
                    <div className="round">
                        <span>
                            <img src="images/manish-prajapati.jpg" alt="manish prajapati image" />
                        </span>
                    </div>
                </div>
                <div className="profile-info">
                    <h1>Hello! I'm manish prajapati, professional full-stack developer</h1>
                    <div className="social">
                        <a target="_blank" href="https://github.com/manish202"><IoLogoGithub /></a>
                        <a target="_blank" href="https://codepen.io/manish202"><FaCodepen /></a>
                        <a target="_blank" href="https://in.linkedin.com/in/manish-prajapati-640b061b6"><FaLinkedinIn /></a>
                        <a href="mailto:mp94760@gmail.com"><MdAlternateEmail /></a>
                        <a href="https://www.upwork.com/freelancers/~017561d1f9ce0508fc"><FaUpwork /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;