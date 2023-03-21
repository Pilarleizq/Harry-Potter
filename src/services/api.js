const getDataApi = (house) => {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {

        return data;
    });

 };

 export default getDataApi;
