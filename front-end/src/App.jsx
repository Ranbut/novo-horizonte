import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignInClients, SignInReceptionists, SignInMedics, AboutUs, Specialties, Locations, 
  Clients, Receptionists, NotFound, Medics } from './pages/index.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/clients/sign-in" element={<SignInClients />} />
          <Route path="/receptionists/sign-in" element={<SignInReceptionists />} />
          <Route path="/medics/sign-in" element={<SignInMedics />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/clients/app" element={<Clients />} />
          <Route path="/receptionists/app" element={<Receptionists />} />
          <Route path="/medics/app" element={<Medics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};