const request = require('request');
require('dotenv').config()

const identify = function() {

    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/identify';

const body = {
    'faceIds': ['4ef38cfe-35d4-4417-b592-30a32c19452d','ed774cda-6502-4f28-9cd7-e4da4fe6a47e', 'ab6f1aa0-5835-4da8-a249-ecb6f9915b50'],
    'personGroupId': 'john-01',
    "maxNumOfCandidatesReturned": 1
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
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
  });

}

module.exports.identify = identify;

const detect = function () {
    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
    
    const body = {
       //'url': 'https://i.ibb.co/Dg1wTLb/1526872-10100358111823146-70392791-n.jpg',
       //'url': 'https://i.ibb.co/HxxHHTd/20181207-225913.jpg'  
       'url': 'https://i.ibb.co/PYRM2Xy/20181207-233842.jpg'  
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
        
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        console.log(jsonResponse);
      });
    
    }
    
    module.exports.detect = detect;