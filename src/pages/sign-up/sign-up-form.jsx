import { useState } from "react"
import InputContainer from "../../components/input-container.component"
import "../../styles/sign-up-form.css"
import CustomGeneralBtn from "../../components/custom-general-btn.component"
import { Link } from "react-router-dom"


const SignUpForm = () => {

    const [fullNameInput, setFullNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("")


    const handleFullNameInput = (event) => {
        setFullNameInput(event.target.value)
    }

    const handleEmailInput = (event) => {
        setEmailInput(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPasswordInput(event.target.value)
    }

    const handleConfirmedPasswordInput = (event) => {
        setConfirmPasswordInput(event.target.value)
    }


    const handleClick = () => {
        console.log(
            `Input Fields are: ${fullNameInput}, ${emailInput}, ${passwordInput},${confirmPasswordInput}`
        )
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
        border:'none'
    }

    const inputContainerStyle = {
        marginBottom: '16px'
    }


    return(
        <div className="sign-up-form">

            <p className="sign-up-form__Title">Let's Get Started</p>

            <InputContainer
                labelTitle={"Full Name"}
                value={fullNameInput}
                type={"text"}
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                onInputChange={handleFullNameInput}
            />

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
                type={"text"}
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                onInputChange={handlePasswordInput}
            />

            <InputContainer
                labelTitle={"Confirm Password"}
                value={confirmPasswordInput}
                type={"text"}
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                onInputChange={handleConfirmedPasswordInput}
            />

            <p className="sign-up-form__TsC">
                By Continuing you agree to <a href="#"><span>Terms & Conditions</span></a>
                and <a href="#"><span>Privacy Policy</span></a>
            </p>

            <CustomGeneralBtn 
                btnTitle={"Create Account"}
                onClick={handleClick}
                style={createAccountBtnStyle}
            />

            <p className="sign-up-form__Others">
                Already have an account? <Link to={`sign-in`}><span>Login now</span></Link>
            </p>
          
        </div>
    )
}

export default SignUpForm