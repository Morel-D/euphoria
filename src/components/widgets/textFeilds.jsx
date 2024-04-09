const AuthTextFeilds = ({type, label, placeholder}) =>
{
    return <div>
        <div className="label">{label}</div>
        <input type={type} className="authTextFeilds form-control" placeholder={placeholder} />
    </div>
}

const HeaderTextFeild = ({type}) =>
{
    return <input type={type} className="headerTextFeilds" />
}

const CheckBoxTextFeild = () =>
{
    return <input type="checkbox" className="checkBoxTextFeild"/>
}


export {AuthTextFeilds, HeaderTextFeild, CheckBoxTextFeild} 