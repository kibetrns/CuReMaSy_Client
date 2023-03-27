import "../styles/search-bar.component.css"

const SearchBar = ({placeholder}) => {


    return(
        <div className="search-bar">
            <span class="material-symbols-outlined">search</span>
            <input type="text" name="search-bar" id="search-bar" placeholder={placeholder}/>
        </div>
    )
}

export default SearchBar