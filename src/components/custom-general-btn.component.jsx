import '../styles/custom-general-btn.component.css'

const CustomGeneralBtn = ({btnTitle, btnIcon,style, onClick}) => {

    return (
    <button className="customGeneralBtn" style={style} onClick={onClick} >
        {btnIcon}
        {btnTitle}
    </button>
    )
}
export default CustomGeneralBtn