function FilterCharacter ({filterName,handlerFilter}) {
console.log({filterName,handlerFilter});
const handleInput = (event) => {
  handlerFilter(event.target.value)
}

    return(
      <>
        <label className="form-filterone" htmlFor="filter">
          Search character:
          <input 
          className="filter-character" 
          type="search"
          name="search"
          placeholder="Name"
          onInput={handleInput}
          value={filterName}
          />
        </label>
      </>
    )
}

export default FilterCharacter;