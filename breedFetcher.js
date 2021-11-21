const request = require('request');
const args = process.argv.slice(2);
let catSearch = args[0].toLocaleLowerCase();
const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catSearch}`;

/*
In order to search a breed: Use the following link
https://docs.thecatapi.com/api-reference/breeds/breeds-search
GET
/breeds/search
Search for a Breed by using part of it’s name as the ‘q’ query parameter.
e.g ?q=sib to search for Siberian - https://api.thecatapi.com/v1/breeds/search?q=sib

No need for API key for this CAT API
*/

request(catUrl, (error, response, body) => {
  const bodyObj = JSON.parse(body);
  if (!bodyObj.length) {
    console.log(`The breed ${catSearch} is not present in the CAT API`);
  } else {
    console.log(bodyObj[0].description);
  }
});