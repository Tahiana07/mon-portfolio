import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout';
import Accueil from './pages/Accueil';
import Competences from './pages/Competences';
import './App.css'
import Contacts from './pages/Contacts';
import Projets from './pages/Projets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mon-portfolio' element={<MainLayout />}>
          <Route index element={<Accueil />} />
          <Route path='/mon-portfolio/competences' element={<Competences />} />
          <Route path='/mon-portfolio/contacts' element={<Contacts />} />
          <Route path='/mon-portfolio/projets' element={<Projets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
