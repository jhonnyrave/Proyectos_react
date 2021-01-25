import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const list = [
    { title: "Descargar", link: "discor.com", key: 1 },
    {
      title: "¿Por qué Discord?",
      link: "https://discord.com/why-discord-is-different",
      key: 2,
    },
    { title: "Nitro", link: "https://discord.com/nitro", key: 3 },
    { title: "Seguridad", link: "https://discord.com/safety", key: 4 },
    {
      title: "Soporte técnico",
      link: "https://support.discord.com/hc/es",
      key: 5,
    },
  ];
  return (
    <div className="App">
      <Header titleListElement={list}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
