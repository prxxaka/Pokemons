import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPokemon from "./pages/AboutPokemon/AboutPokemon";
import { MainPage } from "./pages/MainPage";
import { fetchPokemonS } from "./api/fetchPokemons";
const App = () =>  {
    const [ theme, setTheme ] = useState('dark');
    const toogleTheme  = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }
    useEffect(() => {
        fetchPokemonS(10, 20)
    }, [])
    return (
        <div className={`app ${theme}`}>
            <button
                onClick={toogleTheme}
                className="button">
                Change Theme
            </button>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPokemon />} />
            </Routes>
        </div>
    );
}

export default App;