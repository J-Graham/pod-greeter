const personGroups = require('./face-api/person-group');
const faceDetect = require('./face-api/face-detect');
const faceList = require('./face-api/face-list');
require('dotenv').config()

const imageUrl =
    'https://media.licdn.com/dms/image/C5103AQFyOpwrP50IUQ/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=6dAXBLM27U0Jj1oAe4iqMUyohHX4lMIefe2Dnu3kFPg';

// Request parameters.
// const params = {
//     'returnFaceId': 'true',
//     'returnFaceLandmarks': 'false',
//     'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
//         'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
// };

//faceList.findsimilars();
faceDetect.identify();
//personGroups.train();
