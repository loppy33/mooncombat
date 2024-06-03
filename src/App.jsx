import './App.sass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import { useEffect, useState } from 'react';



// Инициализация Telegram Web Apps SDK и запрос на развертывание на полный экран

function App() {
  const [checkTg, setCheckTg] = useState('no')
  useEffect(() => {
    console.log(1);
      const tg = window.Telegram.WebApp
      tg.expand()
      checkTg('yes')
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='mooncombat/' element={<Home checkTg={checkTg} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
