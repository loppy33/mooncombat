import React, { useState, useEffect } from 'react';
import './Header.sass';
import ImageStar from '../assets/pngs/star.png';

export default function Header({ balance }) {
    const [displayedBalance, setDisplayedBalance] = useState(balance);

    useEffect(() => {
        const increment = Math.ceil((balance - displayedBalance) / 100); // определяем шаг увеличения числа
        let currentBalance = displayedBalance;

        if (increment === 0) return; // если изменение баланса ничтожно мало, не начинаем анимацию

        const interval = setInterval(() => {
            currentBalance += increment;
            if (currentBalance >= balance) {
                clearInterval(interval);
                currentBalance = balance;
            }
            setDisplayedBalance(currentBalance);
        }, 15); // каждые 10 мс обновляем значение

        return () => clearInterval(interval); // очистка интервала при удалении компонента
    }, [balance, displayedBalance]);

    // Форматирование баланса с разделителями тысяч
    const formattedBalance = displayedBalance.toLocaleString('en-US');

    return (
        <header>
            <div className="left">
                <h2><img src={ImageStar} alt="" /> {formattedBalance}</h2>
            </div>
        </header>
    );
}
