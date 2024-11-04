import React,{useState} from 'react'

function Counter() {
    const [formData, setFormData] = useState({count:0});
    const[showButtons,setShowButtons]=useState(false);

    const handleInputChanges = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: Number(value) }));
    };

      const handleSubmit = (event) => {
        event.preventDefault();
       setShowButtons((prevShowButton)=>!prevShowButton);
      };

      const increment=()=>
      {
        setFormData((prevFormData)=>({...prevFormData,count:prevFormData.count+1}));
      }

      const decrement = () => {
        setFormData((prevData) => ({ ...prevData, count: prevData.count - 1 }));
      };

      const reset=()=>{
        setFormData((prevData)=>({...prevData,count:0}));
      }
  return (
    <div><h1>Counter</h1>
    <button type="submit" onClick={handleSubmit}>Hide And Show</button>
   
    {showButtons && (
        <div>
          <input type="number" name="count" value={formData.count} 
          onChange={handleInputChanges}/><br/>
          <button onClick={increment}>Increment</button>&nbsp;
          <button onClick={decrement}>Decrement</button>&nbsp;
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Counter