import GeneralCard from "../../components/general-card.component"
import SignInCard from "../sign-in/sign-in-card"

const SignInPage = () => {

    const generalCardStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        backgroundColor: 'white',
        boxShadow: '0 0 16px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '16px'
    }

    return (
        <div className="sign-up-page">
            <GeneralCard 
                style={generalCardStyle}
                element={<SignInCard />}
            />
        </div>
    )
}

export default SignInPage