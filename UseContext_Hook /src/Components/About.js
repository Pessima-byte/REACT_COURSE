import { useState, useContext } from "react";
import {AppContext} from "../App";

const About = ()=>{
    const [InputValue, setInputValue] = useState("");
    const {setUserName}=useContext(AppContext);

    const SetInputValueFunc = (e)=>{
        setInputValue(`${e.target.value}`);
    }

    const SetFunction = ()=>{
        setUserName(`${InputValue}`);
        setInputValue(``);
    }


    return(
        <>
            <h1>This is my About Page</h1>
            <input type="text" placeholder="Enter Username" onChange={SetInputValueFunc} value={InputValue}/>
            <br/>
            <button onClick={SetFunction}>Edit Username</button>
        </>
    )
}

export default About;