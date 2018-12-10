const request = require('request');
require('dotenv').config()

const createGroup = function () {
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/john-01';

const body = {
    'name': 'mypersongroupid',
    'userData': 'Ngin Pod Group',
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

module.exports.createGroup = createGroup;



const createPerson = function () {
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/john-01/persons';

const body = {
    'name': 'John Graham',
};

const options = {
    uri: uriBase,
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : process.env.FACE_API_KEY
    }
};

request.post(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    console.log('resp', response);
    
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.createPerson = createPerson;



const addFace = function () {
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/john-01/persons/e1d82271-1e4b-4435-a4f3-2e3870256d21/persistedFaces';

const body = {
    'url': 'https://i.ibb.co/HxxHHTd/20181207-225913.jpg',
};

const options = {
    uri: uriBase,
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : process.env.FACE_API_KEY
    }
};

request.post(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    console.log('resp', response);
    
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.addFace = addFace;


const train = function () {
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/john-01/train';


const options = {
    uri: uriBase,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : process.env.FACE_API_KEY
    }
};

request.post(options, (error, response, body) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    console.log('resp', response);
    
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.train = train;
