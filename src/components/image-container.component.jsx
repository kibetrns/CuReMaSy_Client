import '../styles/image-container.component.css'

const ImageCardContainer = ({element, imageHolderStyle}) => {

    return (
        <div  style={imageHolderStyle}>
            {element}
        </div>
    )
}

export default ImageCardContainer