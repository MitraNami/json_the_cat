const request = require('request');


const breedFetcher = function(breed) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed.slice(0, 4)}`;
  request(api, (error, response, body) => {
    if (error) {
      console.log("Error", error);
      return;
    }
    const data = JSON.parse(body);
    //when the breed is not found the data will be an empty array
    console.log(data.length ? data[0].description : "Breed Not Found!");
  });
};

const breed = process.argv[2];
breedFetcher(breed);



