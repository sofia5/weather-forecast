import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import WeatherForecast from "./components/WeatherForecast";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<WeatherForecast />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
