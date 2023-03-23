import { Link } from "react-router-dom";
import FilterCharacter from "./FilterCharacter";
import FilterHouses from "./FilterHouses";
import house from '../images/house.png';
import Reset from './Reset';
import FilterActor from "./FilterActor";

function Filter ({resetButton, houses, selectedHouseLift,filterName, filterActor,handlerFilter, handlerActor}) {

  const buttonReset = (value) => {
    resetButton();
  }

return (
  <div className="form-container">
    <form className="form">
      <FilterActor handlerActor={handlerActor} filterActor={filterActor}></FilterActor>
     <FilterCharacter handlerFilter={handlerFilter} filterName={filterName}></FilterCharacter>
      <FilterHouses houses={houses} selectedHouseLift={selectedHouseLift}></FilterHouses>
    <Link to ="/" className="house-landing">
      <img src={house} alt="house"></img>
    </Link>
    </form>
    <Reset resetButton={buttonReset}></Reset>
  </div>
)

}

export default Filter;