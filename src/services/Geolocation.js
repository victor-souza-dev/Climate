import { fetchLocation, fetchData } from './Api';

export function GeoLocation() {

    function success(position) {
        let array = {
            long: position.coords.longitude,
            lat: position.coords.latitude,
        };
        fetchLocation(array);
    }
    
    function error(error) {
        console.log(`Geolocation.js:${error}`)
    }
    
    navigator.geolocation.watchPosition(success, error, {
        enableHighAccuracy:true, maximumAge:30000, 
        timeout: 2000,
    });
}

export default GeoLocation;