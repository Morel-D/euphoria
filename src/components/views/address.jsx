import arrowLeft from "../../assets/logo/arrowLeft.png";
import { colors } from "../tools/colors";
import { profileScetion } from "../widgets/contact";
import { HighLine } from "../widgets/text";
import { CheckBoxTextFeild, PrimaryTextFeild, TextAreaFeild } from "../widgets/textFeilds";

const Address = () => {
    return ( 
        <section className="address py-5">
            <section className="container divided-section">
                    <div className=""><label className="label-txt" style={{fontSize: "18px"}}><a href="/" className="link-tag">Home</a> <img src={arrowLeft} className="mx-2 img-fluid" /> My Account <img src={arrowLeft} className="mx-2 img-fluid" /> <label className="label">Delivery Addressùm</label></label></div>
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
                        <section className="form-section">
                            <h6 className="title" style={{fontSize: "28px"}}>My Info</h6>
                            <h6 className="title mt-3" style={{fontSize: "22px"}}>Add Address</h6>

                            <div className="info py-4">
                                <div className="row row-cols-2 row-cols-lg-2 g-4">
                                    <div className="col">
                                        <PrimaryTextFeild label="First Name*" placeholder="First Name" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Last Name*" placeholder="Last Name" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Country / Region*" placeholder="Country / Region" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Company Name" placeholder="Company (optional)" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Street Address*" placeholder="House number and street name" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Apt, suite, unit" placeholder="apartment, suite, unit, etc. (optional)" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="City" placeholder="Town / City" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="State*" placeholder="State" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Phone*" placeholder="Phone" />
                                    </div>
                                    <div className="col">
                                        <PrimaryTextFeild label="Postal Code*" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className="col mt-4">
                                    <TextAreaFeild label="Delivery Instruction" placeholder="Delivery Instruction" />
                                </div>

                                <div className="sumbission">
                                        <div className="row mt-4">
                                            <div className="col col-1 mt-1" style={{width: "20px"}}><CheckBoxTextFeild /></div>
                                            <div className="col"><label className="label">Set as default shipping address</label></div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col col-1 mt-1" style={{width: "20px"}}><CheckBoxTextFeild /></div>
                                            <div className="col"><label className="label">Set as default shipping address</label></div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col col-1">
                                                <button className="btn px-5 btn-purple">Save</button>
                                            </div>
                                            <div className="col mx-5 px-5">
                                                <button className="btn px-5 btn-grey">Cancel</button>
                                            </div>
                                        </div>
                                </div>


                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
     );
}
 
export default Address;