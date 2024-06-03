import './App.sass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import { useEffect, useState } from 'react';


const tg = window.Telegram.WebApp
// Инициализация Telegram Web Apps SDK и запрос на развертывание на полный экран

function App() {
  useEffect(() => {
    tg.expand()
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
