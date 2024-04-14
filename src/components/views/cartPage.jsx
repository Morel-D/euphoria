import arrowLeft from "../../assets/logo/arrowLeft.png";
import { colors } from "../tools/colors";
import { sectionTwo } from "../widgets/cardWidget";
import deleteBtn from "../../assets/logo/deletecon.png";
import { WhiteBtn } from "../widgets/buttons";

const CartPage = () => {
    return ( 
        <section className="">
            <section className="section-one container-fluid py-5 mx-5 px-5">
                <div className="path">
                    <div className="row">
                        <div className="col "><label className="label-txt" style={{fontSize: "18px"}}><a className="link-tag" href="/">Home</a> <img src={arrowLeft} className="mx-4 img-fluid" /><label className="label">Add To Cart</label></label></div>
                    </div>
                    <label className="small-txt mt-4" style={{fontSize: '14px'}}>Please fill in the fields below and click place order to complete your purchase! <br /> Already registered? <a className="link-tag" href="/" style={{color: `${colors.primary}`, fontWeight: "bold", textDecoration: "none"}}>Please login here</a></label>
                </div>
            </section>
            <section class=" section-two">
						<table class="table table-borderless" cellSpacing="80">
						  <thead className="thead-primary">
						    <tr className="">
						        <th>PRODUCT DETAILS</th>
						        <th>PRICE</th>
						        <th>QUANTITY</th>
						        <th>SHIPPING</th>
						        <th>SUBTOTAL</th>
						        <th>ACTION</th>
                                <th></th>
						    </tr>
						  </thead>
						  <tbody>
						    {
                             sectionTwo.map((two) =>
                            ( 
                                <tr className="">
                                    <td>
                                        <div className="row">
                                            <div className="col"><img src={two.bgImage} className="img-fluid" /></div>
                                            <div className="col col-9">
                                                <label className="label" style={{fontSize: "18px", fontWeight: "bold"}}>{two.name}</label><br />
                                                <label className="" style={{fontSize: '14px', color: `${colors.grey}`}}>Color : {two.color}</label><br />
                                                <label className="" style={{fontSize: '14px',  color: `${colors.grey}`}}>Size : {two.size}</label>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <p className="small-txt" style={{fontSize: "18px", color: `${colors.black}`}}><b>{two.price}</b></p>
                                    </td>
                                    <td>
                                        <div className="qantity">
                                            <label className="rounded"><a className="label" href="#" style={{textDecoration: "none"}}>-</a> <label className="px-3">{two.quantity}</label> <a className="label" href="#" style={{textDecoration: "none"}}>+</a></label>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="small-txt" style={{fontSize: "18px", fontWeight: "bold"}}><b>{two.shipping}</b></p>
                                    </td>
                                    <td>
                                        <p className="small-txt" style={{fontSize: "18px",  color: `${colors.black}`}}><b>{two.total}</b></p>
                                    </td>
                                    <td>
                                        <a href="#"><img src={deleteBtn} className="img-fluid" /></a>
                                    </td>
                                </tr>
                            ))
                            }

						  </tbody>
						</table>
					</section>
                    <section className="section-three"  style={{ backgroundColor: `${colors.light}`}}>
                        <div className="container-fluid mx-5 px-5">
                        <div className="row mt-5">
                            <div className="col mt-5">
                                <h6 className="title" style={{fontSize: "24px"}}>Discount  Codes</h6>
                                <label className="small-txt" style={{fontSize: '18px',  color: `${colors.grey}`}}>Enter your coupon code if you have one</label>

                                <div class="input-group mb-5 mt-5">
                                    <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply Coupon</button>
                                </div>

                                <div>
                                    <button className="btn btn-light py-2 px-5">Continue Shopping</button>
                                </div>

                            </div>
                            <div className="col col-4 px-5 text-center">
                                <div className="" style={{backgroundColor: "#F3F3F3", paddingTop: "50px", paddingBottom: "50px",}}>
                                    <div className="row">
                                        <div className="col">
                                            <p className="label" style={{fontSize: "22px"}}>Sub Total </p>
                                            <p className="label" style={{fontSize: "22px"}}>Shipping</p>

                                            <p className="label mt-5" style={{fontSize: "22px"}}><b>Grand Total</b></p>
                                        </div>
                                        <div className="col mb-5">
                                            <p className="label" style={{fontSize: "22px"}}>$513.00 </p>
                                            <p className="label" style={{fontSize: "22px"}}>$5.00</p>
                                            <p className="label mt-5" style={{fontSize: "22px"}}><b>$518.00</b></p>

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mt-5">
                                        <a href="/checkout" className="btn btn-purple">Proceed To Checkout</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-1"></div>
                        </div>
                        </div>

                    </section>
        </section>
     );
}
 
export default CartPage;