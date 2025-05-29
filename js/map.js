// map.js (à inclure après Leaflet et après avoir chargé #polluant, #annee, #saison…
document.getElementById('afficher').addEventListener('click', function() {
  const pollutant = document.getElementById('polluant').value;
  const annee    = document.getElementById('annee').value;
  const saison   = document.getElementById('saison').value;
  
  // ⚠️ Chemin RELATIF vers le dossier `data/` du repo
  const imagePath = `data/${pollutant}_${annee}_${saison}.png`;
  
  // Suppression de l’ancienne couche si elle existe
  if (map.overlay) {
    map.removeLayer(map.overlay);
  }
  // Ajout de la nouvelle image
  map.overlay = L.imageOverlay(imagePath, imageBounds).addTo(map);
});
