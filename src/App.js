import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormContext from './screens/FormContext';
import HomeScreen from './screens/HomeScreen';
import SubmitScreen from './screens/SubmitScreen';
import QRScreen from './screens/QRScreen';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    agreed: false,
    quantity: 0,
  });
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/submit">Submit</Link> |{" "}
          <Link to="/qr">QR Code</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/submit" element={<SubmitScreen />} />
          <Route path="/qr" element={<QRScreen />} />
        </Routes>
      </div>
    </Router>
    </FormContext.Provider>
  );
}

export default App;




