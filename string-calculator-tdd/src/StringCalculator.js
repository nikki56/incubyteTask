import React, { useState } from "react";


export function add(numbers) {
    if (!numbers) return 0;

    return parseInt(numbers, 10) ;
}


export const StringCalculator = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleCalculate = () => {
        try {
            setError("");
            setResult(add(input));
        } catch (e) {
            setError(e.message);
            setResult(null);
        }
    };

  
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>String Calculator</h2>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers"
            style={{ padding: "10px", width: "300px", fontSize: "16px" }}
        />
        <br />
        <button 
            onClick={handleCalculate} 
            style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
            Calculate
        </button>
        {result !== null && <h3>Result: {result}</h3>}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
    );
};

// export StringCalculator;
