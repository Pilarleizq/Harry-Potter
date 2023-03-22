import FilterCharacter from "./FilterCharacter";
import FilterHouses from "./FilterHouses";

function Filter ({selectedHouseLift,filterName,handlerFilter}) {

return (
    <form className="form">
     <FilterCharacter handlerFilter={handlerFilter} filterName={filterName}></FilterCharacter>
      <FilterHouses selectedHouseLift={selectedHouseLift}></FilterHouses>
    </form>
)

}

export default Filter;