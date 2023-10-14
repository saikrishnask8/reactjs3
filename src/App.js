import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
//import files
import Clrs from "./Components/Colors";
import Button from "./Components/Button";

function App() {
  return (
    <div id="back" className="back">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Clrs />} />
          <Route path="/" />
        </Routes>
        <Button />
      </HashRouter>
    </div>
  );
}

export default App;
