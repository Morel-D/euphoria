import SigInImg from "../../assets/SIImg.png";
import google from "../../assets/logo/Google.png";
import twitter from "../../assets/logo/twitter.png";
import { PrimaryBtn, SocialMediaBtn } from "../widgets/buttons";
import { AuthTextFeilds } from "../widgets/textFeilds";

const SigIn = () => {

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
                <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${SigInImg})`}}></div>
                <div className="col">
                    <div className="container px-5">
                        <div className="mt-5">
                            <h1 className="title">Sign In Page</h1>

                            <div className="social-medias mt-5">
                                <SocialMediaBtn children="Continue With Google" img={google}/>
                                <div className="py-2"></div>
                                <SocialMediaBtn children="Continue With Twitter" img={twitter}/>
                            </div>
                        </div>

                        <div className="mt-5" style={{width: "567px"}}>
                            <div className="row">
                                <div className="col"><hr /></div>
                                <div className="col col-1 py-2">OR</div>
                                <div className="col"><hr /></div>
                            </div>
                        </div>

                        <div className="mt-4"  style={{width: "567px"}}>
                            <div>
                            <AuthTextFeilds label="User name or email address" type="email"/>
                            </div>
                            <div className="mt-4">
                            <AuthTextFeilds label={passwordLable} type="password"/>
                            <p className="notice mt-2 text-end"><a href="" style={{color: "#3C4242"}}>Forget your password</a></p>
                            </div>
                            <div className="mt-4" style={{paddingBottom: "82%"}}>
                            <PrimaryBtn children="Sign In" />
                            <p className="notice mt-2">Don’t have an account? <a href="/sign-up" style={{color: "#3C4242"}}>Sign up</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default SigIn;