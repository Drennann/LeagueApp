import { BrowserRouter , Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ChampionPage from "./pages/ChampionPage"
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';

import './App.css';

function App() {

  return (

    
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/404" element={<NotFound/>}/>
          <Route path="/:champion" element={<ChampionPage />}/>
          
        </Routes>
    </BrowserRouter>

  );
}

export default App;
