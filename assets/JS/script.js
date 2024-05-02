
// Code JavaScript pour créer et afficher la carte
// Coordonnées initiales et niveau de zoom
let map = L.map('map').setView([40.741895, -73.989308], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([40.741895, -73.989308]).addTo(map)
  .bindPopup('Bonjour SPA !')
  .openPopup();

