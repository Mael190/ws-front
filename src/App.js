import './App.css';
import Index from './components/Index'
import Room from './components/Room';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toaster from "react-hot-toast";



function App() {

  return (
    <BrowserRouter>
      <Toaster />
        <Routes>
            <Route path="/message"  element={<Room />} />
            <Route path="/*"  element={<Index  />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
