import React, { useState } from 'react';

const Mobile = () => {
    let [charge, setCharge] = useState(100)
    if (charge < 0) {
        setCharge(0)
    } else if (charge > 100) {
        setCharge(100)
    }
    const downCharge = () => setCharge(charge - 10);
    const upCharge = () => setCharge(charge + 10);
    return (
        <div style={{ margin: "40px 0" }}>
            <h3>Battery Charge : {charge}%</h3>
            <button onClick={downCharge}>Down</button>
            <button onClick={upCharge} style={{ marginLeft: "10px" }}>Up</button>
        </div>
    );
};

export default Mobile;