import { useState } from "react";
import "./App.css";
import Missions from "./missions-components/Missions";
import { LangContextProvider } from "./shared-components/lang-context";

function App() {
  const [lang, setLang] = useState("en");
  const switchLang = (lng: string) => {
    if (lng !== lang) {
      setLang(lng);
    }
  };

  return (
    <LangContextProvider lang={lang}>
      <div className="container mission-wrapper ">
        <div className="d-flex mt-5  mx-card">
          <button
            className={`btn ${lang === "en" ? "active" : "default"}`}
            onClick={() => switchLang("en")}
          >
            English
          </button>
          <button
            className={`btn ml-4 ${lang === "es" ? "active" : "default"}`}
            onClick={() => switchLang("es")}
          >
            Spanish
          </button>
        </div>
        <Missions />
      </div>
    </LangContextProvider>
  );
}

export default App;
