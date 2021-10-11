import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./pages/Sidebar";
import { GeoLocation } from "./services/Geolocation";

import './styles/global.scss';
function App() {
  GeoLocation();

  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;