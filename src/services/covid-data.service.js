import axios from 'axios'

export async function getCovidData() {
    return axios.get('https://api.covid19api.com/summary');
};

