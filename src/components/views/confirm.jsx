import CP from "../../assets/order-confirmed.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Confirm = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    })

    return ( 
        <section className="container">
            <div className="payment-img">
                <div className="details">
                    <a href="/" data-aos="fade-up" className="btn btn-purple mt-4">Continue Shopping</a>
                </div>
            </div>
            {/* <img src={CP} /> */}
        </section>
     );
}
 
export default Confirm;