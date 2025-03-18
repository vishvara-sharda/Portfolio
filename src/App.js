import logo from './logo.svg';
import Name from "./components/name"
import './App.css';
import Navbar from './components/Navbar';
//import Rectangle_hero from './components/Rectangle_hero';
import Oval_profile from './components/Oval_profile';
import Divider from "./components/divider";
import Projects from "./components/Projects";
import Dividerdivide from "./components/Dividerdivide";
//import Divider from './components/divider';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Divider></Divider>
      <Name></Name>
      <Oval_profile></Oval_profile>
      <Dividerdivide></Dividerdivide>
      <Projects></Projects>
      
    </div>
  );
}

export default App;
