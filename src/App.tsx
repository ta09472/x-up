import { Routes, Route } from "react-router";
import Layout from "@/components/layout";
import APage from "./pages/a-page";
import BPage from "./pages/b-page";
import CPage from "./pages/c-page";
import Polygon from "./pages/polygon";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<APage />} />
        <Route path="/b" element={<BPage />} />
        <Route path="/c" element={<CPage />} />
        <Route path="/polygon" element={<Polygon />} />
      </Route>
    </Routes>
  );
}

export default App;
