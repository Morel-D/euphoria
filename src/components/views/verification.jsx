import VImg from "../../assets/vImg.png";
import google from "../../assets/logo/Google.png";
import twitter from "../../assets/logo/twitter.png";
import { PrimaryBtn, SocialMediaBtn } from "../widgets/buttons";
import { AuthTextFeilds, CheckBoxTextFeild } from "../widgets/textFeilds";


const Verification = () => {

    const passwordLable = 
    (
        <div className="row">
            <div className="col">Password</div>
            <div className="col text-end">Hide</div>
        </div>
    );

    return ( 
        <section className="container-fluid">
        <div className="row">
            <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${VImg})`}}></div>
            <div className="col">
                <div className="container px-5">
                    <div className="mt-5">
                        <h1 className="title">Verification</h1>
                        <p>Verify your code.</p>
                    </div>

                    <div className="mt-5">
                        <div>
                            <AuthTextFeilds label="Verification Code " type="number" placeholder=""/>
                            {/* <p className="txt-danger mt-2">Error Message</p> */}
                        </div>
                        <div className="mt-4" style={{paddingBottom: "82%"}}>
                            <PrimaryBtn children="Verify Code" />
                            {/* <p className="notice mt-2">Verify Code <a href="/sign-in" style={{color: "#3C4242"}}>Sign In</a></p> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
     );
}
 
export default Verification;