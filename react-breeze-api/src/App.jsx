import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddPhoto from './components/AddPhoto';
import ParentCard from './components/Cards';
import AnnouncementDetails from './components/AnnouncementDetails';
import AddAnnouncement from './components/AddAnnouncement';
import Container from './components/container';
import Footer from './components/footer';
import AddGroup from './components/AddGroup';
import Emploi from './components/Emploi';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/Authcontext';
import Nosformation from './components/Nosfromation';
import Detailsfiliere from './components/DetailFormation';
import AddPvNote from './components/AddPvNote';
import PvList from './components/PvList';
import Dev from './components/Devloppement';
import Infra from './components/Infra';
import Ge from './components/GE';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addannonce' element={<AddPhoto />} />
          <Route path='/addcard' element={<AddAnnouncement />} />
          <Route path='/formation' element={<Nosformation />} />
          <Route path='/ge' element={<Ge />} />
          <Route path='/pvliste' element={<PvList />} />
          <Route path='/dev' element={<Dev />} />
          <Route path='/infra' element={<Infra />} />
          <Route path='/addpv' element={<AddPvNote />} />
          <Route path="/details/:id" element={<AnnouncementDetails />} />
          <Route path="/detailsAA/:id" element={<Detailsfiliere />} />
          <Route path="/addgroup" element={<ProtectedRoute element={<AddGroup />} />} />
          <Route path="/emploi" element={<ProtectedRoute element={<Emploi />} />} />
        </Routes>
      </Container>
      <Footer />
    </AuthProvider>
  );
}

export default App;
