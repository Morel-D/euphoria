import CEImg from "../../assets/CEImg.png";
import arrowIcon from "../../assets/logo/Icon.png"

const CheckEmail = () => {
    return ( 
        <section className="container-fluid">
            <div className="row">
                <div class="col col-md-6 d-none d-lg-flex bg-image" style={{backgroundImage: `url(${CEImg})`}}></div>
                <div className="col">
                    <div className="container px-5">
                        <div className="mt-5">
                            <h1 className="title">Check Email</h1>
                            <p>Please check your email inbox and click on the provided link to reset your <br /> password. If you don’t receive email, <a href="" className="txt-primary"> Click here to resend</a></p>
                        </div>
                        <div className="mt-5"  style={{width: "567px"}}>
                            <div style={{paddingBottom: "82vh"}}>
                               <label><p className="mt-2"> <img src={arrowIcon} className="img-fluid" style={{paddingBottom: "2px", paddingRight: "6px"}}/> Back to <a href="/sign-in" style={{color: "#807D7E"}}>Log in</a></p></label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default CheckEmail;