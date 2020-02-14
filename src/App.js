import React from "react";
import "./App.css";


function App() {

    const getDefaultTheme = () => {
        const isDarkModeEnabled = JSON.parse(localStorage.getItem("is-dark-mode-enabled"));
        return isDarkModeEnabled || false;
    };

    const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme());

    React.useEffect(() => {
        localStorage.setItem("is-dark-mode-enabled", JSON.stringify(darkTheme));
    }, [darkTheme]);


    return (
        <div className={darkTheme ? "techy-dark-theme" : "techy-light-theme"}>
            <nav>
                <div className="button-container">
                    <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
                        Change Theme
                    </button>
                </div>
            </nav>
            <div className="content">
                <h1>{darkTheme ? "Dark Mode" : "Light Mode"}</h1>

            </div>
        </div>
    );
}

export default App;
