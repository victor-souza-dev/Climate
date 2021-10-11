import React, { useState } from "react";

export function City(data) {

    const city = data.title;
    
    let [getCity, setCity] = useState("Desconhecido!")
    
    function funcCity() {
        setCity(getCity = city);
    }

    window.addEventListener("load", funcCity)

    return(
    <div>
        <p>{getCity}</p>
    </div>
    );
}