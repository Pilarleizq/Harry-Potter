function FilterCharacter () {

    return(
        <label className="form-filterone" htmlFor="filter">
        Busca el personaje:
        <input 
        className="filter-character" 
        type="search"
        id="filter"
        name="filter"
        placeholder="Nombre"
        />
      </label>
    )
}

export default FilterCharacter;