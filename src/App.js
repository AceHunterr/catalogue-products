import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />}></Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
