import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000';



export const getCoordinates= (zip) =>
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+zip+'&key=AIzaSyC1_uSEF3Yopgblv4RireGbVNzDDF024Ok')
        .then(res => {
            console.log('response from server logout');
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });