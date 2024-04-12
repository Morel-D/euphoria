import arrowLeft from "../../assets/logo/arrowLeft.png";
import stars from "../../assets/logo/Star3.png";
import SMS from "../../assets/logo/sms.png";
import rightGrey from "../../assets/logo/rightArrowCart.png";
import cart from "../../assets/logo/cart.png";
import { colors } from "../tools/colors";
import { sectionOne, sectionThree } from "../widgets/productDetailWidget";
import { HighLine } from "../widgets/text";
import Heart from "../../assets/logo/heart.png";


const ProductDetails = () => {
    return ( 
        <section className="product-details">
            <section className="section-one container">
                <div className="row">
                    <div className="col">hello</div>
                    <div className="col mt-5">
                        <div className=""><label className="label-txt" style={{fontSize: "18px"}}>Shop <img src={arrowLeft} className="mx-2 img-fluid" /> Women <img src={arrowLeft} className="mx-2 img-fluid" /> Top</label></div>
                        <div className="mt-4">
                            <h6 className="title mt-2" style={{fontSize: "32px", lineHeight: "47.6px"}}>Raven Hoodie With <br /> Black colored Design</h6>
                        </div>
                        <div className="row mt-4">
                            <div className="col col-3" style={{width: "158px"}}>
                                <label className="">
                                    <img src={stars} className="img-fluid"/>
                                    <img src={stars} className="img-fluid mx-2"/>
                                    <img src={stars} className="img-fluid"/>
                                    <img src={stars} className="img-fluid mx-2"/>
                                    <img src={stars} className="img-fluid"/>
                                </label>
                            </div>
                            <div className="col col-1 mt-1">
                                <label>3.5</label>
                            </div>
                            <div className="col mt-1 text-start"   style={{width: "40px"}}>
                                <a href="#" style={{color: `${colors.accentGrey}`}}><label ><img src={SMS} className="img-fluid mx-2"/> 120 comment</label></a>
                            </div>
                        </div>
                        <div className="mt-4"><label className="label-txt" style={{fontSize: "18px"}}><label className="label"><b>Select Size</b></label> <span className="mx-2"></span> Size Guide <img src={rightGrey} className="mx-2 img-fluid" /> </label></div>

                        <div className="row mt-2">
                            <div className="col col-1">
                                <div className="" style={{backgroundColor: "transparent", borderStyle: "solid", borderColor: `${colors.accentGrey}`, textAlign: "center", paddingTop: "8px", borderWidth:"2px", width: "38px", height: "38px", borderRadius: "12px"}}>L</div>
                            </div>
                            <div className="col col-1">
                                <div className="" style={{backgroundColor: "transparent", borderStyle: "solid", borderColor: `${colors.accentGrey}`, textAlign: "center", paddingTop: "8px", borderWidth:"2px", width: "38px", height: "38px", borderRadius: "12px"}}>S</div>
                            </div>
                            <div className="col col-1">
                            <div className="" style={{backgroundColor: "transparent", borderStyle: "solid", borderColor: `${colors.accentGrey}`, textAlign: "center", paddingTop: "8px", borderWidth:"2px", width: "38px", height: "38px", borderRadius: "12px"}}>M</div>
                            </div>
                            <div className="col col-1">
                                <div className="" style={{backgroundColor: `${colors.black}`, textAlign: "center", paddingTop: "8px", borderWidth:"2px", width: "38px", height: "38px", borderRadius: "12px", color: `${colors.white}`}}>L</div>
                            </div>
                            <div className="col col-1">
                                <div className="" style={{backgroundColor: "transparent", borderStyle: "solid", borderColor: `${colors.accentGrey}`, textAlign: "center", paddingTop: "8px", borderWidth:"2px", width: "38px", height: "38px", borderRadius: "12px"}}>XL</div>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <label className="label"><b>Colours Available </b></label>
                            <div className="row">
                                <div className="col col-1" style={{width: "40px"}}>
                                    <div className="" style={{backgroundColor: `${colors.black}`, borderStyle: "none", width: "22px", height: "22px", borderRadius: "150px"}}></div>
                                </div>
                                <div className="col col-1" style={{width: "40px"}}>
                                    <div className="" style={{backgroundColor: `${colors.filterYellow}`, borderStyle: "none", width: "22px", height: "22px", borderRadius: "150px"}}></div>
                                </div>
                                <div className="col col-1" style={{width: "40px"}}>
                                    <div className="" style={{backgroundColor: `${colors.filterPink}`, borderStyle: "none", width: "22px", height: "22px", borderRadius: "150px"}}></div>
                                </div>
                                <div className="col col-1">
                                    <div className="" style={{backgroundColor: "#9C1F35", borderStyle: "none", width: "22px", height: "22px", borderRadius: "150px"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col col-4"  style={{width: "190px"}}>
                                <button className="btn btn-purple py-2 px-4"><img src={cart} className="img-fluid mx-2" /> Add to cart</button>
                            </div>
                            <div className="col col-4">
                                <button className="btn btn-light py-2 px-5">$63.00</button>
                            </div>
                        </div>

                        <hr />

                        <div className="row row-cols-2 row-cols-lg-2 g-lg-3 mt-4 mb-4">
                            {
                                sectionOne.map((one) =>
                            (
                                <div className="col" key={one.key}>
                                    <div className="row">
                                        <div className="col col-2"><img src={one.image}  /></div>
                                        <div className="col"><label className="label mt-2 mx-3">{one.content}</label></div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>


                    </div>
                </div>
            </section>


            <section className="section-two" style={{paddingTop: "100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <HighLine children="Product Description" />

                            <div className="description py-4">
                                <div className="row">
                                    <div className="col col-2"><a href=""><label className="label">Description</label> <div className="small-line"></div></a></div>
                                    <div className="col col-4 text-center"><a href="#"><label className="label" style={{color: `${colors.grey}`}}>User comments <label className="small-box mx-2"  style={{backgroundColor: `${colors.primary}`}}>21</label></label></a></div>
                                    <div className="col col-4">
                                    <a href=""><label className="label" style={{color: `${colors.grey}`}}>Question & Answer <label className="small-box mx-2 text-center"  style={{backgroundColor: `${colors.black}`}}>4</label></label></a></div>
                                </div>

                                <div className="mt-3">
                                <label className="label" style={{color: `${colors.grey}`}}>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck.
                                 Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</label>
                                </div>
                            </div>

                            <div className="box-borderless py-5">
                                <div className="row">
                                    <div className="col mx-5">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Fabric</label><br />
                                        <label className="label">Bio-washed Cotton</label>
                                    </div>
                                    <div className="col">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Pattern</label><br />
                                        <label className="label">Printed</label>
                                    </div>
                                    <div className="col">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Fit</label><br />
                                        <label className="label">Regular-fit</label>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col mx-5">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Neck</label><br />
                                        <label className="label">Round Neck</label>
                                    </div>
                                    <div className="col">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Sleeve</label><br />
                                        <label className="label">Half-sleeves</label>
                                    </div>
                                    <div className="col">
                                        <label className="label" style={{color: `${colors.accentGrey}`, fontSize: "16px"}}>Style</label><br />
                                        <label className="label">Casual Wear</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col">2</div>
                    </div>
                </div>
            </section>

            <section className="section-three" style={{paddingTop: "100px", paddingBottom: "50px"}}>
                <div className="container">
                    <HighLine children="Similar Products" />
                    <div className="row row-cols-2 g-lg-3 row-cols-lg-4 mt-4">
                    {
                                            sectionThree.map((three) => (
                                                <div className="col" key={three.id}>
                                                    <div className="" style={{backgroundImage: `url(${three.bgImage})`, width: "282px", height: "370px"}}>
                                                        <div className="row p-4">
                                                            <div className="col text-end"><a href="#"><img src={Heart} className="img-fluid" /></a></div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col">
                                                            <p className="card-labels-black" style={{fontSize: "15px", lineHeight: "0.01px"}}>{three.title}</p>
                                                            <p className="card-labels-black"><a href="#" className="" style={{textDecoration: "none", lineHeight:"0.01px", fontSize: "13px", color: `${colors.grey}`}}>{three.brand}</a></p>

                                                        </div>
                                                        <div className="col mx-2 col-4 text-start"><a href="#"  style={{color: `${colors.black}`, textDecoration: "none", backgroundColor: `${colors.light}`, borderRadius: "8px", padding: "10px", width: "82.31px", height: "36.58px"}}><b>{three.price}</b></a></div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                    </div>
                </div>
            </section>

        </section>
     );
}
 
export default ProductDetails;