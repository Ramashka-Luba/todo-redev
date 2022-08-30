import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input.jsx';
import Title from './components/title/Title.jsx';
import Item from './components/item/Item';

function App() {
  return (
    <div className="App">
      <div className="inner">
        <Title/>
        <Input/>
        <Item/>
      </div>
      
    </div>
  );
}

export default App;
