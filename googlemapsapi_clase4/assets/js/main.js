/* let map = ""; */
let markersAll = [];
let map = '';
window.initMap = () => {
    // The location of Caba
    const caba = {
        lat: -34.6068,
        lng: -58.4358
    };
    // The map, centered at Caba
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: caba,
            styles: styles,
            fullscreenControl: false,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            }
        });
    // The marker, positioned at Caba
    /* const marker = new google.maps.Marker({
        position: caba,
        map: map
    }); */
    fetchMarkers(map)
}

const addMarker = (map, marker) => {
    console.log(marker);
    const {
        lat,
        lng,
        name,
        description,
        type
    } = marker;
    const contentString = `<div><h2>${name}</h2>
    <h3>${type}</h3>
    <p>${description}</p></div>`;
    const infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    const icons = {
        'Birreria': './assets/beer.png',
        'Restaurant': './assets/burger.png',
        'Barcito Cheto': './assets/cheto.png'
    };
    const markerItem = new google.maps.Marker({
        position: {
            lat,
            lng
        },
        icon: icons[type],
        map: map,
        customInfo: type
    });
    markerItem.setMap(map);
    markerItem.addListener('click', function () {
        infoWindow.open(map, markerItem);
    });
    markersAll.push(markerItem);
}

const fetchMarkers = async (map) => {
    try {
        const response = await fetch('./assets/js/data/markers.json');
        const json = await response.json();
        json.forEach(marker => {
            addMarker(map, marker);
        });
    } catch (error) {
        console.log(error);
    }
}

const handleFilterBeer = document.querySelector('.beer');
const handleFilterRestaurant = document.querySelector('.restaurant');
const handleFilterCheto = document.querySelector('.cheto');

handleFilterBeer.addEventListener('click', (e) => {
    e.preventDefault();
    addMarkerFiltered('Birreria');
})
handleFilterRestaurant.addEventListener('click', (e) => {
    e.preventDefault();
    addMarkerFiltered('Restaurant');
})
handleFilterCheto.addEventListener('click', (e) => {
    e.preventDefault();
    addMarkerFiltered('Barcito Cheto');
})
const addMarkerFiltered = (markerType) => {
    markersAll.forEach((marker) => {
        //console.log(marker);
        marker.setMap(null); //Delete all markers from map
    });

    const markerFiltered = markersAll.filter((markerItem) =>
        markerItem.customInfo === markerType
    );
    console.log(markerFiltered);
    markerFiltered.forEach((marker) => {
        marker.setMap(map)
    });
}