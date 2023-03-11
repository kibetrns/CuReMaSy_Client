import ImageCardContainer from "../../components/image-container.component"
import SignUpForm from "./sign-up-form"
import mainCredentialsPic from "../../assets/credential-image.png"
import imagePlaceHolder from "../../assets/image-placeholder.png"
import "../../styles/sign-up-card.css"

const SignUpCard = () => {

    //TODO("Fix Image not filling the whole height of the sign-up-card__One div")

    return(
        <div className="sign-up-card">
            <div className="sign-up-card__One">
                <ImageCardContainer 
                    element= { <img src={mainCredentialsPic} alt={imagePlaceHolder} /> }
                />
            </div>

            <div className="sign-up-card__Two">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpCard