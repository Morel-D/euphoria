import { colors } from "../tools/colors"

const HighLine = ({children}) =>
{ 
    return  <div className="">
                <div className="row">
                    <div className="col col-1"  style={{width: "1px"}}><span className="indicate"></span> </div>
                    <div className="col text-start"><h3 className="highline" style={{color: colors.black, padding: "0px"}}>{children}</h3></div>
                </div>
            </div>
}


export {HighLine}