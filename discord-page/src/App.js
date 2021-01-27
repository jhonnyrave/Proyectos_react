import Header from "./components/header";
import Main from "./components/main";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const list = [
    { title: "Descargar", link: "discord.com", key: 1 },
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
      <Router>
        <div>
          <Header titleListElement={list}></Header>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <LoginInicial />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <Main></Main>;
}

function LoginInicial() {
  return <Login></Login>;
}
