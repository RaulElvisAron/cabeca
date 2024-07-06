// src/components/LayerControl.js
import React from 'react';
import { LayersControl, ImageOverlay, LayerGroup } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import '../styles.css'; // Importar o arquivo CSS

const bounds = new LatLngBounds(
  [-5.134475371454281, -79.50845859491564],
  [30.67883861843332, 6.762828376789505]
);

function LayerControl() {
  return (
    <LayersControl position="topright">
      <LayersControl.Overlay name="Divisões Territoriais">
        <LayerGroup>
          <ImageOverlay
            url={`${process.env.PUBLIC_URL}/img/OsTerritoriosConhecidos.png`}
            bounds={bounds}
          />
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Nomes de Regiões">
        <LayerGroup>
          <ImageOverlay
            url={`${process.env.PUBLIC_URL}/img/AsLegendasConhecidas.png`}
            bounds={bounds}
          />
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
}

export default LayerControl;
