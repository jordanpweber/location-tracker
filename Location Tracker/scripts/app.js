'use strict';

function loadMapbox() {
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js';
    script.onload = initializeMap;
    document.head.appendChild(script);
}

function initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFucHciLCJhIjoiY2x1dHoyY285MDRjbjJpb3Zsb2w3NHk4ayJ9.9wClI0aVSS6QBCkb0xIK4A';

    if ('geolocation' in navigator) {
        console.log('Geolocation is supported');
    } else {
        console.log('Geolocation is not supported');
    }

    function successLocation(position) {
        const { latitude, longitude } = position.coords;

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 12
        });

        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    }

    function errorLocation(error) {
        console.error('Error getting geolocation', error);
    }

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
}

document.addEventListener('DOMContentLoaded', loadMapbox);
