import { createContext, useContext } from "react";

export const ThemeContext = createContext ({
    themeMode: "dark",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function userTheme(){
    return useContext(ThemeContext)
}