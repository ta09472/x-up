import { Routes, Route } from "react-router";
import Layout from "@/components/layout";
import APage from "./pages/a-page";
import { CountContextProvider } from "./context/count-context";

function App() {
  return (
    <CountContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<APage />} />
        </Route>
      </Routes>
    </CountContextProvider>
  );
}

export default App;
