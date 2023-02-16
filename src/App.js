import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="">
      <NavBar />
      <BookList />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;
