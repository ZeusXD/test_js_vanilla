import {getCovidData} from "./src/services/covid-data.service.js";


async function init(){
    const response = await getCovidData();
    console.log(response);
}

init();



