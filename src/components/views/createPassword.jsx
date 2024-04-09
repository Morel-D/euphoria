import CPImg from "../../assets/CPImg.png";
import google from "../../assets/logo/Google.png";
import twitter from "../../assets/logo/twitter.png";
import { PrimaryBtn, SocialMediaBtn } from "../widgets/buttons";
import { AuthTextFeilds, CheckBoxTextFeild } from "../widgets/textFeilds";

const CreatePassword = () => {

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
                <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${CPImg})`}}></div>
                <div className="col">
                    <div className="container px-5">
                        <div className="mt-5">
                            <h1 className="title">Create New Password</h1>
                            <p>Your new password must be different from previous used passwords.</p>
                        </div>

                        <div className="mt-5"  style={{width: "567px"}}>
                            <div className="mt-4">
                                <AuthTextFeilds label="Password" type="password"/>
                                <p className="mt-2 text-start">Must be at least 8 characters.</p>
                            </div>
                            <div className="mt-4">
                                <AuthTextFeilds label="Confirm Password" type="password"/>
                                <p className="mt-2 txt-danger">New password and comfirm new password do not match</p>
                            </div>

                            <div className="mt-4" style={{paddingBottom: "82%"}}>
                                <PrimaryBtn children="Reset Password" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default CreatePassword;