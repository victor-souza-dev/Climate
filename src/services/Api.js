import { renderData } from './RenderData';

const APIBase = 'https://mycorsproxy-klowdy.herokuapp.com/https://www.metaweather.com/api/location/';

export async function fetchData(id) {
    const API = `${APIBase}${id}/`;
    try {
        const response = await fetch(API);
        const data = await response.json();
        renderData(data);
        
    } catch (error) {
        console.error(`Api.js/fetchData:${error}`);
    }
}

export async function fetchLocation(data) {
    const API = `${APIBase}search/?`;
    const API_URL = `${API}lattlong=${data.lat},${data.long}`;

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
        });
        const data = await response.json();
        
        if(data[0].woeid) {
            fetchData(data[0].woeid);
        }        
    } catch(error) {
        console.error(`Api.js/fetchLocation:${error}`);
    }

    
}