import DeckGL from "@deck.gl/react";
import { PolygonLayer } from "@deck.gl/layers";
import * as turf from "@turf/turf";

// 폴리곤 데이터 정의 (A, B, C, D 좌표)
const polygonData = [
  [-122.41669, 37.7853], // A
  [-122.41669, 37.781], // B
  [-122.411, 37.781], // C
  [-122.411, 37.7853], // D
  [-122.41669, 37.7853], // A (폴리곤 닫기)
];

// 폴리곤 생성
const polygon = turf.polygon([polygonData]);

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

export default function Visualize() {
  const layers = [
    // 폴리곤
    new PolygonLayer({
      id: "polygon-layer",
      data: [polygon],
      getPolygon: (d) => d.geometry.coordinates,
      getFillColor: [0, 0, 0, 255],
      getLineColor: [255, 255, 255],
      getLineWidth: 5,
    }),
  ];

  return (
    <div className=" w-[500px] h-[500px]">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller
        layers={layers}
      />
    </div>
  );
}
