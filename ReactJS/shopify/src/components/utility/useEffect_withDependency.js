import { useState } from 'react';
import './app.css'
import { useEffect } from 'react';

var UseEffectWithDependency = () => {
    const[firstValue, setFirstValue] = useState('');
    const[secondValue, setSecondValue] = useState('');
    const[result, setResult] = useState(0);

    useEffect(()=>{
        setResultValue();
    },[firstValue,secondValue]);

    var handleValueChangeFval = (event) => {
        setFirstValue(parseInt(event.target.value));
    }

    var handleValueChangeSval = (event) => {
        setSecondValue(parseInt(event.target.value));
    }

    var setResultValue = () => {
        setResult(firstValue + secondValue);
    }

    return(
        <div>

            <ul className="detailsContainer">
                <li> 
                    <input type='number' placeholder='Enter first value' value={firstValue} onChange={handleValueChangeFval}></input>
                </li>
                <li> 
                    <input type='number' placeholder='Enter second value' value={secondValue} onChange={handleValueChangeSval}></input>
                </li>
                <li>
                    <input type='button' value="Get Result" onClick={setResultValue}></input>
                </li>
                <li>
                    The Sum of value is {result}
                </li>
            </ul>
 
        </div>
    )
}

export default UseEffectWithDependency;