import RPImg from "../../assets/RPImg.png";
import { PrimaryBtn } from "../widgets/buttons";
import { AuthTextFeilds } from "../widgets/textFeilds";


const RestePassword = () => {


    return ( 
        <section className="container-fluid">
            <div className="row">
                <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${RPImg})`}}></div>
                <div className="col">
                    <div className="container px-5">
                        <div className="mt-5">
                            <h1 className="title">Reset Your Password</h1>
                            <p>Enter your email and we'll send you a link to reset your password. <br /> Please  check it.</p>
                        </div>
                        <div className="mt-5"  style={{width: "567px", paddingTop: "50px"}}>
                            <div>
                                <AuthTextFeilds label="Email Address" type="email" placeholder="designer@gmail.com"/>
                                <p className="txt-danger mt-2">We can not find your email.</p>
                            </div>
                            <div className="mt-4" style={{paddingBottom: "82vh"}}>
                                <PrimaryBtn children="Sign Up" />
                                <p className="notice mt-2">Back to <a href="/sign-in" style={{color: "#3C4242"}}>Log in</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default RestePassword;