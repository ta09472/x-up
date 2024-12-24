import { Routes, Route } from "react-router";
import Layout from "@/components/layout";
import APage from "./pages/a-page";
import { CountContextProvider } from "./context/count-context";
import BPage from "./pages/b-page";
import CPage from "./pages/c-page";

function App() {
  return (
    <CountContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<APage />} />
          <Route path="/b" element={<BPage />} />
          <Route path="/c" element={<CPage />} />
        </Route>
      </Routes>
    </CountContextProvider>
  );
}

export default App;
