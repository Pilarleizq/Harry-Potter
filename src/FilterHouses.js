function FilterHouses({selectedHouseLift}) {

const selectedHouse = (event) => {
    selectedHouseLift(event.target.value);
}

    return ( 
    <label htmlFor="house">
    Elige la casa:
        <select onInput={selectedHouse}className="filter-house" id="house" name="house">
    <option value="Gryffindor">Gryffindor</option>
    <option value="Hufflepuff">Hufflepuff</option>
    <option value="Slytherin">Slytherin</option>
    <option value="Ravenclaw">Ravenclaw</option>
    </select>
  </label>
  )
}

export default FilterHouses;