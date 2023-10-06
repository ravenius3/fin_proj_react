import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<SearchPage />}/> 
      </Routes> 
    </div>
  );
}

export default App;
