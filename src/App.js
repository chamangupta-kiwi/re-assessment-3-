import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './Component/Add';
import Edit from './Component/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
