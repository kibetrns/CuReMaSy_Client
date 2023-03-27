import "../styles/more-options-modal.css"


//TODO("probably make it more dynamic")
const MoreOptionsModal = ({onEditClick, onDeleteClick , itemId}) => {

    const handleDeleteClick = () => {
        onDeleteClick(itemId)
    }

    const handleEditClick = () => {
        onEditClick(itemId)
    }



    return(
        <div className="options-container">
            <div className="options-item" onClick={handleDeleteClick}>
            <span class="material-symbols-outlined">delete</span>
            <p>Delete</p>
            </div>

            <div className="options-item" onClick={handleEditClick}>
            <span class="material-symbols-outlined">edit</span>
            <p>Edit</p>
            </div>

        </div>
    )
}

export default MoreOptionsModal