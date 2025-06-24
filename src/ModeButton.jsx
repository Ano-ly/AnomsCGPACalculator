import React, { useState, useEffect } from 'react';
import './App.css';

function ModeButton() {
    //When ModeButton is first mounted, retrieve user preference or use default
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme == 'dark') {
                return 'Dark';
            } else {
                return 'Light';
            }
        }
        return 'Dark';
    });

    const [oppTheme, setOppTheme] = useState('');
    

    // Will run whenever the theme state changes.
    useEffect(() => {
        if (theme === 'Dark') {
            document.body.classList.add('dark-mode');
            setOppTheme('Light');
        } else {
            document.body.classList.remove('dark-mode');
            setOppTheme('Dark');
        }
        localStorage.setItem('theme', theme.toLowerCase());
    });

    const toggleTheme = () => {
        setTheme(previousTheme => (previousTheme === 'Dark' ? 'Light' : 'Dark'));
    }
    return (
        <div className="cont__main__dec__col__mod" onClick={toggleTheme}>
            {oppTheme} Mode
        </div>
    );
}
export default ModeButton;