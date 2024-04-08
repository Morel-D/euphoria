import { colors } from "../tools/colors";
import { AuthTextFeilds, HeaderTextFeild } from "../widgets/textFeilds";
import { PrimaryBtn, SecondaryBtn, SocialMediaBtn } from "../widgets/buttons";
import googleImg from "../../assets/logo/Google.png"

const Home = () => {
    return ( 
        <div className="container mt-5"><p style={{color: colors.primary }}>This is the home page=</p>
        <AuthTextFeilds label="Enter email"/> <br /><br />
        <HeaderTextFeild /><br />
        This is the colr <br />
        <PrimaryBtn children="SignIn" /><br />
        <h1 className="title">Hello World</h1><br />
        <SecondaryBtn children="login" /><br /><br />
        <SocialMediaBtn img={googleImg} children="SignIn with google" />
        </div>

     );
}
 
export default Home;