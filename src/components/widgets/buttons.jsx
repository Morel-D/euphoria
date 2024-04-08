const PrimaryBtn = ({children}) =>
{
    return <button className="btn primaryBtn">{children}</button>
    
}

const SecondaryBtn = ({children}) =>
{
    return <button className="btn SecondaryBtn">{children}</button>
    
}

const SocialMediaBtn = ({children, img}) =>
{
    return <button className="btn SocialMediaBtn"><img src={img} className="img-fluid" style={{width: "20px", height: "20px", position: "relative", bottom: "4px", right: "12px"}}/>{children}</button>
    
}

export {PrimaryBtn, SecondaryBtn, SocialMediaBtn}