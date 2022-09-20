
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Layouts/frontend/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import './css/style.css';






function App() {
  return (
   <>
 <Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    
  </Routes>
</Router>
   </>
   
  )
}

export default App;
