import SUImg from "../../assets/SUImg.png";
import google from "../../assets/logo/Google.png";
import twitter from "../../assets/logo/twitter.png";
import { PrimaryBtn, SocialMediaBtn } from "../widgets/buttons";
import { AuthTextFeilds, CheckBoxTextFeild } from "../widgets/textFeilds";

const SignUp = () => {

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
                <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${SUImg})`}}></div>
                <div className="col">
                    <div className="container px-1">
                        <div className="mt-5">
                            <h1 className="title">Sign Up</h1>
                            <p>Sign up for free to access to in any of our products </p>

                            <div className="social-medias mt-5">
                                <SocialMediaBtn children="Continue With Google" img={google}/>
                                <div className="py-2"></div>
                                <SocialMediaBtn children="Continue With Twitter" img={twitter}/>
                            </div>
                        </div>

                        <div className="mt-4"  style={{width: "567px", paddingTop: "50px"}}>
                            <div>
                                <AuthTextFeilds label="Email Address" type="email" placeholder="designer@gmail.com"/>
                                <p className="txt-danger mt-2">Error Message</p>
                            </div>
                            <div className="mt-4">
                                <AuthTextFeilds label={passwordLable} type="password"/>
                                <p className="mt-2 text-start">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            </div>
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col col-1"><CheckBoxTextFeild /></div>
                                    <div className="col"><p style={{fontSize: "18px"}}>Agree to our <a href="" style={{color: "#807D7E"}}>Terms</a> of use and <a href="" style={{color: "#807D7E"}}>Privacy Policy</a> </p></div>
                                </div>
                                <div className="row">
                                    <div className="col col-1"><CheckBoxTextFeild /></div>
                                    <div className="col"><p style={{fontSize: "18px"}}>Subscribe to our monthly newsletter</p></div>
                                </div>
                            </div>
                            <div className="mt-4" style={{paddingBottom: "20%"}}>
                                <PrimaryBtn children="Sign Up" href="/" />
                                <p className="notice mt-2">Already have an  account? <a href="/sign-in" style={{color: "#3C4242"}}>Sign In</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default SignUp;