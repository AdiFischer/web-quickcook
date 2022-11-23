import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import ListByType from './pages/ListByType';
import AddNew from './pages/AddNew';
import OneRecipe from './pages/OneRecipe';
function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/list-by-type' element={<ListByType />} />
    <Route path='/add-new' element={<AddNew />} />
    <Route path='/one-recipe' element={<OneRecipe />} />
    {/* <Route path='*' element={<h2>Page not found</h2>} /> */}
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;
