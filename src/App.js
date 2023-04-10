import logo from "./logo.svg";
import "./App.css";
import Header from "./components/molecules/header";
import Users from "./components/molecules/users";
import TodoBlock from "./components/organisms/todoBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Users />
        <TodoBlock />
      </div>
    </div>
  );
}

export default App;
