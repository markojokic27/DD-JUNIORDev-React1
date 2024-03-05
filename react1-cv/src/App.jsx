import "./App.css";
import CV from "./CV.jsx";
import data from './assets/data.json'
function App() {
  return (
    <div className="app">
      <CV data={data}/>
    </div>
  );
}

export default App;
