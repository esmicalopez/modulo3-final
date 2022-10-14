import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import LoginRef from './routes/Login/Login';
import LocationCreation from './routes/Location/LocationCreation';
import LocationDisplay from './routes/Location/LocationDisplay';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginRef />} />
          <Route path='location/:id' element={<LocationDisplay />} />
          <Route path='location/create' element={<LocationCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;