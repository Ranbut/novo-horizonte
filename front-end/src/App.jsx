import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, SignInClients, SignInReceptionists, AboutUs, Specialties, Locations, Clients, Receptionists, NotFound } from './pages/index.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/clients/sign-in" element={<SignInClients />} />
          <Route path="/Receptionists/sign-in" element={<SignInReceptionists />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/clients/app" element={<Clients />} />
          <Route path="/receptionists/app" element={<Receptionists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};