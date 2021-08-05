import './App.css'
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Content />
        </div> 
      </div>
    </div>
  );
}

export default App;
