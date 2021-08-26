const request = require('request');
const breed = process.argv.slice(2);



const breedSearch = function(breed) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (error, response, body) => {
    const data = JSON.parse(body);

    
    
    if (response.statusCode !== 200) {
      console.log('error:', error); // Print the error if one occurred
    }
  
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`No such breed`);
    }
  
    
  });

};

breedSearch(breed);


// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(data);
  // console.log(typeof data);
  // console.log(typeof body);
  // console.log(data[0])
  // const object = data[0]
  // console.log(object.description);


