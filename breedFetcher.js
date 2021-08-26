const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    const data = JSON.parse(body);

   
    if (response.statusCode !== 200) {
      console.log('error:', error); // Print the error if one occurred
    }
  
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback('No such breed', null);
    }
  
  });

};



//for other file use, do not remove
module.exports = {fetchBreedDescription};


