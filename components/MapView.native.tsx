import React from "react";
import MapView, { Marker, MapViewProps } from "react-native-maps";
import { View } from "react-native";

export type AppMapViewProps = MapViewProps & {
  markers?: { latitude: number; longitude: number; title?: string }[];
};

export default function AppMapView({ markers = [], ...props }: AppMapViewProps) {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} {...props}>
        {markers.map((m, i) => (
          <Marker
            key={i}
            coordinate={{ latitude: m.latitude, longitude: m.longitude }}
            title={m.title}
          />
        ))}
      </MapView>
    </View>
  );
}
