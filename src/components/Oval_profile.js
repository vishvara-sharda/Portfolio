import "./Oval_profile.css"
import ribbon from "./images/Womens Bow Tie.svg"
import tulip from "./images/tulip.svg"
const Oval_profile =() => {
    return(
        <>
        <div className="oval_profile_section">
        <div className="oval">
        <img src= "\download.jpeg">
        </img>
            
        </div>
        <div className="aboutme">
            <p>About Me</p>
            <img src={ribbon}></img>
        
        </div>
        <div className="tulip">
            <img src={tulip}></img>
        </div>
        </div>
        
        </>
    )
}
export default Oval_profile;