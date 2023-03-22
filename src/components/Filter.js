import { Link } from "react-router-dom";
import FilterCharacter from "./FilterCharacter";
import FilterHouses from "./FilterHouses";
import house from '../images/house.png'

function Filter ({selectedHouseLift,filterName,handlerFilter}) {

return (
  <div className="form-container">
    <form className="form">
     <FilterCharacter handlerFilter={handlerFilter} filterName={filterName}></FilterCharacter>
      <FilterHouses selectedHouseLift={selectedHouseLift}></FilterHouses>
    <Link to ="/" className="house-landing">
      <img src={house} alt="house"></img>
    </Link>
    </form>
  </div>
)

}

export default Filter;