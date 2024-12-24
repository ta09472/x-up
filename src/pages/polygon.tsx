import DeckGL from "@deck.gl/react";
import { PolygonLayer } from "@deck.gl/layers";
import * as turf from "@turf/turf";

const polygonData = [
  [-122.41669, 37.7853], // 시작점
  [-122.41669, 37.781],
  [-122.411, 37.781],
  [-122.411, 37.7853],
  [-122.41669, 37.7853], // 끝점 (시작점과 동일)
];

// 중심점 계산
const center = turf.centroid(turf.polygon([polygonData])).geometry.coordinates;

const INITIAL_VIEW_STATE = {
  longitude: center[0],
  latitude: center[1],
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const layers = [
  new PolygonLayer({
    id: "polygon-layer",
    data: [{ coordinates: polygonData }],
    getPolygon: (d) => d.coordinates,
    // getFillColor: [0, 0, 0, 0],
    getLineColor: [0, 0, 0],
    lineWidthMinPixels: 2,
  }),
];

export default function Polygon() {
  return (
    <div className="relative w-[500px] h-[500px] border border-neutral-300 rounded-lg">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller
        layers={layers}
      />
    </div>
  );
}
