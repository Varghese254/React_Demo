import logo from './logo.svg';
import './App.css';

function App() {

  const data=['item1','item2','item3']
  return (
    <div align="center">
      <h1>Hello</h1>

      <ul>
        {
          data.map((item)=>(
            <li>{item}</li>
            ))
        }
      </ul>
        
    </div>
  );
}

export default App;
