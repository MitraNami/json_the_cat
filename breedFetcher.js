const request = require('request');


const fetchBreedDescription = (breed, callback) => {

  const uri = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(uri, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (res.statusCode === 200) {
      const [breedinfo] = JSON.parse(body);
      if (breedinfo) {
        const breedDes = breedinfo.description;
        callback(null, breedDes);
        return;
      }
      callback('Breed Not Found!', null);
    } else {
      callback(res.statusCode, null);
    }
  });

};


module.exports = fetchBreedDescription;
