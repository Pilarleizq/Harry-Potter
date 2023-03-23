function FilterHouses({selectedHouseLift, houses}) {

const selectedHouse = (event) => {
    selectedHouseLift(event.target.value);
}

    return ( 
    <>
        <label className="form-filtertwo" htmlFor="house">
        Choose the house:
            <select onInput={selectedHouse}className="filter-house" id="house" name="house" value={houses}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        </select>
    </label>
  </>
  )
}

export default FilterHouses;