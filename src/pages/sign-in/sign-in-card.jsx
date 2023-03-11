import ImageCardContainer from "../../components/image-container.component"
import SignInForm from "../sign-in/sign-in-form"
import mainCredentialsPic from "../../assets/credential-image.png"
import imagePlaceHolder from "../../assets/image-placeholder.png"
import "../../styles/sign-in-card.css"

const SignInCard = () => {
    
    //TODO("Fix Image not filling the whole height of the sign-in-card__One div")

    return(
        <div className="sign-up-card">
            <div className="sign-up-card__One">
                <ImageCardContainer 
                    element= { <img src={mainCredentialsPic} alt={imagePlaceHolder} /> }
                />
            </div>

            <div className="sign-up-card__Two">
                <SignInForm />
            </div>
        </div>
    )
}

export default SignInCard