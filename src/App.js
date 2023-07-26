import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Summary from './Components/Summary/Summary';
import Textarea from './Components/Textarea/Textarea';

function App() {
  return (
    <div className="App"> 
     <Navbar/>
      <div className='main-app'>
  <div className='small-container'>
  <Summary/>
  <Textarea/>
  </div>
  </div>
    </div>
  );
}

export default App;
