import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignIn, AboutUs, Specialties, Locations, Clients, NotFound } from './pages/index.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};