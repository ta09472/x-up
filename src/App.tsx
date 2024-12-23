import { Routes, Route } from "react-router";
import Layout from "@/components/layout";
import APage from "./pages/a-page";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<APage />} />
      </Route>
    </Routes>
  );
}

export default App;
