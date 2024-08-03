import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './componentes/Navigation';

import Provider from './contexts/PizzaContext';
import Home from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';
import NotFound from './views/NotFound';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/desafio-mammamia/" element={<Home />} />
          <Route path="/desafio-mammamia/home" element={<Home />} />
          <Route path="/desafio-mammamia/pizza/:id" element={<Pizza />} />
          <Route path="/desafio-mammamia/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
