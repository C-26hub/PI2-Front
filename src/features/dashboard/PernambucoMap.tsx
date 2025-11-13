"use client";

import React, { useState } from 'react';
import { Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';

// Dados Mockados
const locations = [
  { id: 1, city: "Recife", lat: -8.0578381, lng: -34.8828969, beneficiaries: 450 },
  { id: 2, city: "Garanhuns", lat: -8.8911, lng: -36.4958, beneficiaries: 312 },
  { id: 3, city: "Petrolina", lat: -9.3970334, lng: -40.5052951, beneficiaries: 280 },
  { id: 4, city: "Caruaru", lat: -8.2849, lng: -35.9699, beneficiaries: 200 },
];

const pernambucoCenter = { lat: -8.4, lng: -37.0 }; 

export default function PernambucoMap() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  return (
    // 1. O Container Pai define a altura física (400px)
    <div className="h-[400px] w-full rounded-md overflow-hidden relative bg-gray-100">
      <Map
        // 2. CORREÇÃO CRUCIAL: Forçar o mapa a ocupar 100% do container pai
        style={{ width: '100%', height: '100%' }}
        defaultCenter={pernambucoCenter}
        defaultZoom={7}
        gestureHandling={'cooperative'}
        disableDefaultUI={true}
      >
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={{ lat: loc.lat, lng: loc.lng }}
            onClick={() => setSelectedLocation(loc)}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 text-black">
              <h3 className="font-bold text-ecosy-blue">{selectedLocation.city}</h3>
              <p className="text-sm">Beneficiários: {selectedLocation.beneficiaries}</p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
}