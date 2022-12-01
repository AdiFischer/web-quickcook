import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
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
            <Route path='/fish' element={<AllRecipes bestFor="fish" />} />
            <Route path='/salads' element={< AllRecipes bestFor="salads"/>} />
            <Route path='/dairy' element={<AllRecipes bestFor="dairy" />} />
            <Route path='/chicken' element={<AllRecipes bestFor="chicken" />} />
            <Route path='/meat' element={<AllRecipes bestFor="meat" />} />
            <Route path='/desserts' element={<AllRecipes bestFor="desserts" />} /> 
            <Route path='/add-new' element={<AddNew />} />
            <Route path='/recipe/:id' element={<OneRecipe />} />
          </Routes>
        </RecipesContextProvider>
        <Footer />
      </UserChoiceContextProvider>
    </BrowserRouter>
  );
}

export default App;
