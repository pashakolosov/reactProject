import './App.css'
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

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
