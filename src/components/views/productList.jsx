import { colors } from "../tools/colors";
import { sectionOne, sectionThree } from "../widgets/productListWidget";
import Heart from "../../assets/logo/heart.png";
import { HighLine } from "../widgets/text";
import { Fragment } from "react";

const ProductList = () => {
    return ( 
        <section className="container">
            <section className="section-one">
                <div className="row">
                    <div className="col col-3">1</div>
                    <div className="col mt-5">
                       <div className="headings">
                            <div className="row">
                                <div className="col">
                                    <h6 className="title" style={{fontSize: "22px"}}>Women’s Clothing</h6>
                                </div>
                                <div className="col col-5">
                                    <div className="row mx-5">
                                        <div className="col text-end"><a href="#"  style={{textDecoration: "none"}}><h6 className="small-title-link" style={{color: `${colors.primary}`}}>New</h6></a></div>
                                        <div className="col"><a href="#" style={{textDecoration: "none"}}><h6 className="small-title-link">Recommended</h6></a></div>
                                    </div>
                                </div>
                            </div>
                       </div>

                       <div className="articles">
                            <div className="row row-cols-2 g-lg-3 row-cols-lg-3" style={{paddingTop: "70px"}}>
                                {
                                    sectionOne.map((one) => (
                                        <div className="col" key={one.id}>
                                            <div className="" style={{backgroundImage: `url(${one.bgImage})`, width: "282px", height: "370px"}}>
                                                <div className="row p-4">
                                                    <div className="col text-end"><a href="#"><img src={Heart} className="img-fluid" /></a></div>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <p className="card-labels-black" style={{fontSize: "15px", lineHeight: "0.01px"}}>{one.title}</p>
                                                    <p className="card-labels-black"><a href="#" className="" style={{textDecoration: "none", lineHeight:"0.01px", fontSize: "13px", color: `${colors.grey}`}}>{one.brand}</a></p>

                                                </div>
                                                <div className="col mx-2 col-4 text-start"><a href="#"  style={{color: `${colors.black}`, textDecoration: "none", backgroundColor: `${colors.light}`, borderRadius: "8px", padding: "10px", width: "82.31px", height: "36.58px"}}><b>{one.price}</b></a></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                       </div>
                        
                    </div>
                </div>
            </section>

            <section className="section-two"  style={{paddingTop: "100px"}}>
                <HighLine children="Clothing for Women Online in India" />
                <div className="content mt-4" style={{paddingLeft: "26px"}}>
                    <p className="content-title">Reexplore Women's Clothing Collection Online at Euphoria</p>
                    <p className="content-text">Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well,
                    your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online
                    shopping to premium quality cotton women's apparel, <b>Euphoria</b> has closet of Women Collection covered with the
                    latest and best designs of Women's Clothing Online.</p>
                    <p className="content-text">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of 
                    choice in Womens Wear. </p>
                    <p className="content-title">One-Stop Destination to Shop Every Clothing for Women: Euphoria</p>
                    <p className="content-text">Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women
                    were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit.
                     Concerning this, <b>Euphoria</b> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
                     <p className="content-text">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.
                    It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium
                    material and elegant design that you are always seeking for. Basically, </p>
                    <p className="content-title" style={{cursor: "pointer"}}>See More</p>
                </div>
            </section>

            <section className="section-three mb-5"  style={{paddingTop: "100px"}}>
                <HighLine children="Buy Women's Clothing at Best Price" />
                <div class="mt-5"  style={{paddingLeft: "26px", backgroundColor: `${colors.light}`}}>
                    <div className="heading">
                        <div className="row">
                        <div className="col col-9 px-4 py-5 mx-5">
                            <h6 className="title" style={{fontSize: "24px"}}>Women's Clothing</h6>
                        </div>
                        <div className="col text-start py-5">
                            <h6 className="title" style={{fontSize: "24px"}}>Best Price</h6>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className="body">
                        <div className="row px-4 py-5 mx-5">
                            {
                                sectionThree.map((three) =>
                            (
                                <Fragment key={three.id}>
                                    <div className="col col-10 mt-2">
                                        <p className="content-text" style={{fontSize: "24px"}}>{three.clothing}</p>
                                    </div>
                                    <div className="col text-center mt-2">
                                        <p className="content-text" style={{fontSize: "24px"}}>{three.price}</p>
                                    </div>
                                </Fragment>
                            ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </section>
     );
}
 
export default ProductList;