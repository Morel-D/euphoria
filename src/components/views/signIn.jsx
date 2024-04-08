import SigInImg from "../../assets/SIImg.png";
import google from "../../assets/logo/Google.png";
import twitter from "../../assets/logo/twitter.png";
import { PrimaryBtn, SocialMediaBtn } from "../widgets/buttons";
import { AuthTextFeilds } from "../widgets/textFeilds";

const SigIn = () => {
    return ( 
        <section>
            <div className="d-flex">
                <div className="col">
                    <img src={SigInImg} className="auth-img img-fluid"/>
                </div>
                <div className="col">
                    <div className="">
                        <h1 className="title mt-5">Sign In Page</h1>

                        <div className="social-medias mt-5">
                            <SocialMediaBtn children="Continue With Google" img={google}/>
                            <div className="py-2"></div>
                            <SocialMediaBtn children="Continue With Twitter" img={twitter}/>
                        </div>

                        <div className="container mt-4">
                            <div className="row">
                                <div className="col"><hr /></div>
                                <div className="col px-1">OR</div>
                                <div className="col"><hr /></div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div>
                            <AuthTextFeilds label="User name or email address" type="email"/>
                            </div>
                            <div className="mt-4">
                            <AuthTextFeilds label="Password" type="password"/>
                            </div>
                            <div className="mt-4">
                            <PrimaryBtn children="Sign In" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default SigIn;