import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import InputContainer from "../../components/input-container.component"
import CompanyLogo from "../../assets/pngtree-tree-logo.jpg"
import "../../styles/sign-in-form.css"
import CustomGeneralBtn from "../../components/custom-general-btn.component"


const SignInForm = () => {

    
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")


    const handleEmailInput = (event) => {
        setEmailInput(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPasswordInput(event.target.value)
    }

    const navigate = useNavigate()


    const handleClick = () => {
        console.log(
            `Input Fields are: ${emailInput}, ${passwordInput}`
        )
        navigate('/dashboard')
    }

    const createAccountBtnStyle = {
        backgroundColor: '#FFFFFF',
        border: '2px solid #D9D9D9',
        transitionDuration: '0.4s',
        cursor: 'pointer',
        borderRadius: '8px',
        padding: '8px',
        
    }

    const inputStyle = {
        width:'99%',
        backgroundColor:'#F1F1F1',
        border:'none',
        padding: '8px 0px'

    }

    const inputContainerStyle = {
        marginBottom: '16px',

    }


    return(
        <div className="sign-up-form">

            <div className="auth-header">
            <img src={CompanyLogo} alt=""  className="company-logo-item"/>
            <p className="sign-up-form__Title">Let's Go</p>

            </div>




            <InputContainer 
                labelTitle={"Email"}
                value={emailInput}
                type={"text"}
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                onInputChange={handleEmailInput}
            />

            <InputContainer
                labelTitle={"Password"}
                value={passwordInput}
                type={"password"}
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                onInputChange={handlePasswordInput}
            />
            
            <CustomGeneralBtn 
                btnTitle={"Login"}
                onClick={handleClick}
                style={createAccountBtnStyle}
            />

             <p className="sign-up-form__Others">
               <Link to=""><span>Forgot Password</span></Link>
            </p>

            <p className="sign-up-form__Others">
                Don't have an account? <Link to="/"><span>Sign Up now</span></Link>
            </p>


          
        </div>
    )
}

export default SignInForm