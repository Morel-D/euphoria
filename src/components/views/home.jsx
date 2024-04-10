import { HighLine } from "../widgets/text";
import { colors } from "../tools/colors";
import { homeBanner, firstSection, secondSection, thirdSectionFirstPart, thirdSectionSecondPart, fifthSection, sixthSection} from "../widgets/homeWidgets";
import { OutLineBlackBtn, OutLineWhiteBtn, SpecialBlackBtn, WhiteBtn } from "../widgets/buttons";
import leftArrow from "../../assets/logo/LA.png";
import rightArrow from "../../assets/logo/RA.png";
import carousel from "../../assets/logo/carrousel.png";

import leftGreyArrow from "../../assets/logo/left.png";
import rightGreyArrow from "../../assets/logo/right.png";

import downGreyArrow from "../../assets/logo/downBlackArrow.png";
import downWhiteArrow from "../../assets/logo/downWhiteArrow.png";

import rightGreyLinkArrow from "../../assets/logo/rightGreyArrow.png";


import SIM1 from "../../assets/home/Sl1.png"
import SIM2 from "../../assets/home/Sl2.png"

import B1 from "../../assets/home/B1.png"
import B2 from "../../assets/home/B2.png"
import B3 from "../../assets/home/B3.png"
import B4 from "../../assets/home/B4.png"
import B5 from "../../assets/home/B5.png"




const Home = () => {
    return ( 
        
        <section className="container-fluid home-section">

            <div className="row" style={{backgroundImage: `url(${homeBanner.bgImage})`, paddingTop: "129px", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div className="col col-1 d-flex align-items-center"><a href="#"><img src={leftArrow} className="img-fluid" /></a></div>
                    <div className="col">
                    <p className="txt-white">{homeBanner.firstPath}</p>
                <h1 className="intro-title py-4">{homeBanner.title}</h1>
                <p className="txt-white mb-5">{homeBanner.secondPath}</p>
                <WhiteBtn children={homeBanner.btnTitle} />
                    </div>
                    <div className="col"></div>
                    <div className="col d-flex align-items-center justify-content-end"><a href="#"><img src={rightArrow} className="img-fluid" /></a></div>

                    <div className="text-center" style={{paddingTop: "73px", paddingBottom: "60px"}}><a href=""> <img src={carousel} className="img-fluid" /></a></div>
            </div>         
            <section className="container py-5 px-4 body">
                <section className="first-section" style={{paddingTop: "100px"}}>
                    <div className="row">
                        {firstSection.map((first) => (
                         <div className="col py-2" key={first.id}>
                            <div className="cards py-5" style={{backgroundImage: `url(${first.bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundSize: `${first.bgSize}`, position: "relative", bottom: `${first.bottom}`, height: "355.84px", width: "604.93px", paddingLeft: "30px" }}>
                                <div className="row">
                                    <div className="col col-6">
                                    <p className="card-small-title mt-3">{first.smallTitle}</p>
                                    <h5 className="card-title">{first.title}</h5>
                                    <p className="card-labels mb-5">{first.label}</p>
                                    <a className="card-links" href="">{first.link}</a>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                         </div>   
                        ))

                        }
                    </div>
                </section>

                <section className="second-section"  style={{paddingTop: "99px"}}>
                    <HighLine children="New Arrival" />
                    <div className="row"  style={{paddingTop: "70px"}}>
                        <div className="col col-1 d-flex align-items-center"><a href="#"><img src={leftGreyArrow} className="img-fluid"/></a></div>
                        {
                            secondSection.map((second) =>
                        (
                            <div className="col" key={second.id}>
                                <img src={second.bgImage} className="img-fluid" />
                                <div style={{paddingTop: "32px"}}><p style={{color: `${colors.black}`}}>{second.title}</p></div>
                            </div>
                        ))
                        }
                        <div className="col col-1 d-flex align-items-center justify-content-end"><a href="#"><img src={rightGreyArrow} className="img-fluid"/></a></div>
                    </div>
                </section>

                <section className="third-section"  style={{paddingTop: "100px"}}>
                    <HighLine children="Big Saving Zone" />

                    <div className="row" style={{paddingTop: "70px"}}>
                            {
                                thirdSectionFirstPart.map((thirdFirstPart) =>
                            (
                                    <div className="col" key={thirdFirstPart.id}>
                                        <div className="cards"  style={{backgroundImage: `url(${thirdFirstPart.bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "393px", width: "400px" }}>
                                            <div className="row py-4 px-3">
                                                {thirdFirstPart.id != 1 ? (<div className="col"></div>) : (<div className="d-none"></div>)}

                                                <div className={thirdFirstPart.id === 2 ? "col col-7 text-end px-3" : "col"}>
                                                    {thirdFirstPart.id === 2 ? (<div style={{paddingBottom: "28.8px"}}><SpecialBlackBtn children={thirdFirstPart.notice} /></div>) : null}
                                                    <h4 style={{paddingTop: `${thirdFirstPart.id === 1 || thirdFirstPart.id === 3 ? "30.8px" : "0px"}`}} className={thirdFirstPart.id === 3 ? "card-title-thin-black" : "card-title-thin-white"}>{thirdFirstPart.title}</h4>
                                                    <p style={{paddingTop: "9.47px"}} className={thirdFirstPart.id === 3 ? "cards-small-desc-black" : "cards-small-desc"}>{thirdFirstPart.smallTitle}</p>
                                                    <p style={{paddingTop: "9.9px"}} className={thirdFirstPart.id === 3 ? "card-labels-black" : "card-labels"}>{thirdFirstPart.label}</p>
                                                    <div style={{paddingLeft: "50px"}} className={thirdFirstPart.id === 2 ? "text-end mx-5" : ""}>
                                                        <img src={thirdFirstPart.id === 3 ? downGreyArrow : downWhiteArrow} className="img-fluid" />
                                                    </div>
                                                    <div  style={{paddingTop: "30.84px"}}>
                                                        {thirdFirstPart.id === 3 ? (<OutLineBlackBtn children={thirdFirstPart.btnTitle} />) : (<OutLineWhiteBtn children={thirdFirstPart.btnTitle} />)}
                                                    </div>
                                                </div>

                                                {thirdFirstPart.id === 1 ? (<div className="col"></div>) : (<div className="d-none"></div>)}

                                            </div>
                                        </div>
                                    </div>
                            ))
                            }
                    </div>

                    <div className="row mt-3">
                        {
                            thirdSectionSecondPart.map((thirdSecond) =>
                        (
                            <div className="col" key={thirdSecond.key}>
                                <div className="cards"  style={{backgroundImage: `url(${thirdSecond.bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "393px", width: "610px" }}>
                                    <div className="row">
                                        <div className="col col-7"></div>
                                        <div className="col text-start p-5">
                                            <h4 className="card-title-thin-black">{thirdSecond.title}</h4>
                                            <p className="cards-small-desc-black">{thirdSecond.smallTitle}</p>
                                            <p className="card-labels-black"><b>{thirdSecond.label}</b></p>
                                            <div className="mx-5 mb-5 mt-5">
                                            <img src={downGreyArrow } className="img-fluid" />
                                            </div>
                                            <OutLineBlackBtn children={thirdSecond.btnTitle} style={{borderWidth: "2px"}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </section>


                <section className="foruth-section"  style={{paddingTop: "100px"}}>
                    <div className="row">
                        <div className="col"  style={{backgroundImage: `url(${SIM1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", width:"614px", padding: "150px 40px 174px 40px"}}>
                            <div className="mx-4">
                                <h6 className="intro-title" style={{fontSize: "34px", lineHeight: "50px"}}>WE MADE YOUR EVERYDAY FASHION BETTER!</h6>
                                <p className="thin-decs-white py-4 mx-2">In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                                <div className="">
                                    <WhiteBtn children="Shop Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{backgroundImage: `url(${SIM2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", borderRadius: "0px 20px 20px 0px"}}></div>
                    </div>
                </section>


                <section className="fifth-section" style={{paddingTop: "100px"}}>
                    <HighLine children="Categories For Men" />

                    <div className="row row-cols-2 row-cols-lg-4 g-lg-3" style={{paddingTop: "70px"}}>
                        {
                            fifthSection.map((fifth) => (
                                <div className="col" key={fifth.id}>
                                    <img src={fifth.bgImage} className="img-fluid" />
                                    <div className="row mt-4">
                                        <div className="col col-7">
                                            <p className="card-labels-black" style={{lineHeight: "2px"}}>{fifth.title}</p>
                                            <label className="card-labels-black" style={{lineHeight: "2px"}}><a href="#" className="" style={{textDecoration: "none", color: `${colors.grey}`}}>{fifth.link}</a></label>

                                        </div>
                                        <div className="mx-5 col text-end"><a href="#"><img src={rightGreyLinkArrow} className="img-fluid" /></a></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>


                <section className="sixth-section" style={{paddingTop: "100px"}}>
                    <HighLine children="Categories For Women" />

                    <div className="row row-cols-2 row-cols-lg-4 g-lg-3" style={{paddingTop: "70px"}}>
                        {
                            sixthSection.map((sixth) => (
                                <div className="col" key={sixth.id}>
                                    <img src={sixth.bgImage} className="img-fluid" />
                                    <div className="row mt-4">
                                        <div className="col col-7">
                                            <p className="card-labels-black" style={{lineHeight: "2px"}}>{sixth.title}</p>
                                            <label className="card-labels-black" style={{lineHeight: "2px"}}><a href="#" className="" style={{textDecoration: "none", color: `${colors.grey}`}}>{sixth.link}</a></label>

                                        </div>
                                        <div className="mx-5 col text-end"><a href="#"><img src={rightGreyLinkArrow} className="img-fluid" /></a></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="seven-section"  style={{paddingTop: "100px"}}>
                    <div className="container text-center" style={{backgroundColor: `${colors.black}`, borderRadius: "12px" }}>
                        <h4 className="intro-title" style={{fontSize: "50px", lineHeight: "49.1px", paddingTop: "43.84px"}}>Top Brands Deal</h4>
                        <p className="card-labels" style={{paddingTop: "25.86px", fontSize: "22px"}}>Up To <b style={{color: "#FBD103"}}>60%</b> off on brands</p>
                        <div className="row mx-5 px-5" style={{paddingTop: "67px", paddingBottom: "59.89px"}}>
                            <div className="col">
                                <div className="cards bg-white rounded"><img src={B1} className="img-fluid" /></div>
                            </div>
                            <div className="col"> <div className="cards bg-white rounded"><img src={B2} className="img-fluid" /></div></div>
                            <div className="col"> <div className="cards bg-white rounded"><img src={B3} className="img-fluid" /></div></div>
                            <div className="col"> <div className="cards bg-white rounded"><img src={B4} className="img-fluid" /></div></div>
                            <div className="col"> <div className="cards bg-white rounded"><img src={B5} className="img-fluid" /></div></div>
                        </div>
                    </div>
                </section>

            </section>
        </section>

     );
}
 
export default Home;