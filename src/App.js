import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home, Category, BlogGrid, RecipeDetails } from './containers';
import { Header, Navbar, Footer } from './components';
import './App.css';


function App() {
  return (
    <div className="App" >
      <Header />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/view' element={<BlogGrid />} />
        <Route path='/recipe/details' element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
