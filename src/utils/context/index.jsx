import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ( props ) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext()

export const SurveyProvider = ( props ) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers})
    }
    return (
        <SurveyContext.Provider value={{ answers, saveAnswers}}>
            {props.children}
        </SurveyContext.Provider>
    )
}