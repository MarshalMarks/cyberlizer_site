import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ElementGallery from './pages/ElementGallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/test' element={ <ElementGallery /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
