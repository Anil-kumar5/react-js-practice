import React from 'react'

function GeoLocation() {
    const [lat,setLat] = React.useState('');
    const [long,setLong] = React.useState('');
    React.useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            });
        }  
    },[])
    console.log(lat,'lat');
    console.log('long',long);
    console.log(navigator,'navigator');
    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else { 
    //       x.innerHTML = "Geolocation is not supported by this browser.";
    //     }
    //   }
    //   function showPosition(position) {
    //     x.innerHTML = "Latitude: " + position.coords.latitude + 
    //     "<br>Longitude: " + position.coords.longitude;
    //   }
    return (
        <div>
            {lat}
            {long}
        </div>
    )
}

export default GeoLocation
