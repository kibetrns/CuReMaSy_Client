const InputContainer = ({labelTitle, value, type, inputStyle, inputContainerStyle, onInputChange}) =>  {

    return (
        <div className="input-container" style={inputContainerStyle}>
            <label>{labelTitle} <br />
                <input type={type} onChange={onInputChange} value={value} style={inputStyle}  />   
            </label>
        </div>
    )
}
export default InputContainer