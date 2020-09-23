const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName.slice(0, 4)}`;
  request(api, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      //when the breed is not found the data will be an empty array also, error = null
      callback(error, data.length ? data[0].description : "Breed Not Found!");
    }
  });
};


module.exports = {fetchBreedDescription};
