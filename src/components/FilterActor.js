function FilterActor ({filterActor,handlerActor}) {
   
const handleFilterActor = (event) => {
      handlerActor(event.target.value)
}
    
        return(
          <>
            <label className="form-filter-0" htmlFor="filter">
              Search actor:
              <input 
              className="filter-character" 
              type="search"
              name="search"
              placeholder="Actor's name"
              onInput={handleFilterActor}
              value={filterActor}
              />
            </label>
          </>
        )
    }
    
    export default FilterActor;