import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookDetails from './components/BookDetails';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
