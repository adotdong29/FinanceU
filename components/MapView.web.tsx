import React from "react";

type Props = {
  markers?: { latitude: number; longitude: number; title?: string }[];
  height?: number | string;
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta?: number;
    longitudeDelta?: number;
  };
};

export default function AppMapView({ markers = [], height = 400 }: Props) {
  return (
    <div
      style={{
        height,
        width: "100%",
        display: "grid",
        placeItems: "center",
        border: "1px solid #ccc",
        borderRadius: 12,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>
          Map placeholder (web)
        </div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          {markers.length ? `${markers.length} marker(s)` : "No markers"}
        </div>
      </div>
    </div>
  );
}
