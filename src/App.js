import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import BillRecomendations from "./Components/Recomendations/BillRecomendations";
import ElonRecomendations from "./Components/Recomendations/ElonRecomendations";
function App() {
  return (
    <div className="App">
      <Layout />
      <BillRecomendations />
      <ElonRecomendations />
    </div>
  );
}

export default App;
