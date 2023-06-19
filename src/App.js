import './App.css';
import FindWeather from "./components/findWeather";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      	<Routes>
          <Route path="/" element={<FindWeather/>} />
        </Routes>
    </div>
  );
}

export default App;
