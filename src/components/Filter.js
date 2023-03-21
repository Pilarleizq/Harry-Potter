import FilterHouses from "../FilterHouses";

function Filter ({selectedHouseLift}) {

return (
    <form className="form">
      <label htmlFor="filter">
        Busca el personaje:
        <input 
        className="filter-character" 
        // autoComplete="off"
        type="search"
        id="filter"
        name="filter"
        placeholder="Nombre del personaje"
        />
      </label>
      <FilterHouses selectedHouseLift={selectedHouseLift}></FilterHouses>
    </form>
)

}

export default Filter;