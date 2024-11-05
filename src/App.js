
//import './LoginPage.css'
import Signup from './Register';
import Count from './Counter';
import Login from './LoginPage';
import Top  from './Top';

function App() {
  
  return (
    <div>   
       <h1>Product List</h1> 
      <Top name="Laptop" price="$999" description="high performance"/>
      <Top name="Mobilephone" price="$699" description="good performance"/>
    </div>
  );
}

export default App;
