
import axios from 'axios';
//******* A service dedicated for API interaction && Business logic implementation*** */


const API_URL = 'http://vps727992.ovh.net:3002/api/places';
const headers = { 'Content-Type': 'application/json' };


const fetchCountriesData = (param) => axios.post(`${API_URL}/form`, data, { headers });




export default {fetchCountriesData }

/*fetch('/contributions/'+ param)
.then((response) => response.json())
.then((responseJson) => {
    console.log(responseJson);
    try {
        this.setState({data: responseJson[0].dataset, modified: responseJson[0].modified, render: true});
    } catch (e) {
        console.log(e);
    }
}).catch((error) => {
    console.error(error);
});*/


