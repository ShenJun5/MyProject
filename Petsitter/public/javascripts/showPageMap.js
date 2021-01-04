mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: blog.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});


new mapboxgl.Marker()
    .setLngLat(blog.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${blog.title}</h3><p>${blog.location}</p>`
            )
    )
    .addTo(map)

