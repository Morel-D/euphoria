import { colors } from "../tools/colors"

const HighLine = ({children}) =>
{ 
    return  <div>
                <div className="row">
                    <div className="col col-1"><span className="indicate"></span> </div>
                    <div className="col text-start"><h3 className="highline" style={{color: colors.black, position: "relative", right: "86px"}}>{children}</h3></div>
                </div>
            </div>
}


export {HighLine}