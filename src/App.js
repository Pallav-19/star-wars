import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"

import Navigation from './components/navigation/Navigation';
import { navigationRoutes } from './constants/appConstants';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Navigation />}
        >
          <Route path='/' index element={<Home />} />
          {
            navigationRoutes.map((nav) => <Route key={nav.name} path={nav.to} element={nav.element} />)
          }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
