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

const PrimaryTextFeild = ({label, placeholder, type}) =>
{
    return <div className="primaryText">
    <div className="label">{label}</div>
    <input type={type} className="primaryTextFeild form-control" placeholder={placeholder} />
</div>
}

const PaymentTextFeild = ({placeholder, type}) =>
{
    return <input type={type} className="paymentTextFeild form-control" placeholder={placeholder} />
}


export {AuthTextFeilds, HeaderTextFeild, CheckBoxTextFeild, PrimaryTextFeild, PaymentTextFeild} 