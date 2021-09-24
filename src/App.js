import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./pages/Sidebar";
import './styles/global.scss';
function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;