import { useState } from "react";
import "./App.css";
import Missions from "./components/missions-components/missions";
import TranslateComponent from "./components/translate-component";
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
        <TranslateComponent lang={lang} switchLang={switchLang} />
        <Missions />
      </div>
    </LangContextProvider>
  );
}

export default App;
