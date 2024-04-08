const AuthTextFeilds = ({type, label}) =>
{
    return <div>
        <label className="label">{label}</label>
        <input type={type} className="authTextFeilds form-control" />
    </div>
}

const HeaderTextFeild = ({type}) =>
{
    return <input type={type} className="headerTextFeilds" />
}


export {AuthTextFeilds, HeaderTextFeild} 