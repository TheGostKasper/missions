function TranslateComponent({ lang, switchLang }: any) {
  return (
    <div className="d-flex mt-5  w-100">
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
  );
}

export default TranslateComponent;
