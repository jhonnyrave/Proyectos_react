import "./App.css";
import Header from "./components/header";

function App() {
  const list = [
    { title: "Descargar", link: "discor.com", key: 1 },
    { title: "¿Por qué Discord?", key: 2 },
    { title: "Nitro", key: 3 },
    { title: "Seguridad", key: 4 },
  ];
  return (
    <div className="App">
      <Header titleListElement={list}></Header>
    </div>
  );
}

export default App;
