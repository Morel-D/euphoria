import logo from "../../assets/logo/Logo.png"
import { HeaderTextFeild } from "./textFeilds";
import { PrimaryBtn, SecondaryBtn } from "./buttons";
import Heart from "../../assets/logo/CH.png";
import BlackCart from "../../assets/logo/CHG.png";
import BlackUser from "../../assets/logo/CU.png";

import WhiteCart from "../../assets/logo/cart.png";
import WhiteUser from "../../assets/logo/UH.png";

import Search from "../../assets/logo/search.png";
import { colors } from "../tools/colors";



const Header = () => {

  const endpoint = window.location.pathname;


    return ( 
        <nav className="navbar navbar-expand-lg" id="navBar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} style={{height: "45px", width: "91.6px"}}/></a>
                    <div className="col-lg-1 col-8 text-end">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="d-none" id="navbarLarge">
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <div className="searchbar"  style={{paddingRight: "210px"}}>
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

                        <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                            <li className="nav-item">
                                <a className={endpoint === '/' ? "header-link-active" : "header-link"} aria-current="page" href="/">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="header-link" aria-current="page" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className={endpoint === '/women' ? "header-link-active" : "header-link"} aria-current="page" href="/women">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="header-link" aria-current="page" href="#">Combos</a>
                            </li>
                            <li className="nav-item">
                                <a className="header-link" aria-current="page" href="#">Joggers</a>
                            </li>

                            </ul>
                        </div>
                        
                        <div className="">
                            <div className="row">
                                <div className="col">
                                    <HeaderTextFeild img={Search} placeholder="Hello" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">

                                            <a className="btn btn-header py-2"><img src={Heart} className="img-fluid" /></a>
                                            <a href="/personal-info" className={endpoint === "/personal-info" || endpoint == "/add-address" ? "btn btn-purple-header py-2 mx-2" : "btn btn-header py-2 mx-2"}><img src={endpoint === "/personal-info" || endpoint == "/add-address" ? WhiteUser : BlackUser} className="img-fluid" /></a>
                                            <a href="/add-to-cart" className={endpoint === "/add-to-cart" || endpoint == "/checkout" ? "btn btn-purple-header py-2" : "btn btn-header py-2"}><img src={endpoint === "/add-to-cart" || endpoint == "/checkout" ? WhiteCart : BlackCart} className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
            </div>
        </nav>
     );
}
 
export default Header;