import { Link } from "react-router-dom";
import arrowLeft from "../../assets/logo/arrowLeft.png";
import { colors } from "../tools/colors";
import { sectionOne, sectionTwo, profileScetion } from "../widgets/contact";
import { HighLine } from "../widgets/text";

const Contact = () => {

    const addressDisplay = Array(4).fill(sectionTwo).flat().map(() => ({ ...sectionTwo[0] }));

    return ( 
        <section className="contact-section py-5">
            <section className="container divided-section">
                <div className=""><label className="label-txt" style={{fontSize: "18px"}}>Home <img src={arrowLeft} className="mx-2 img-fluid" /> My Account <img src={arrowLeft} className="mx-2 img-fluid" /> <label className="label">Personal Info</label></label></div>
                <div className="row mt-5">
                    <div className="col col-4">
                        <HighLine children="Hello Jhanvi" />
                        <label className="card-labels-black mt-2" style={{fontSize: "14px", color: `${colors.grey}`}}>Welcome to your Account</label>
                        <div className="mt-4">
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item mx-3">
                                    {
                                        profileScetion.map((profile) =>
                                    (
                                    <a href={profile.link} className="" key={profile.id}>
                                        <div className="row py-3"  id={profile.id === 3 ? "selectedNav" : ""}>
                                            <div className="col col-2 text-end" id="iconCol"><img src={profile.icon} className="img-fluid" /></div>
                                            <div className="col"><label className="label-txt" style={{fontSize: "18px"}}>{profile.info}</label></div>
                                        </div>
                                    </a>
                                    ))
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <section className="section-one">
                            <h6 className="title" style={{fontSize: "28px"}}>My Info</h6>
                            <h6 className="title mt-3" style={{fontSize: "22px"}}>Contact Details</h6>
                            <div className="info py-4">
                                {
                                    sectionOne.map((one) =>
                                (
                                    <div className="row mt-3" key={one.id}>
                                        <div className="col">
                                            <p className="label-txt" style={{fontSize: "18px"}}>{one.info}</p>
                                            <p className="label" style={{fontSize: "18px"}}><b>{one.data}</b></p>
                                        </div>
                                        <div className="col text-end mt-4">
                                            <a href="#" className="label"  style={{textDecoration: "none"}}><b>Change</b></a>
                                        </div>
                                        <hr className={one.id === 4 ? "d-none" : null} />
                                    </div>
                                ))
                                }
                            </div>
                        </section>

                        <section className="section-two">
                            <h6 className="title mt-3" style={{fontSize: "22px"}}>Address</h6>

                            <div className="info py-5">
                               <div className="row row-cols-2 row-cols-lg-2 g-lg-3">
                                {
                                        addressDisplay.map((address, index) =>
                                    (
                                        <div  key={address.id}>
                                            <div className="box">
                                                <p className="label"><b>{address.name}</b></p>
                                                <p className="label-txt"style={{fontSize: "18px"}}>{address.number}</p>

                                                <p className="label-txt mt-3"style={{fontSize: "18px"}}>{address.address}</p>
                                                <div className="row mt-4">
                                                    <div className="col">
                                                        <button className="btn btn-outline-secondary">{index === 0 || index === 1 ? "Home" : index === 2 ? "Office" : "Home2" }</button>
                                                    </div>
                                                    <div className={index === 0 || index === 1 ? "col col-9" : "d-none"}>
                                                        <button className="btn btn-outline-secondary">{index === 1 ? "Default billing address" : "Default shipping address"}</button>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col col-3" id="divider">
                                                        <a href="#" className="label" style={{fontSize: "16px", textDecoration: "none"}}><b>Remove</b></a>
                                                    </div>
                                                    <div className="col-2"  id={index === 2 || index === 3 ? "divider" : ""}>
                                                        <a href="#" className="label" style={{fontSize: "16px", textDecoration: "none"}}><b>Edit</b></a>
                                                    </div>
                                                    <div className={index === 2 || index === 3 ? "col col-6" : "d-none"}>
                                                        <a href="#" className="label" style={{fontSize: "16px", textDecoration: "none"}}><b>Set as default</b></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) )
                                    }
                               </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
     );
}
 
export default Contact;