import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, AboutUs, Specialties, Locations, NotFound } from './pages/index.jsx';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};