import {useState,useContext} from 'react';
import {AppContext} from '../App';

const Contact = ()=>{
    const [InputValue, setInputValue] = useState("");
       const {setEmail}=useContext(AppContext);
   
       const SetInputValueFunc = (e)=>{
           setInputValue(`${e.target.value}`);
       }
   
       const SetFunction = ()=>{
           setEmail(`${InputValue}`);
           setInputValue(``);
       }
   
   
       return(
           <>
               <h1>This is my Contact Page</h1>
               <input type="text" placeholder="Enter Email" onChange={SetInputValueFunc} value={InputValue}/>
               <br/>
               <button onClick={SetFunction}>Edit Email</button>
           </>
       )
}

export default Contact;