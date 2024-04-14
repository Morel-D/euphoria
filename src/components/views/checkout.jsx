import { CheckBoxTextFeild, PaymentTextFeild, PrimaryTextFeild } from "../widgets/textFeilds";
import arrowLeft from "../../assets/logo/arrowLeft.png";
import { HighLine } from "../widgets/text";
import { colors } from "../tools/colors";

import GPay from "../../assets/logo/GPay.png";
import Visa from "../../assets/logo/visa.png";
import PayPal from "../../assets/logo/payPal.png";
import PayPass from "../../assets/logo/payPass.png";
import { sectionTwo } from "../widgets/cardWidget";


const Checkout = () => {
    return ( 
        <section className="container">
            <div className="row mt-5">
                <div className="col">
                    <div className=""><label className="label-txt" style={{fontSize: "18px"}}><a className="link-tag" href="/">Home</a> <img src={arrowLeft} className="mx-2 img-fluid" /> My Account <img src={arrowLeft} className="mx-2 img-fluid" /> <label className="label">Add To Cart</label></label></div>

                    <div className="mt-4">
                        <HighLine children="Check out" />
                        <h6 className="title mt-2" style={{fontSize: "22px"}}>Billing Details</h6>
                    </div>

                    <form className="mb-4" action="" style={{paddingTop: "50px"}}>
                        <div className="row">
                            <div className="col"><PrimaryTextFeild label="First Name*" placeholder="First Name" type="text" /> </div>
                            <div className="col"><PrimaryTextFeild label="Last Name*" placeholder="Last Name" type="text" /></div>
                        </div>

                        <div className="row mt-4">
                            <div className="col"><PrimaryTextFeild label="Country / Region*" placeholder="Country / Region" type="text" /> </div>
                            <div className="col"><PrimaryTextFeild label="Company Name" placeholder="Company (optional)" type="text" /></div>
                        </div>

                        <div className="row mt-4">
                            <div className="col"><PrimaryTextFeild label="Street Address*" placeholder="House number and street name" type="text" /> </div>
                            <div className="col"><PrimaryTextFeild label="Apt, suite, unit" placeholder="apartment, suite, unit, etc. (optional)" type="text" /></div>
                        </div>

                        <div className="row mt-4">
                            <div className="col"><PrimaryTextFeild label="City*" placeholder="Town / City" type="text" /> </div>
                            <div className="col"><PrimaryTextFeild label="State*" placeholder="State" type="select" /></div>
                            <div className="col"><PrimaryTextFeild label="Postal Code*" placeholder="Postal Code*" type="text" /></div>
                        </div>

                        <div className="row mt-4">
                            <div className="col col-6"><PrimaryTextFeild label="Phone*" placeholder="Phone*" type="text" /> </div>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-purple">Continue to delivery</button>
                        </div>

                        <div className="row mt-3">
                            <div className="col col-1 mt-1" style={{width: "20px"}}><CheckBoxTextFeild /></div>
                            <div className="col"><label className="label">Save my information for a faster checkout</label></div>
                        </div>
                        
                    </form>

                    <hr />

                    <div className="shipping-address mt-4">
                        <h6 className="title mt-2" style={{fontSize: "22px"}}>Shipping Address</h6>
                        <label className="label" style={{fontSize: "16px"}}>Select the address that matches your card or payment method.</label>

                        <div className="mt-4 mb-4 box">
                            <div className="row mb-4">
                                <div className="col col-1"  style={{width: "40px"}}><input type="radio" /></div>
                                <div className="col">
                                    <label className="title" style={{fontSize: "18px"}}>Select the address that matches your card or payment method.</label>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-4">
                                <div className="col col-1"  style={{width: "40px"}}><input type="radio" /></div>
                                <div className="col">
                                    <label className="title" style={{fontSize: "18px"}}>Use a different shipping address</label>
                                </div>                         
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="Shipping Method mt-4">
                        <h6 className="title mt-2" style={{fontSize: "22px"}}>Shipping Method</h6>
                        <label className="label" style={{fontSize: "16px"}}>Select the address that matches your card or payment method.</label>

                        <div className="mt-4 mb-4 box">

                            <div className="col py-4">
                                <label className="title" style={{fontSize: "18px"}}>Arrives by Monday, June 7</label>
                            </div>
                            <hr />
                            <div className="row mt-4">
                                <div className="col">
                                    <label className="title" style={{fontSize: "18px"}}>Delivery Charges</label>
                                    <p className="label-txt">Additional fess may apply</p>
                                </div>
                                <div className="col text-end col-4">
                                    <label className="title" style={{fontSize: "18px"}}>$5.00</label>
                                </div>                         
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="Payment Method mt-4">
                        <h6 className="title mt-2" style={{fontSize: "22px"}}>Payment Method</h6>
                        <label className="label" style={{fontSize: "16px"}}>All transactions are secure and encrypted.</label>

                        <div className="mt-4 mb-4 box">

                            <div className="payment">
                                <div className="row">
                                    <div className="col col-1 mt-2"  style={{width: "40px"}}><input type="radio" /></div>
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Credit Card</label>
                                        <p className="label" style={{fontSize: "16px"}}>We accept all major credit cards.</p>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col col-2"  style={{width: "110px"}}><img src={GPay} className="img-fluid" /></div>
                                    <div className="col col-2"  style={{width: "110px"}}><img src={Visa} className="img-fluid" /></div>
                                    <div className="col col-2"   style={{width: "110px"}}><img src={PayPal} className="img-fluid" /></div>
                                    <div className="col col-2"   style={{width: "110px"}}><img src={PayPass} className="img-fluid" /></div>
                                </div>

                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col"><PaymentTextFeild placeholder="Card number" type="text" /></div>
                                        <div className="col"><PaymentTextFeild placeholder="Name of card" type="text" /></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col"><PaymentTextFeild placeholder="Expiration date (MM/YY)" type="date" /></div>
                                        <div className="col"><PaymentTextFeild placeholder="Security Code" type="password" /></div>
                                    </div>
                                </form>

                            </div>
                            <hr />
                            <div className="row mt-4">
                                    <div className="col col-1 mt-2"  style={{width: "40px"}}><input type="radio" /></div>
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Cash on delivery</label>
                                        <p className="label" style={{fontSize: "16px"}}>Pay with cash upon delivery.</p>
                                    </div>
                            </div>
                            <hr />
                            <div className="row mt-4">
                                    <div className="col col-1"  style={{width: "40px"}}><input type="radio" /></div>
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Paypol</label>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-5" style={{paddingBottom: "50px"}}>
                        <a href="/confirm" className="btn btn-purple p-3">Pay Now</a>
                    </div>
                </div>
                <div className="col col-5" style={{paddingTop: "100px"}}>
                <div class="shadow-sm p-3 mb-5 bg-body rounded">
                    <div className="mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h6 className="title mt-2" style={{fontSize: "22px"}}>Order Summary</h6>
                            </li>
                            
                                {
                                    sectionTwo.map((order) =>(
                                        <li className="list-group-item py-3">
                                            <div className="row">
                                                <div className="col">
                                                    <img src={order.bgImage} className="img-fluid" />
                                                </div>
                                                <div className="col col-7 mt-3">
                                                    <label className="label" style={{fontSize: "14px", fontWeight: "bold"}}>{order.name}<label className="" style={{color: `${colors.grey}`}}>{order.id === 1 ? " x 1" : "x 2"}</label></label><br />
                                                    <label className="title" style={{fontSize: '14px'}}>Color : <label className="small-txt" style={{color: `${colors.grey}`}}>{order.color}</label></label>

                                                </div>
                                                <div className="col mt-4">
                                                    <label className="label" style={{fontSize: '14px'}}><label className="" style={{color: `${colors.grey}`}}><b>{order.price}</b></label></label>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            <li className="list-group-item">
                                <div className="row mt-3">
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Subtotal <label className="label" style={{color: `${colors.grey}`}}>( 3 items )</label></label>
                                    </div>
                                    <div className="col text-end">
                                        <label className="title" style={{fontSize: "18px"}}>$513.00</label>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Savings</label>
                                    </div>
                                    <div className="col text-end">
                                        <label className="title" style={{fontSize: "18px"}}>-$30.00</label>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row py-3">
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Shipping</label>
                                    </div>
                                    <div className="col text-end">
                                        <label className="title" style={{fontSize: "18px"}}>-$5.00</label>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row py-3">
                                    <div className="col">
                                        <label className="title" style={{fontSize: "18px"}}>Total</label>
                                    </div>
                                    <div className="col text-end">
                                        <label className="title" style={{fontSize: "18px"}}>$478.00</label>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default Checkout;