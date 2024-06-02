import './App.sass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='mooncombat/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
