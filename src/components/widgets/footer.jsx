import facebook from "../../assets/logo/facebook.png";
import instagram from "../../assets/logo/instagram.png";
import twitter from "../../assets/logo/black_twitter.png";
import linkedIn from "../../assets/logo/linkedIn.png";
import appelPlay from "../../assets/logo/apple.png";
import playStore from "../../assets/logo/play.png";
import downArrow from "../../assets/logo/arrow.png";


const Footer = () => {
    return ( 
        <section className="footerComponents">
            <div className="links">
                <div className="row">
                    <div className="col col-2">
                        <h3 className="footerTitle">Need Help</h3>
                        <a href="#" className="footerLabels">Contact Us</a><br />
                        <a href="#" className="footerLabels">Track Order</a><br />
                        <a href="#" className="footerLabels">Returns & Refunds</a><br />
                        <a href="#" className="footerLabels">FAQ's</a><br />
                        <a href="#" className="footerLabels">Career</a>
                    </div>

                    <div className="col col-2" style={{paddingLeft: "80px"}}>
                        <h3 className="footerTitle">Company</h3>
                        <a href="#" className="footerLabels">About Us</a><br />
                        <a href="#" className="footerLabels">euphoria Blog</a><br />
                        <a href="#" className="footerLabels">euphoriastan</a><br />
                        <a href="#" className="footerLabels">Collaboration</a><br />
                        <a href="#" className="footerLabels">Media</a>
                    </div>

                    <div className="col col-2" style={{paddingLeft: "80px"}}>
                        <h3 className="footerTitle">More Info</h3>
                        <a href="#" className="footerLabels">Term and Conditions</a><br />
                        <a href="#" className="footerLabels">Privacy Policy</a><br />
                        <a href="#" className="footerLabels">Shipping Policy</a><br />
                        <a href="#" className="footerLabels">Collaboration</a><br />
                        <a href="#" className="footerLabels">Sitemap</a>
                    </div>

                    <div className="col col-4"  style={{paddingLeft: "80px"}}>
                        <h3 className="footerTitle">Location</h3>
                        <a href="#" className="footerLabels">support@euphoria.in</a><br />
                        <a href="#" className="footerLabels">Eklingpura Chouraha, Ahmedabad Main Road</a><br />
                        <a href="#" className="footerLabels">Shipping Policy</a><br />
                        <a href="#" className="footerLabels">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a><br />

                    </div>
                </div>
            </div>

            <div className="medias">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-white"><img src={facebook} /></button>
                        <button className="btn btn-white mx-2" id="insta"><img src={instagram} /></button>
                        <button className="btn btn-white" id="twit"><img src={twitter} /></button>
                        <button className="btn btn-white mx-2"><img src={linkedIn} /></button>
                    </div>
                    <div className="col" style={{position: "relative", bottom: "74px", left: "60px"}}>
                        <h3 className="footerTitle">Download The App</h3>
                        <div className="row">
                            <div className="col col-4">
                                <img src={playStore} className="img-fluid" />
                            </div>
                            <div className="col text-start">
                                <img src={appelPlay} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories">
                <div className="">
                    <hr />
                        <div className="row py-1 subCat">
                            <div className="col"><h3 className="footerTitle">Popular Categories</h3></div>
                            <div className="col text-end"><a href=""><img src={downArrow} className="mt-4" /></a></div>
                        </div>
                    <hr />
                </div>
            </div>
            <div className="copyrights text-center">
                <h5 className="footerLabels">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h5>
            </div>
        </section>
     );
}
 
export default Footer;