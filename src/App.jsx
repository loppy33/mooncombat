import './App.sass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import { useEffect } from 'react';



// Инициализация Telegram Web Apps SDK и запрос на развертывание на полный экран

function App() {

  useEffect(() => {
    console.log(1);
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      tg.expand()
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='mooncombat/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
