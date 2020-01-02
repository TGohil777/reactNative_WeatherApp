export const getLocationId = async city => {
    const response = await fetch(
        `https://www.metaweather.com/api/location/search/?query=${city}`,
    )

    
}