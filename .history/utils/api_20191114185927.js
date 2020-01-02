/* eslint-disable prettier/prettier */
export const getLocationId = async city => {
    const response = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${city}`,
    );

    const r = await response.json();

    return r[0].woeid;  
};

export const getWeather

