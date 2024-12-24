import DeckGL from "@deck.gl/react";
import { PolygonLayer, LineLayer, ScatterplotLayer } from "@deck.gl/layers";
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

// A와 B를 기준으로 직선 생성
const lineAB = turf.lineString([
  [-122.4155, 37.784], // 폴리곤 내부의 점 1
  [-122.4125, 37.7825], // 폴리곤 내부의 점 2
]);

// 교차할 다른 직선 (E, F 정의)
const lineEF = turf.lineString([
  [-122.4145, 37.782], // E
  [-122.4125, 37.784], // 폴리곤 내부의 점 2
]);

// 선의 끝점 가져오기
const cPoint = turf.point(lineAB.geometry.coordinates[0]); // A-B 선의 시작점
const dPoint = turf.point(lineAB.geometry.coordinates[1]); // A-B 선의 끝점
const ePoint = turf.point(lineEF.geometry.coordinates[0]); // E-F 선의 시작점
const fPoint = turf.point(lineEF.geometry.coordinates[1]); // E-F 선의 끝점

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
    // A-B 직선
    new LineLayer({
      id: "line-ab",
      data: [lineAB],
      getSourcePosition: (d) => d.geometry.coordinates[0],
      getTargetPosition: (d) => d.geometry.coordinates[1],
      getColor: [255, 255, 255],
      getWidth: 2,
    }),
    // E-F 직선
    new LineLayer({
      id: "line-ef",
      data: [lineEF],
      getSourcePosition: (d) => d.geometry.coordinates[0],
      getTargetPosition: (d) => d.geometry.coordinates[1],
      getColor: [255, 255, 255],
      getWidth: 2,
    }),
    // C와 D 점 (A-B 직선의 끝점)
    new ScatterplotLayer({
      id: "points-ab",
      data: [cPoint, dPoint],
      getPosition: (d) => d.geometry.coordinates,
      getFillColor: [255, 0, 0],
      getRadius: 5,
    }),
    // E와 F 점 (E-F 직선의 끝점)
    new ScatterplotLayer({
      id: "points-ef",
      data: [ePoint, fPoint],
      getPosition: (d) => d.geometry.coordinates,
      getFillColor: [0, 255, 0],
      getRadius: 5,
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
