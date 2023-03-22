import FilterCharacter from "./FilterCharacter";
import FilterHouses from "./FilterHouses";

function Filter ({selectedHouseLift}) {

return (
    <form className="form">
     <FilterCharacter></FilterCharacter>
      <FilterHouses selectedHouseLift={selectedHouseLift}></FilterHouses>
    </form>
)

}

export default Filter;