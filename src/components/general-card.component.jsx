import '../styles/general-card.component.css'

const GeneralCard = ({style, element}) => {

    return (
        <div className="general-card" style={style}>
            {element}
        </div>
    )
}

export default GeneralCard