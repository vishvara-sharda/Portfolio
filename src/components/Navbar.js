import "./Navbar.css"

//function and const difference ? 
const Navbar = ()=> {
    //function define 
    return(
        <>
        <nav className="navbar" >
            <div className = "logo">
                <h1>VG</h1>

            </div>
            <div>
                <ul className = "items" >{/*  tag to make unordered list  */}
                    <li>Home</li>
                    <li>About me </li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>

                </ul>
            </div>
            </nav>{/*  used to make navbar  */}
        </> //not count because component has a container 

    )
}
export default Navbar;