import React, { useState } from 'react'

function Bmicalculator() {
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState(''); 
    const [bmiValue, setBmiValue] = useState(''); 
    const [bmiMessage, setBmiMessage] = useState(''); 
  
    const calculateBmi = () => { 
        if (height && weight) { 
            const heightinM = height / 100; 
            const bmi = (weight / (heightinM * heightinM)).toFixed(2); 
            setBmiValue(bmi); 
  
            let message = ''; 
            if (bmi < 18.5) { 
                message = 'underweight'; 
            } else if (bmi >= 18.5 && bmi < 25) { 
                message = 'healthy weight'; 
            } else { 
                message = 'overweight'; 
            } 
            setBmiMessage(message); 
        } else { 
            setBmiValue(''); 
            setBmiMessage(''); 
        } 
    };
    
    let reload = () => {
        window.location.reload()
      }
  return (
    <div className="p-3 mb-2 bg-secondary-subtle text-primary-emphasis position-absolute top-50 start-50 translate-middle text-center"> 
            <h1 className='mb-1'>BMI Calculator</h1> 
            <div className="mt-2"> 
                <label htmlFor="height">Enter Your Height(cm): </label> 
                <input 
                    type="number"
                    id="height"
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                /> 
            </div> 
            <div className="mt-2"> 
                <label htmlFor="weight">Enter Your Weight(kg): </label> 
                <input 
                    type="number"
                    id="weight"
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                /> 
            </div> 
            <div className="mt-1">
                <button className="btn btn-primary" onClick={calculateBmi}> 
                    Calculate BMI 
                </button> 
                <button className='btn btn-outline' onClick={reload} type='submit'>
                    Reset
                </button>
            </div>
            {bmiValue && bmiMessage && ( 
                <div className="text-center"> 
                    <p> 
                        Your BMI: <span className="bmi-value">{bmiValue}</span> 
                    </p> 
                    <p> 
                        Result: <span className="bmi-message">{bmiMessage}</span> 
                    </p> 
                </div> 
            )} 
        </div> 
  );
}

export default Bmicalculator;