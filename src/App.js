import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Salads from './pages/Salads';
import Chicken from './pages/Chicken';
import Dairy from './pages/Dairy';
import Meat from './pages/Meat';
import Fish from './pages/Fish';
import Desserts from './pages/Desserts';
import AddNew from './pages/AddNew';
import OneRecipe from './pages/OneRecipe';
import { UserChoiceContextProvider } from './context/UserChoiceContext';
import { RecipesContextProvider } from './context/RecipesContext';
import AllRecipes from './pages/AllRecipes';

function App() {
  return (
    <BrowserRouter>
      <UserChoiceContextProvider>
        <Header />
        <RecipesContextProvider>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/all-recipes' element={<AllRecipes />} />
            <Route path='/fish' element={<Fish />} />
            <Route path='/salads' element={<Salads />} />
            <Route path='/dairy' element={<Dairy />} />
            <Route path='/chicken' element={<Chicken />} />
            <Route path='/meat' element={<Meat />} />
            <Route path='/desserts' element={<Desserts />} /> 
            <Route path='/add-new' element={<AddNew />} />
            <Route path='/one-recipe' element={<OneRecipe />} />
          </Routes>
        </RecipesContextProvider>
        <Footer />
      </UserChoiceContextProvider>
    </BrowserRouter>
  );
}

export default App;
