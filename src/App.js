import logo from './logo.svg';
import './App.css';

function App() {

  const student=[
    {rollno:"1",name:"varghese",gender:"male"},
    {rollno:"2",name:"sree",gender:"female"},
  ]
  return (
    <div>
      <h1>Hello</h1>

      <ul>
        {
          student.map((stud)=>(
            <li>{stud.rollno} {stud.name}</li>
            ))
        }
      </ul>
        
    </div>
  );
}

export default App;
