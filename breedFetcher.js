const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName.slice(0, 4)}`;
  request(api, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length) {
        callback(null, data[0].description );
      } else {
        callback("Breed Not Found!", null);
      }
    }
  });
};


module.exports = {fetchBreedDescription};
