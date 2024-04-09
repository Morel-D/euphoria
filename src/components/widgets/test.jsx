import logo from "../../assets/logo/Logo.png"
import { HeaderTextFeild } from "./textFeilds";
import { PrimaryBtn, SecondaryBtn } from "./buttons";

const fontStyle = 
{
    
}

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg" id="navBar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} style={{height: "45px", width: "91.6px"}}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarLarge">
                        <div className="collapse navbar-collapse">
                            <div className="searchbar"  style={{paddingRight: "163px"}}>
                                <HeaderTextFeild />
                            </div>
                            <div className="d-flex" role="search">
                                <div className="dropdown" style={{paddingRight: "60px"}}>
                                    <a className="nav-link dropdown-toggle mt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "18px", color: "#333333", lineHeight: "21.6px"}}>
                                        English (united States)
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">English (united States)</a></li>
                                        <li><a className="dropdown-item" href="#">French (French)</a></li>
                                    </ul>

                                </div>
                                <div><PrimaryBtn children="Login" /> </div>      
                                <div style={{paddingLeft: "29px"}}><SecondaryBtn children="Sign Up" /></div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </nav>
     );
}
 
export default Header;