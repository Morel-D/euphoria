import { colors } from "../tools/colors"

const HighLine = ({children}) =>
{ 
    return  <div>
                <div className="row col-2">
                    <div className="col col-1"><span className="indicate"></span> </div>
                    <div className="col"><h3 className="highline" style={{color: colors.black}}>{children}</h3></div>
                </div>
            </div>
}


export {HighLine}