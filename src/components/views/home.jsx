import { HighLine } from "../widgets/text";
import { homeBanner, firstSection } from "../widgets/homeWidgets";
import { WhiteBtn } from "../widgets/buttons";
import leftArrow from "../../assets/logo/LA.png";
import rightArrow from "../../assets/logo/RA.png";
import carousel from "../../assets/logo/carrousel.png";


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
            <section className="container py-5 body">
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
            </section>
        </section>

     );
}
 
export default Home;