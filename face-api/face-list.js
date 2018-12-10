const request = require('request');
require('dotenv').config()


const addFaceList = function() {

    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/john-list-01';

const body = {
    'name': 'john-test-list',
};

const options = {
    uri: uriBase,
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : process.env.FACE_API_KEY
    }
};

request.put(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.addFaceList = addFaceList;


const addFaceToList = function() {

    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/john-list-01/persistedFaces';

const body = {
    'name': 'john-test-list',
};

const options = {
    uri: uriBase,
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : process.env.FACE_API_KEY
    }
};

request.put(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.addFaceToList = addFaceToList;