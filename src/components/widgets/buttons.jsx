const PrimaryBtn = ({children, href}) =>
{
    return <a className="btn primaryBtn" href={href}>{children}</a>
    
}

const SecondaryBtn = ({children, href}) =>
{
    return <a className="btn SecondaryBtn" href={href}>{children}</a>
    
}

const SocialMediaBtn = ({children, img}) =>
{
    return <button className="btn SocialMediaBtn"><img src={img} className="img-fluid" style={{width: "20px", height: "20px", position: "relative", bottom: "4px", right: "12px"}}/>{children}</button>
    
}

const WhiteBtn = ({children}) =>
{
    return <button className="btn whiteBtn">{children}</button>
    
}

const OutLineWhiteBtn = ({children}) =>
{
    return <button className="btn outLineWhiteBtn">{children}</button>

}

const OutLineBlackBtn = ({children, style}) =>
{
    return <button className="btn outLineBlackBtn" style={style}>{children}</button>

}


const SpecialBlackBtn = ({children}) =>
{
    return <button className="btn specialBlackBtn">{children}</button>

}


export {PrimaryBtn, SecondaryBtn, SocialMediaBtn, WhiteBtn, OutLineBlackBtn, OutLineWhiteBtn, SpecialBlackBtn}