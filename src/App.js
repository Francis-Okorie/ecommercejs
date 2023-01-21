import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header'
import About from './components/About';
import Dishes from './components/Dishes';
import Dinning from './components/Dinning';
import Chefs from './components/Chefs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Dishes></Dishes>
      <Dinning></Dinning>
      <Chefs></Chefs>
    </div>
  );
}

export default App;
