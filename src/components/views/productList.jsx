import { colors } from "../tools/colors";
import { sectionOne, sectionThree, sectionOneFilter, sectionOneColor, sectionOneDress, sectionOneSize } from "../widgets/productListWidget";
import Heart from "../../assets/logo/heart.png";
import { HighLine } from "../widgets/text";
import { Fragment } from "react";
import filter from "../../assets/logo/filter.png"
import greyLeftArrow from "../../assets/logo/arrowLeft.png"
import greyUpArrow from "../../assets/logo/arrowUp.png"
import blackUpArrow from "../../assets/logo/blackUpArrow.png"
import { Link } from "react-router-dom";

const ProductList = () => {
    return ( 
        <section className="container">
            <section className="section-one">
                <div className="row">
                    <div className="col col-3">
                        <ul class="list-group list-group-flush" style={{borderStyle: "solid", borderWidth: "0px 1px 1px 1px", borderColor: "#BEBCBD"}}>
                            <li class="list-group-item mt-4">
                                <div className="row">
                                    <div className="col"><p className="small-txt" style={{fontSize: "22px"}}><>Filter</></p></div>
                                    <div className="col text-end"><a href="#"><img src={filter} className="img-fluid" /></a></div>
                                </div>
                            </li>
                            <li class="list-group-item py-3">
                                {
                                    sectionOneFilter.map((filter) =>
                                (
                                    <a href="#">
                                        <div className="row">
                                            <div className="col col-8 py-2"><label className="label-txt">{filter}</label></div>
                                            <div className="col py-2 text-end"><img src={greyLeftArrow} className="img-fluid" /></div>
                                        </div>
                                    </a>
                                ))
                                }
                            </li>
                            <li class="list-group-item mt-4">
                                <div className="row">
                                    <div className="col"><p className="small-txt" style={{fontSize: "22px"}}><>Price</></p></div>
                                    <div className="col text-end"><a href="#"><img src={greyUpArrow} className="img-fluid" /></a></div>
                                </div>
                            </li>
                            <li class="list-group-item py-4">
                                
                                <input type="range" className="form-range" id="customRange1" />
                                <div className="row py-3">
                                    <div className="col">
                                        <div className="card text-center py-2">$70</div>
                                    </div>
                                    <div className="col">
                                        <div className="card text-center py-2">$600</div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item mt-4">
                                <div className="row">
                                    <div className="col"><p className="small-txt" style={{fontSize: "22px", color: `${colors.black}`}}><>Colors</></p></div>
                                    <div className="col text-end"><a href="#"><img src={blackUpArrow} className="img-fluid" /></a></div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="row row-cols-2 row-cols-lg-4 g-lg-3 py-4">
                                    {
                                        sectionOneColor.map((sectionColor) => (
                                            <div className="col px-3" key={sectionColor.id}>
                                                <a href="#">
                                                <div className="" style={{backgroundColor: `${sectionColor.color}`, borderStyle: "none", width: "36.73px", height: "36.73px", borderRadius: "12px"}}>
                                                </div>
                                                </a>
                                                <p className="small-txt mt-3 text-center">{sectionColor.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </li>

                            <li class="list-group-item mt-4">
                                <div className="row">
                                    <div className="col"><p className="small-txt" style={{fontSize: "22px"}}><>Size</></p></div>
                                    <div className="col text-end"><a href="#"><img src={greyUpArrow} className="img-fluid" /></a></div>
                                </div>
                            </li>

                            <li class="list-group-item">
                                <div className="row row-cols-2 row-cols-lg-3 g-lg-3 py-4">
                                    {
                                        sectionOneSize.map((sectionSize) => (
                                            <div className="col px-3 text-center">
                                                <a href="#" style={{textDecoration: "none", color: `${colors.black}`}}>
                                                    <div className="card py-2" style={{borderRadius: "8px", borderWidth: "1px"}}>
                                                        {sectionSize}
                                                    </div>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </li>

                            <li class="list-group-item mt-4">
                                <div className="row">
                                    <div className="col"><p className="small-txt" style={{fontSize: "22px"}}><>Dress Style</></p></div>
                                    <div className="col text-end"><a href="#"><img src={greyUpArrow} className="img-fluid" /></a></div>
                                </div>
                            </li>

                            <li class="list-group-item py-3">
                                {
                                    sectionOneDress.map((dress) =>
                                (
                                    <a href="#">
                                        <div className="row">
                                            <div className="col col-8 py-2"><label className="label-txt">{dress}</label></div>
                                            <div className="col py-2 text-end"><img src={greyLeftArrow} className="img-fluid" /></div>
                                        </div>
                                    </a>
                                ))
                                }
                            </li>

                        </ul>
                    </div>
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
                                                    <Link to={one.id === 1 ? "/product-details" : "#"}>
                                                        <div className="" style={{backgroundImage: `url(${one.bgImage})`, width: "282px", height: "370px"}}>
                                                            <div className="row p-4">
                                                                <div className="col text-end"><a href="#"><img src={Heart} className="img-fluid" /></a></div>
                                                            </div>
                                                        </div>
                                                    </Link>
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