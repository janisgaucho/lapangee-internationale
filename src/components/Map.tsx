"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

// Faux marqueurs pour la démonstration (Coopératives agricoles au Sénégal)
const cooperatives = [
  { id: 1, name: "Coopérative de Thiès", latitude: 14.8, longitude: -16.9 },
  { id: 2, name: "Coopérative de Kaolack", latitude: 14.15, longitude: -16.06 },
  { id: 3, name: "Coopérative de Saint-Louis", latitude: 16.03, longitude: -16.48 },
  { id: 4, name: "Coopérative de Ziguinchor", latitude: 12.58, longitude: -16.27 },
  { id: 5, name: "Coopérative de Kolda", latitude: 12.88, longitude: -14.94 },
];

export default function SenegalMap() {
  const [viewState, setViewState] = useState({
    longitude: -14.45,
    latitude: 14.49,
    zoom: 5.5,
  });

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] rounded-2xl overflow-hidden border border-border/50 shadow-sm relative bg-muted flex items-center justify-center">
      {!process.env.NEXT_PUBLIC_MAPBOX_TOKEN ? (
        <div className="text-center p-6 bg-background/80 rounded-xl max-w-md shadow-lg border border-border">
          <p className="font-semibold text-lg mb-2">Carte Indisponible</p>
          <p className="text-muted-foreground text-sm">
            Vous devez ajouter votre clé d'API Mapbox (<code>NEXT_PUBLIC_MAPBOX_TOKEN</code>) dans le fichier <code>.env.local</code> pour afficher la carte.
          </p>
        </div>
      ) : (
        <Map
          {...viewState}
          onMove={(evt: any) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          attributionControl={false}
        >
          <NavigationControl position="bottom-right" />
          
          {cooperatives.map((coop) => (
            <Marker
              key={coop.id}
              longitude={coop.longitude}
              latitude={coop.latitude}
              anchor="bottom"
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold shadow-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap mb-1">
                  {coop.name}
                </div>
                <MapPin className="h-8 w-8 text-primary drop-shadow-md transition-transform group-hover:scale-110" />
              </div>
            </Marker>
          ))}
        </Map>
      )}
    </div>
  );
}
